import {composeStories} from '@storybook/react';
import type {JSX} from 'react';
import {describe, expect, test} from 'vitest';
import {render} from 'vitest-browser-react';
// @ts-expect-error preview is js not ts
import * as projectAnnotations from '../.storybook/preview.jsx';

// Import all stories
const stories = import.meta.glob<never>('./**/*.stories.{js,jsx,ts,tsx}', {eager: true});

// These stories do not create a stable screenshot, skip for now
const ignore = new Set([
    './components/Menu/Menu.stories.tsx-Default'
]);

describe.for(Object.entries(stories))('%s', ([file, imports]) => {
    test.for(Object.entries<() => JSX.Element>(composeStories(imports, projectAnnotations)))('%s', async ([name, Story], {skip}) => {
        skip(ignore.has(`${file}-${name}`));
        const {container} = await render(<Story/>, {});
        await expect
            .element(container)
            .toMatchScreenshot(`${file}-${name}`);
    });
});
