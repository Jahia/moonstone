import React from 'react';

import { iconArgType, iconElements } from './iconArgType';

import type { InputType, StoryContextForEnhancers } from 'storybook/internal/types';

type DocgenComponent = { __docgenInfo?: { props?: Record<string, { tags?: { deprecated?: string } }> } };

// One rule of an enhancer: the first rule whose `when` matches a prop gives its new argType.
// Without `apply`, or when no rule matches, the argType is left as is.
type Rule<Input> = {
    why: string;
    when: (input: Input) => boolean;
    apply?: (input: Input) => InputType;
};
const applyFirstRule = <Input extends { argType: InputType }>(rules: Rule<Input>[], input: Input) =>
    rules.find(rule => rule.when(input))?.apply?.(input) ?? input.argType;

const isHandler = (key: string) => /^on[A-Z]/.test(key);

// --- Controls -------------------------------------------------------------------------------
// Each prop gets a control that can set it, or none, from its type: the summary react-docgen
// writes in the args table.

const isIconProp = (key: string) => /^(icon|[a-z]+Icon|icon(Start|End))$/.test(key);
const isNode = (summary: string) => /ReactNode|^string \| ReactElement/.test(summary);
const isElement = (summary: string) => /^(ReactElement|<)/.test(summary);
const isUnsettable = (key: string, summary: string) => key === 'ref' || /^((Mutable)?Ref(Object)?<|ElementType)/.test(summary);
// A text field, unless the story passes an element. For children, only when the story passes
// text: without an arg, the render owns the content
const isTextNode = (key: string, initial: unknown) =>
    ['string', 'number'].includes(typeof initial) || (initial === undefined && key !== 'children');

// A story can give `control` and `type` as objects or as strings: only the object forms have these fields
const controlType = ({ control }: InputType) => (control && typeof control === 'object' && 'type' in control ? control.type : undefined);
const typeName = ({ type }: InputType) => (type && typeof type === 'object' ? type.name : undefined);
// The story set the control itself (options, mapping, or a control other than the JSON editor)
const isSetByStory = (argType: InputType) => Boolean(argType.options || argType.mapping || (argType.control && controlType(argType) !== 'object'));
// The JSON editor Storybook infers for objects and arrays (as in its inferControls)
const SCALAR_TYPES = ['boolean', 'string', 'number', 'enum', 'function', 'symbol'];
const isObjectControl = (argType: InputType) => controlType(argType) === 'object'
    || Boolean(!argType.control && argType.type && !SCALAR_TYPES.includes(typeName(argType)));

type ControlInput = {
    key: string;
    argType: InputType;
    summary: string;
    initial: unknown;
};
const withControl = (control: InputType['control']) => ({ argType }: ControlInput) => ({
    ...argType,
    control,
});

const CONTROL_RULES: Rule<ControlInput>[] = [
    {
        why: 'Handlers belong in the Actions panel, even when the story set a control',
        when: ({ key }) => isHandler(key),
        apply: withControl(false),
    },
    {
        why: 'The story set this control itself',
        when: ({ argType }) => isSetByStory(argType),
    },
    {
        why: 'An icon prop gets the icon select, which renderIconArgs turns into the icon',
        when: ({ key, summary }) => isIconProp(key) && (isElement(summary) || isNode(summary)),
        apply: ({ argType }) => ({
            ...argType,
            ...iconArgType,
        }),
    },
    {
        why: 'The table can\'t build a ref, an element type, or an element',
        when: ({ key, summary }) => isUnsettable(key, summary) || isElement(summary),
        apply: withControl(false),
    },
    {
        why: 'A string is a valid node',
        when: ({ summary }) => isNode(summary),
        apply: input => withControl(isTextNode(input.key, input.initial) ? { type: 'text' } : false)(input),
    },
    {
        why: 'A JSON editor is error-prone and can break the preview',
        when: ({ argType }) => isObjectControl(argType),
        apply: withControl(false),
    },
];

