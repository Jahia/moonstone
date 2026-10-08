import { Controls, Description, Primary, Subtitle, Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import {
    STORY_ARGS_UPDATED,
    UPDATE_GLOBALS,
} from 'storybook/internal/core-events';
import { addons } from 'storybook/preview-api';

import { iconArgType, iconElements } from '../src/__storybook__/iconArgType';

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

// Give every prop a control that can set it, or none, from its type (react-docgen summary):
//  - on*                         → none: handlers belong in the Actions panel
//  - ref, ElementType, element   → none: the table can't build them
//  - object, array               → none: a JSON editor is error-prone and can break the preview
//  - icon props (icon, iconEnd…) → the icon select of iconArgType (rendered by renderIconArgs)
//  - ReactNode                   → text (a string is a valid node), or none when the story
//                                  passes an element (for children: unless it passes text)
// Only inferred controls are replaced: an argType the story sets (options, mapping, control
// type other than object) is left as is.
const ICON_PROP = /^(icon|[a-z]+Icon|icon(Start|End))$/;
const isNode = summary => /ReactNode|^string \| ReactElement/.test(summary);
const isElement = summary => /^(ReactElement|<)/.test(summary);
const isUnsettable = (key, summary) => key === 'ref' || /^((Mutable)?Ref(Object)?<|ElementType)/.test(summary);
// The JSON editor Storybook infers for objects and arrays (as in its inferControls)
const SCALAR_TYPES = ['boolean', 'string', 'number', 'enum', 'function', 'symbol'];
const isObjectControl = argType => argType.control?.type === 'object'
    || (!argType.control && argType.type && !SCALAR_TYPES.includes(argType.type.name));
const controlArgs = (context) => {
    const { argTypes = {}, initialArgs = {} } = context;
    const next = {};
    for (const key in argTypes) {
        const argType = argTypes[key];
        const summary = argType.table?.type?.summary ?? '';
        const isInferred = !argType.options && !argType.mapping && (!argType.control || argType.control.type === 'object');
        const initial = initialArgs[key];
        if (/^on[A-Z]/.test(key)) {
            next[key] = {
                ...argType,
                control: false,
            };
        } else if (!isInferred) {
            next[key] = argType;
        } else if (ICON_PROP.test(key) && (isElement(summary) || isNode(summary))) {
            next[key] = {
                ...argType,
                ...iconArgType,
            };
        } else if (isUnsettable(key, summary) || isElement(summary)) {
            next[key] = {
                ...argType,
                control: false,
            };
        } else if (isNode(summary)) {
            // children: a text field only when the story passes text (the story knows whether
            // free content makes sense); without an arg, the render owns the content
            const isText = ['string', 'number'].includes(typeof initial) || (initial === undefined && key !== 'children');
            next[key] = {
                ...argType,
                control: isText ? { type: 'text' } : false,
            };
        } else if (isObjectControl(argType)) {
            next[key] = {
                ...argType,
                control: false,
            };
        } else {
            next[key] = argType;
        }
    }
    // Args the story sets without a docgen prop (such as children of some components) get
    // their argType later, from their value: an object or element value gets no control
    for (const key in initialArgs) {
        const value = initialArgs[key];
        if (!(key in next) && value !== null && typeof value === 'object') {
            next[key] = { control: false };
        }
    }
    return next;
};
controlArgs.secondPass = true;

// Group props into categories in the args table, by Moonstone naming convention:
//  - @deprecated → "Deprecated", listed last, with no control: kept for migrations, led by the
//                 tag's message
//  - on*      → "Events" (their control is removed by controlArgs)
//  - is*/has* → "State", EXCEPT the appearance/theme flags below. Those are not interaction
//               state, so they stay ungrouped alongside variant/color/size.
// secondPass = run after control inference so our control settings aren't re-inferred away.
const APPEARANCE_FLAGS = ['isReversed', 'isItalic', 'isUpperCase', 'isNowrap', 'hasLineThrough'];
const categorizeArgs = (context) => {
    const { argTypes = {}, component } = context;
    // The docgen keeps `@deprecated` in its tags, but the args table drops it
    const docgenProps = component?.__docgenInfo?.props ?? {};
    const next = {};
    for (const key in argTypes) {
        const argType = argTypes[key];
        const table = argType.table || {};
        const deprecated = docgenProps[key]?.tags?.deprecated;
        if (deprecated !== undefined) {
            next[key] = {
                ...argType,
                control: false,
                description: [deprecated.replace(/([^.])$/, '$1.'), argType.description].filter(Boolean).join(' '),
                table: {
                    ...table,
                    category: 'Deprecated',
                },
            };
        } else if (/^on[A-Z]/.test(key)) {
            next[key] = {
                ...argType,
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
    // The table lists categories in the order of their first prop: deprecated props go last
    const isDeprecated = key => next[key].table?.category === 'Deprecated';
    const keys = Object.keys(next);
    return Object.fromEntries([...keys.filter(key => !isDeprecated(key)), ...keys.filter(isDeprecated)].map(key => [key, next[key]]));
};
categorizeArgs.secondPass = true;
export const argTypesEnhancers = [controlArgs, categorizeArgs];

// Stories pass icons as elements (`icon: <Love/>`), as the props' types require, but the icon
// select holds names: give it the name of a bare icon element, so the select shows the icon on
// screen. An icon with props (`<Love size="big"/>`) has no name and stays an element.
const iconNames = new Map(Object.entries(iconElements).map(([name, element]) => [element.type, name]));
const nameIconArgs = ({ argTypes = {}, initialArgs = {} }) => Object.fromEntries(
    Object.entries(initialArgs)
        .filter(([key, value]) => argTypes[key]?.isIcon && React.isValidElement(value) && iconNames.has(value.type)
            && Object.keys(value.props ?? {}).length === 0)
        .map(([key, value]) => [key, iconNames.get(value.type)]),
);
export const argsEnhancers = [nameIconArgs];
