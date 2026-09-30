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
        // Storybook 10 calls this as (component, {component, param}).
        // The markdown lives at param.notes — read it from there, not the top-level arg.
        extractComponentDescription: (component, { param }) => {
            const notes = param?.notes;
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
            resultTypes: ['violations'],
        },
    },
};

setupBackgroundListener();
export const tags = ['autodocs'];

// Group props into categories in the args table, by Moonstone naming convention:
//  - on*      → "Events"  (and disable the control: a JSON editor for a callback is meaningless;
//               handlers belong in the Actions panel, but stay documented here)
//  - is*/has* → "State", EXCEPT the appearance/theme flags below. Those are not interaction
//               state, so they stay ungrouped alongside variant/color/size.
// secondPass = run after control inference so our control settings aren't re-inferred away.
const APPEARANCE_FLAGS = ['isReversed', 'isItalic', 'isUpperCase', 'isNowrap', 'hasLineThrough'];
const categorizeArgs = (context) => {
    const { argTypes = {} } = context;
    const next = {};
    for (const key in argTypes) {
        const argType = argTypes[key];
        const table = argType.table || {};
        if (/^on[A-Z]/.test(key)) {
            next[key] = {
                ...argType,
                control: false,
                table: {
                    ...table,
                    category: 'Events',
                },
            };
        } else if (/^(is|has)[A-Z]/.test(key) && !APPEARANCE_FLAGS.includes(key)) {
            next[key] = {
                ...argType,
                table: {
                    ...table,
                    category: 'State',
                },
            };
        } else {
            next[key] = argType;
        }
    }
    return next;
};
categorizeArgs.secondPass = true;
export const argTypesEnhancers = [categorizeArgs];
