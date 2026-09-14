import {composeStories} from '@storybook/react';
import type {JSX} from 'react';
import {describe, expect, test} from 'vitest';
import {render} from 'vitest-browser-react';
// @ts-expect-error preview is js not ts
import * as projectAnnotations from '../.storybook/preview.jsx';

// A composed story is a render function; Storybook attaches its `play` interaction (if any) to it.
type ComposedStory = (() => JSX.Element) & {play?: (context: {canvasElement: HTMLElement}) => Promise<void>};

// Import all stories
const stories = import.meta.glob<never>('./**/*.stories.{js,jsx,ts,tsx}', {eager: true});

// These stories do not create a stable screenshot, skip for now
const ignore = new Set([
    './components/Menu/Menu.stories.tsx-Default',
    './icons/Icons.stories.tsx-_Default'
]);

/**
 * Registers one visual test per story: render it, run its `play` interaction if it has one,
 * then compare a screenshot. Shared by visual.spec.tsx and visual-legacy.spec.tsx so the two
 * suites cannot drift apart.
 */
export const runVisualStoriesSuite = () => {
    describe.for(Object.entries(stories))('%s', ([file, imports]) => {
        test.for(Object.entries<ComposedStory>(composeStories(imports, projectAnnotations)))('%s', async ([name, Story], {skip}) => {
            skip(ignore.has(`${file}-${name}`));
            const {container} = await render(<Story/>, {});
            if (Story.play) {
                await Story.play({canvasElement: container});
            }

            // Overlays (menus, calendars) render outside the container's bounding box, so any
            // story with a play function is screenshotted full-page instead of container-only.
            const screenshotTarget = Story.play ? document.body : container;
            await expect
                .element(screenshotTarget)
                .toMatchScreenshot(`${file}-${name}`);
        });
    });
};
