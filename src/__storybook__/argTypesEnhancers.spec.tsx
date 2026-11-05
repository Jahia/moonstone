import { categorizeArgs, controlArgs, nameIconArgs } from './argTypesEnhancers';
import { iconArgType, iconElements } from './iconArgType';

import type { StoryContextForEnhancers } from 'storybook/internal/types';

const context = (fields: Partial<StoryContextForEnhancers>) => ({ argTypes: {}, initialArgs: {}, ...fields }) as StoryContextForEnhancers;
const prop = (summary: string, fields = {}) => ({ name: '', table: { type: { summary } }, ...fields });
const controlOf = (argTypes: StoryContextForEnhancers['argTypes'], initialArgs = {}) =>
    Object.fromEntries(Object.entries(controlArgs(context({ argTypes, initialArgs }))).map(([key, argType]) => [key, argType.control]));

const [iconName, iconElement] = Object.entries(iconElements)[0];
const Icon = iconElement.type as React.FC<{ size?: string }>;

describe('controlArgs', () => {
    it('should remove the control of a handler, even one the story set', () => {
        expect(controlOf({
            onClick: prop('(e: MouseEvent) => void'),
            onChange: prop('(value: string) => void', { options: ['a'], control: { type: 'select' } }),
        })).toEqual({ onClick: false, onChange: false });
    });

    it('should keep an argType the story set as is', () => {
        const withOptions = prop('string', { options: ['a', 'b'] });
        const withMapping = prop('ReactNode', { mapping: { a: 'A' } });
        const withControl = prop('ReactNode', { control: { type: 'select' } });
        const result = controlArgs(context({ argTypes: { withOptions, withMapping, withControl } }));
        expect(result.withOptions).toBe(withOptions);
        expect(result.withMapping).toBe(withMapping);
        expect(result.withControl).toBe(withControl);
    });

    it('should give the icon select to an icon prop that takes an element or a node', () => {
        const result = controlArgs(context({
            argTypes: {
                icon: prop('ReactElement'),
                iconStart: prop('ReactNode'),
                iconEnd: prop('ReactElement'),
                modeIcon: prop('string | ReactElement'),
            },
        }));
        Object.values(result).forEach(argType => expect(argType).toMatchObject(iconArgType));
    });

    it('should not give the icon select to an icon prop of another type', () => {
        expect(controlOf({ icon: prop('string') })).toEqual({ icon: undefined });
    });

    it('should remove the control of a ref, an element type, or an element', () => {
        expect(controlOf({
            ref: prop('Ref<HTMLDivElement>'),
            innerRef: prop('RefObject<HTMLDivElement>'),
            inputRef: prop('MutableRefObject<HTMLInputElement>'),
            component: prop('ElementType'),
            header: prop('ReactElement'),
            badge: prop('ReactElement<BadgeProps>'),
            selector: prop('<T>(props: T) => ReactElement'),
        })).toEqual({ ref: false, innerRef: false, inputRef: false, component: false, header: false, badge: false, selector: false });
    });

    it('should give a text field to a node prop, unless the story passes an element', () => {
        expect(controlOf(
            { label: prop('ReactNode'), count: prop('ReactNode'), title: prop('ReactNode'), content: prop('ReactNode') },
            { label: 'Label', count: 3, content: <span/> },
        )).toEqual({ label: { type: 'text' }, count: { type: 'text' }, title: { type: 'text' }, content: false });
    });

    it('should give a text field to children only when the story passes text', () => {
        expect(controlOf({ children: prop('ReactNode') })).toEqual({ children: false });
        expect(controlOf({ children: prop('ReactNode') }, { children: 'Text' })).toEqual({ children: { type: 'text' } });
        expect(controlOf({ children: prop('ReactNode') }, { children: <span/> })).toEqual({ children: false });
    });

    it('should remove the JSON editor of an object or an array', () => {
        expect(controlOf({
            style: prop('CSSProperties', { control: { type: 'object' } }),
            size: prop('Size', { type: { name: 'object', value: {} } }),
            data: prop('DropdownData', { type: { name: 'array', value: { name: 'other' } } }),
            i18n: prop('{ handleLabel?: string }', { type: { name: 'other', value: '' } }),
        })).toEqual({ style: false, size: false, data: false, i18n: false });
    });

    it('should keep the control Storybook infers for a scalar', () => {
        const label = prop('string', { type: { name: 'string' } });
        const isDisabled = prop('boolean', { type: { name: 'boolean' }, control: { type: 'boolean' } });
        const variant = prop('"default" | "ghost"', { type: { name: 'enum', value: ['default', 'ghost'] } });
        const result = controlArgs(context({ argTypes: { label, isDisabled, variant } }));
        expect(result.label).toBe(label);
        expect(result.isDisabled).toBe(isDisabled);
        expect(result.variant).toBe(variant);
    });

    it('should remove the control of an arg the story sets without a prop, when its value is an object', () => {
        expect(controlArgs(context({
            argTypes: {},
            initialArgs: { children: <span/>, style: { color: 'red' }, label: 'Label', empty: null },
        }))).toEqual({ children: { control: false }, style: { control: false } });
    });
});

