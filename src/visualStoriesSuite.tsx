// The Playwright provider gives the type of `cdp()`.
/// <reference types="@vitest/browser-playwright" />
import { composeStories } from '@storybook/react';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { cdp, page } from 'vitest/browser';

// @ts-expect-error preview is js not ts
import * as projectAnnotations from '../.storybook/preview.jsx';

import type { JSX } from 'react';

// A composed story is a render function; Storybook attaches its `play` interaction (if any) to it.
type ComposedStory = (() => JSX.Element) & {
    play?: (context: { canvasElement: HTMLElement }) => Promise<void>;
    parameters: { pseudo?: Record<string, string | string[]> };
};

// The keys of `parameters.pseudo` (the declaration of storybook-addon-pseudo-states) and the CSS
// pseudo-class that each key forces.
const pseudoClasses: Record<string, string> = {
    hover: 'hover',
    active: 'active',
    focusVisible: 'focus-visible',
};

type DomNode = {
    nodeId: number;
    documentURL?: string;
    children?: DomNode[];
    contentDocument?: DomNode;
};

// The test runs in an iframe of the page that the DevTools session sees.
const findDocument = (node: DomNode): DomNode | undefined =>
    node.contentDocument?.documentURL === location.href
        ? node.contentDocument
        : [...(node.children ?? []), ...(node.contentDocument ? [node.contentDocument] : [])].map(findDocument).find(Boolean);

/**
 * Forces the states that a story declares in `parameters.pseudo`, such as `{ hover: '#hover' }`,
 * with the "force element state" feature of the Chrome DevTools. A forced state applies to the
 * matched element only, not to its ancestors. Returns the function that removes the forced states.
 */
const forcePseudoStates = async (pseudo: Record<string, string | string[]>) => {
    const session = cdp();
    // DevTools names an element by its node id, and its CSS domain needs the DOM domain enabled first.
    await session.send('DOM.enable');
    await session.send('CSS.enable');
    const { root } = await session.send('DOM.getDocument', {
        depth: -1,
        pierce: true,
    });
    const testDocument = findDocument(root);
    if (!testDocument) {
        throw new Error('parameters.pseudo: the document of the test is not in the DevTools DOM');
    }

    const forced = new Map<number, string[]>();
    for (const [state, selectors] of Object.entries(pseudo)) {
        if (!pseudoClasses[state]) {
            throw new Error(`parameters.pseudo: "${state}" is not supported, use ${Object.keys(pseudoClasses).join(', ')}`);
        }

        for (const selector of [selectors].flat()) {
            const { nodeIds } = await session.send('DOM.querySelectorAll', {
                nodeId: testDocument.nodeId,
                selector,
            });
            if (nodeIds.length === 0) {
                throw new Error(`parameters.pseudo: no element matches "${selector}" for "${state}"`);
            }

            nodeIds.forEach(nodeId => forced.set(nodeId, [...(forced.get(nodeId) ?? []), pseudoClasses[state]]));
        }
    }

    await Promise.all([...forced].map(([nodeId, forcedPseudoClasses]) =>
        session.send('CSS.forcePseudoState', {
            nodeId,
            forcedPseudoClasses,
        })));
    // Disabling the CSS domain removes the forced states. The CSS domain goes first: with the DOM
    // domain disabled first, the states stay.
    return async () => {
        await session.send('CSS.disable');
        await session.send('DOM.disable');
    };
};

// Import all stories
const stories = import.meta.glob<never>('./**/*.stories.{js,jsx,ts,tsx}', { eager: true });

// These stories do not create a stable screenshot, skip for now
const ignore = new Set([
    './components/Menu/Menu.stories.tsx-Default',
    './icons/Icons.stories.tsx-_Default',
    // This story times out: https://github.com/Jahia/moonstone/issues/1710
    './components/Menu/MenuItem.stories.tsx-Playground',
]);

/**
 * Registers one visual test per story: render it, run its `play` interaction if it has one,
 * then compare a screenshot. Shared by visual.spec.tsx and visual-legacy.spec.tsx so the two
 * suites cannot drift apart.
 */
export const runVisualStoriesSuite = () => {
    describe.for(Object.entries(stories))('%s', ([file, imports]) => {
        test.for(Object.entries<ComposedStory>(composeStories(imports, projectAnnotations)))('%s', async ([name, Story], { skip }) => {
            skip(ignore.has(`${file}-${name}`));
            const { container } = await render(<Story/>, {});
            // toMatchScreenshot finds its target through a CSS path, such as "html > body > div".
            // A portal, such as the portal of a tooltip, can add a second div to the body. Then this
            // path finds two elements, and the screenshot fails. The id makes the path unique.
            container.id = 'visual-story';
            if (Story.play) {
                await Story.play({ canvasElement: container });
            }

            // Overlays (menus, calendars) render outside the container's bounding box, so any
            // story with a play function is screenshotted full-page instead of container-only.
            const screenshotTarget = Story.play ? document.body : container;
            const clearPseudoStates = Story.parameters.pseudo && await forcePseudoStates(Story.parameters.pseudo);
            // Give expect.element a locator, not an element. With an element, expect.element runs a
            // failed toMatchScreenshot again until the test times out. Then the error shows only
            // "Test timed out". With a locator, toMatchScreenshot runs one time and shows its error.
            // The timeout of toMatchScreenshot is less than the testTimeout in vite.config.mjs, so an
            // unstable screenshot also shows its own error.
            await expect
                .element(page.elementLocator(screenshotTarget))
                .toMatchScreenshot(`${file}-${name}`, { timeout: 2000 });
            await clearPseudoStates?.();
        });
    });
};
