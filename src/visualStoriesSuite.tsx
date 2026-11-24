import { composeStories } from '@storybook/react';
import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from 'vitest/browser';

// @ts-expect-error preview is js not ts
import * as projectAnnotations from '../.storybook/preview.jsx';

import type { JSX } from 'react';

// A composed story is a render function; Storybook attaches its `play` interaction (if any) to it.
type ComposedStory = (() => JSX.Element) & {
    tags: string[];
    play?: (context: { canvasElement: HTMLElement }) => Promise<void>;
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
            // A story leaves the visual tests with the `!visual` tag, which removes the `visual` tag of the preview
            skip(ignore.has(`${file}-${name}`) || !Story.tags.includes('visual'));
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
            // Give expect.element a locator, not an element. With an element, expect.element runs a
            // failed toMatchScreenshot again until the test times out. Then the error shows only
            // "Test timed out". With a locator, toMatchScreenshot runs one time and shows its error.
            // The timeout of toMatchScreenshot is less than the testTimeout in vite.config.mjs, so an
            // unstable screenshot also shows its own error.
            await expect
                .element(page.elementLocator(screenshotTarget))
                .toMatchScreenshot(`${file}-${name}`, { timeout: 2000 });
        });
    });
};