describe('categorizeArgs', () => {
    const component = { __docgenInfo: { props: { onKeyPress: { tags: { deprecated: 'Use `onKeyUp` instead' } }, legacy: { tags: { deprecated: 'Use `size` instead.' } } } } };
    const categorize = (argTypes: StoryContextForEnhancers['argTypes']) => categorizeArgs(context({ argTypes, component }));
    const categoryOf = (argTypes: StoryContextForEnhancers['argTypes']) =>
        Object.fromEntries(Object.entries(categorize(argTypes)).map(([key, argType]) => [key, argType.table?.category]));

    it('should put a deprecated prop under "Deprecated", with no control, led by the message of its tag', () => {
        const result = categorize({
            onKeyPress: prop('(e: KeyboardEvent) => void', { description: 'Called on a key press', control: { type: 'text' } }),
            legacy: prop('string'),
        });
        expect(result.onKeyPress).toMatchObject({
            control: false,
            description: 'Use `onKeyUp` instead. Called on a key press',
            table: { category: 'Deprecated', type: { summary: '(e: KeyboardEvent) => void' } },
        });
        expect(result.legacy.description).toBe('Use `size` instead.');
    });

    it('should list the deprecated props last, and keep the order of the others', () => {
        expect(Object.keys(categorize({
            onKeyPress: prop('() => void'),
            label: prop('string'),
            legacy: prop('string'),
            onClick: prop('() => void'),
        }))).toEqual(['label', 'onClick', 'onKeyPress', 'legacy']);
    });

    it('should put a handler under "Events" and a state flag under "State"', () => {
        expect(categoryOf({
            onClick: prop('() => void'),
            isDisabled: prop('boolean'),
            hasError: prop('boolean'),
        })).toEqual({ onClick: 'Events', isDisabled: 'State', hasError: 'State' });
    });

    it('should leave the appearance flags and the other props without a category', () => {
        expect(categoryOf({
            isReversed: prop('boolean'),
            isItalic: prop('boolean'),
            isUpperCase: prop('boolean'),
            isNowrap: prop('boolean'),
            hasLineThrough: prop('boolean'),
            island: prop('string'),
            variant: prop('string'),
        })).toEqual({ isReversed: undefined, isItalic: undefined, isUpperCase: undefined, isNowrap: undefined, hasLineThrough: undefined, island: undefined, variant: undefined });
    });
});

describe('nameIconArgs', () => {
    it('should give the icon select the name of a bare icon element', () => {
        expect(nameIconArgs(context({
            argTypes: { icon: { name: 'icon', ...iconArgType } },
            initialArgs: { icon: <Icon/> },
        }))).toEqual({ icon: iconName });
    });

    it('should leave an icon with props, a non-icon arg, or a value that is not an icon element', () => {
        expect(nameIconArgs(context({
            argTypes: {
                icon: { name: 'icon', ...iconArgType },
                iconEnd: { name: 'iconEnd', ...iconArgType },
                iconStart: { name: 'iconStart', ...iconArgType },
                header: { name: 'header' },
            },
            initialArgs: { icon: <Icon size="big"/>, iconEnd: <span/>, iconStart: iconName, header: <Icon/> },
        }))).toEqual({});
    });
});