export const controlArgs = ({ argTypes, initialArgs }: StoryContextForEnhancers) => {
    const next: Record<string, InputType> = Object.fromEntries(Object.entries(argTypes).map(([key, argType]) => [
        key,
        applyFirstRule(CONTROL_RULES, {
            key,
            argType,
            summary: argType.table?.type?.summary ?? '',
            initial: initialArgs[key],
        }),
    ]));
    // Args the story sets without a docgen prop (such as children of some components) get
    // their argType later, from their value: an object or element value gets no control
    for (const [key, value] of Object.entries(initialArgs)) {
        if (!(key in next) && value !== null && typeof value === 'object') {
            next[key] = { control: false };
        }
    }
    return next;
};
// Run after Storybook infers the controls, so these aren't inferred again
controlArgs.secondPass = true;

// --- Categories -----------------------------------------------------------------------------
// Props are grouped in the args table by Moonstone naming convention.

// Flags of appearance or theme, not of interaction state: they stay with variant, color, and size
const APPEARANCE_FLAGS = ['isReversed', 'isItalic', 'isUpperCase', 'isNowrap', 'hasLineThrough'];
const isStateFlag = (key: string) => /^(is|has)[A-Z]/.test(key) && !APPEARANCE_FLAGS.includes(key);

type CategoryInput = {
    key: string;
    argType: InputType;
    deprecated?: string;
};
const inCategory = (category: string) => ({ argType }: CategoryInput) => ({
    ...argType,
    table: {
        ...argType.table,
        category,
    },
});

const CATEGORY_RULES: Rule<CategoryInput>[] = [
    {
        why: 'A deprecated prop is kept for migrations: no control, and the message of its tag leads the description',
        when: ({ deprecated }) => deprecated !== undefined,
        apply: input => ({
            ...inCategory('Deprecated')(input),
            control: false,
            description: [input.deprecated.replace(/([^.])$/, '$1.'), input.argType.description].filter(Boolean).join(' '),
        }),
    },
    {
        why: 'Handlers, whose control controlArgs removes',
        when: ({ key }) => isHandler(key),
        apply: inCategory('Events'),
    },
    {
        why: 'Interaction state',
        when: ({ key }) => isStateFlag(key),
        apply: inCategory('State'),
    },
];

export const categorizeArgs = ({ argTypes, component }: StoryContextForEnhancers) => {
    // The docgen keeps `@deprecated` in its tags, but the args table drops it
    const docgenProps = (component as DocgenComponent | undefined)?.__docgenInfo?.props ?? {};
    const entries = Object.entries(argTypes).map(([key, argType]) => [
        key,
        applyFirstRule(CATEGORY_RULES, {
            key,
            argType,
            deprecated: docgenProps[key]?.tags?.deprecated,
        }),
    ] as const);
    // The table lists categories in the order of their first prop: deprecated props go last
    const isDeprecated = ([, argType]: typeof entries[number]) => argType.table?.category === 'Deprecated';
    return Object.fromEntries([...entries.filter(entry => !isDeprecated(entry)), ...entries.filter(isDeprecated)]);
};
categorizeArgs.secondPass = true;

// --- Icon args ------------------------------------------------------------------------------
// Stories pass icons as elements (`icon: <Love/>`), as the props' types require, but the icon
// select holds names: give it the name of a bare icon element, so the select shows the icon on
// screen. An icon with props (`<Love size="big"/>`) has no name and stays an element.

const iconNames = new Map(Object.entries(iconElements).map(([name, element]) => [element.type, name]));
const isBareIcon = (value: unknown): value is React.ReactElement => React.isValidElement(value)
    && iconNames.has(value.type) && Object.keys(value.props ?? {}).length === 0;

export const nameIconArgs = ({ argTypes, initialArgs }: StoryContextForEnhancers) => Object.fromEntries(
    Object.entries(initialArgs)
        .filter(([key, value]) => argTypes[key]?.isIcon && isBareIcon(value))
        .map(([key, value]) => [key, iconNames.get((value as React.ReactElement).type)]),
);
