import { Controls, Description, Primary, Subtitle, Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import {
    STORY_ARGS_UPDATED,
    UPDATE_GLOBALS,
} from 'storybook/internal/core-events';
import { addons } from 'storybook/preview-api';

import { categorizeArgs, controlArgs, nameIconArgs } from '../src/__storybook__/argTypesEnhancers';
import { iconElements } from '../src/__storybook__/iconArgType';

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

// Icon props hold an icon name (see iconArgType): render it as the icon
const renderIconArgs = (Story, { args, argTypes }) => {
    const icons = Object.fromEntries(Object.entries(args)
        .filter(([key, value]) => argTypes[key]?.isIcon && iconElements[value])
        .map(([key, value]) => [key, iconElements[value]]));
    if (Object.keys(icons).length === 0) {
        return Story();
    }
    return Story({
        args: {
            ...args,
            ...icons,
        },
    });
};

// Dark theme runs: stories tagged `dark-theme` render their reversed variant unless they set it
export const decorators = [
    renderIconArgs,
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
        // One Docs page for every component, built from native blocks only:
        // subtitle = parameters.componentSubtitle, preview = first story,
        // prose = parameters.docs.description.component (the component's .md).
        // No "Show code": it prints the args, not the code a consumer writes (an icon shows as its
        // name). The .md Example is the code to copy.
        canvas: { sourceState: 'none' },
        page: () => (
            <>
                <Title/>
                <Subtitle/>
                <Primary/>
                <h2>Props</h2>
                <Controls/>
                <Description/>
            </>
        ),
    },

    options: {
        // Alphabetical by title, but EmptyCardSelector sorts as "CardSelector Empty", right after
        // CardSelector. Self-contained: Storybook serializes this function.
        storySort: (a, b) => {
            if (a.title === b.title) {
                return 0;
            }
            const key = entry => entry.title.replace(/(^|\/)EmptyCardSelector$/, '$1CardSelector Empty').split('/');
            const [keyA, keyB] = [key(a), key(b)];
            for (let i = 0; i < Math.max(keyA.length, keyB.length); i++) {
                if (keyA[i] === undefined) {
                    return -1;
                }
                if (keyB[i] === undefined) {
                    return 1;
                }
                if (keyA[i] !== keyB[i]) {
                    return keyA[i].localeCompare(keyB[i], undefined, {
                        numeric: true,
                        sensitivity: 'accent',
                    });
                }
            }
            return 0;
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
            rules: {
                'aria-allowed-role': { enabled: true },
                'presentation-role-conflict': { enabled: true },
                'aria-dialog-name': { enabled: true },
                'aria-treeitem-name': { enabled: true },
                'aria-text': { enabled: true },
                'empty-heading': { enabled: true },
                'empty-table-header': { enabled: true },
                'label-title-only': { enabled: true },
            },
        },

    },
};

setupBackgroundListener();
export const tags = ['autodocs'];

export const argTypesEnhancers = [controlArgs, categorizeArgs];
export const argsEnhancers = [nameIconArgs];
