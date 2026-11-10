import React from 'react';

import '@fontsource-variable/nunito-sans';

// Copy imports from src/index.ts, in the same order
import '../src/globals/reset.scss';
import '../src/globals/_variables.scss';
import '../src/tokens/spacings/spacings.scss';
import '../src/tokens/colors/colors.scss';
import '../src/tokens/borders/borders.scss';

// Uncomment to use legacy css in storybook
// import '../dist/legacy-global-bundle.css';

// Dark theme runs: stories tagged `dark-theme` render their reversed variant unless they set it.
// Reversed stories get the dark canvas in the same render (a globals update would wait for the a11y run).
export const decorators = [
    (Story, {
        globals, args, tags, viewMode,
    }) => {
        const themeReversed = globals.theme === 'dark' && tags.includes('dark-theme') && args.isReversed === undefined;
        // In docs, only the block that renders this style (several blocks can show the same story)
        const selector = viewMode === 'docs' ? '.docs-story:has(style[data-reversed])' : 'body';
        return (
            <>
                {(args.isReversed || themeReversed) && <style data-reversed>{`${selector} { background: var(--moon-color-gray_dark); color: var(--moon-color-light); }`}</style>}
                {themeReversed
                    ? Story({
                            args: {
                                ...args,
                                isReversed: true,
                            },
                        })
                    : Story()}
            </>
        );
    },
];

// Declares `theme` so it can be set from the URL (`globals=theme:dark`)
export const initialGlobals = {
    theme: 'light',
};

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

export const tags = ['autodocs'];
