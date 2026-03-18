import {composeStories} from '@storybook/react';
import type {JSX} from 'react';
import {describe, expect, test} from 'vitest';
import {render} from 'vitest-browser-react';

// Import all stories
const stories = import.meta.glob<never>('./**/*.stories.{js,jsx,ts,tsx}', {eager: true});

// These stories do not create a stable screenshot, skip for now
const ignore = new Set([
    './components/DataTable/DataTable.stories.tsx-EmptyDataTable',
    './components/Menu/Menu.stories.tsx-Default'
]);

describe.for(Object.entries(stories))('%s', ([file, imports]) => {
    test.for(Object.entries(composeStories(imports)))('%s', async ([name, Story]: [string, () => JSX.Element], {skip}) => {
        skip(ignore.has(`${file}-${name}`));
        const {container} = await render(<Story/>, {});
        await expect
            .element(container)
            .toMatchScreenshot(`${file}-${name}`);
    });
});
