import React from 'react';
import {
    STORY_ARGS_UPDATED,
    UPDATE_GLOBALS,
} from 'storybook/internal/core-events';
import { addons } from 'storybook/preview-api';

import '@fontsource-variable/nunito-sans';

// Copy imports from src/index.ts, in the same order
import '../src/globals/reset.scss';
import '../src/globals/_variables.scss';
import '../src/tokens/spacings/spacings.scss';
import '../src/tokens/colors/colors.scss';
import '../src/tokens/borders/borders.scss';

// Uncomment to use legacy css in storybook
// import '../dist/legacy-global-bundle.css';

let channel = addons.getChannel();
const storyListener = (args) => {
    if (typeof args.args.isReversed !== 'undefined') {
        let colorTheme = args.args.isReversed ? 'dark' : 'light';
        channel.emit(UPDATE_GLOBALS, {
            initialGlobals: {
                theme: colorTheme,
                backgrounds:
                    colorTheme === 'dark'
                        ? {
                                name: 'dark',
                                value: '#293136',
                            }
                        : {
                                name: 'light',
                                value: '#fdfdfd',
                            },
            },
        });
    }
};

function setupBackgroundListener() {
    channel.removeListener(STORY_ARGS_UPDATED, storyListener);
    channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

// Dark theme runs: stories tagged `dark-theme` render their reversed variant unless they set it
export const decorators = [
    (Story, { globals, args, tags }) =>
        globals.theme === 'dark' && tags.includes('dark-theme') && args.isReversed === undefined
            ? Story({
                    args: {
                        ...args,
                        isReversed: true,
                    },
                })
            : Story(),
];

export const parameters = {
    layout: 'fullscreen',

    docs: {
        extractComponentDescription: (component, { notes }) => {
            if (notes) {
                return typeof notes === 'string'
                    ? notes
                    : notes.markdown || notes.text;
            }
            return null;
        },
    },

    options: {
        storySort: {
            method: 'alphabetical',
        },
    },

    backgrounds: {
        options: {
            light: {
                name: 'light',
                value: '#fdfdfd',
            },
            dark: {
                name: 'dark',
                value: '#293136',
            },
        },
    },

    controls: {
        expanded: true,
        sort: 'requiredFirst',
    },

    a11y: {
        // 'todo' - show a11y violations in the test UI only
        // 'error' - fail CI on a11y violations
        // 'off' - skip a11y checks entirely
        test: 'todo',
        // WCAG 2.2 AA: axe tags are incremental, so every A/AA tag since 2.0 is needed
        options: {
            runOnly: {
                type: 'tag',
                values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
            },
        },
    },
};

setupBackgroundListener();
export const tags = ['autodocs'];
