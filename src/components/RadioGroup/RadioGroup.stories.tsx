import type {ChangeEvent} from 'react';
import preview from '~/__storybook__/preview';
import {useArgs} from 'storybook/preview-api';

import {RadioGroup} from './index';
import {RadioItem} from './RadioItem';
import type {RadioGroupProps} from './RadioGroup.types';

const defaultRadioItems: RadioGroupProps['children'] = [
    <RadioItem key="cat" id="cat" label="Cat" description="Miaouw" value="cat"/>,
    <RadioItem key="dog" id="dog" label="Dog" description="Ouah-ouah" value="dog"/>,
    <RadioItem
        key="horse"
        isDisabled
        id="horse"
        label="Horse"
        description="Disabled element"
        value="horse"
    />,
    <RadioItem key="bird" id="bird" label="Bird without description" value="bird"/>
];

const controlledRadioItems: RadioGroupProps['children'] = [
    <RadioItem key="dog1" id="dog1" label="Dog" description="Ouah-ouah" value="dog"/>,
    <RadioItem key="cat" id="cat" label="Cat" description="Miaow" value="cat"/>,
    <RadioItem key="fish" id="fish" label="Fish" description="blop" value="fish"/>
];

const meta = preview.meta({
    title: 'Components/RadioGroup',
    component: RadioGroup,
    subcomponents: {RadioItem},
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        docs: {
            subtitle: 'RadioGroup & RadioItem'
        },
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
});

const Template = (args: RadioGroupProps) => (
    <RadioGroup {...args}>
        {args.children}
    </RadioGroup>
);

export const NoDefaultValue = meta.story({
    render: Template,

    args: {
        children: defaultRadioItems,
        name: 'no-default-value'
    }
});

export const WithDefaultValue = meta.story({
    render: Template,

    args: {
        children: defaultRadioItems,
        name: 'default-value',
        defaultValue: 'dog'
    }
});

export const Disabled = meta.story({
    render: Template,

    args: {
        children: defaultRadioItems,
        name: 'disabled',
        isDisabled: true
    }
});

export const Controlled = meta.story({
    args: {
        children: controlledRadioItems,
        name: 'controlled',
        value: 'cat'
    },
    render(args) {
        const [{value}, updateArgs] = useArgs();

        const handleChange = (
            event: ChangeEvent<HTMLInputElement>,
            nextValue: string
        ) => {
            args.onChange?.(event, nextValue);
            updateArgs({value: nextValue});
        };

        return (
            <RadioGroup
                {...args}
                value={typeof value === 'string' ? value : 'cat'}
                onChange={handleChange}
            >
                {args.children}
           </RadioGroup>
        );
    }
});
