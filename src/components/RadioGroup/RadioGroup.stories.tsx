import React, {useState} from 'react';
import preview from '~storybook/preview';
import {RadioGroup} from './index';
import {RadioItem} from './RadioItem';
import type {RadioGroupProps} from './RadioGroup.types';

const meta = preview.meta({
    title: 'Components/RadioGroup',
    component: RadioGroup,
    subcomponents: {RadioItem},
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        componentSubtitle: 'RadioGroup & RadioItem',
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

export const NoDefaultValue = meta.story({
    args: {
        name: 'no-default-value',
        children: []
    },
    render: (args: RadioGroupProps) => (
        <RadioGroup {...args}>
            <RadioItem id="cat" label="Cat" description="Miaouw" value="cat"/>
            <RadioItem id="dog" label="Dog" description="Ouah-ouah" value="dog"/>
            <RadioItem
                isDisabled
                id="horse"
                label="Horse"
                description="Disabled element"
                value="horse"
            />
            <RadioItem id="bird" label="Bird without description" value="bird"/>
        </RadioGroup>
    )
});

export const WithDefaultValue = meta.story({
    args: {
        name: 'default-value',
        defaultValue: 'dog',
        children: []
    },
    render: (args: RadioGroupProps) => (
        <RadioGroup {...args}>
            <RadioItem id="cat" label="Cat" description="Miaouw" value="cat"/>
            <RadioItem id="dog" label="Dog" description="Ouah-ouah" value="dog"/>
            <RadioItem
                isDisabled
                id="horse"
                label="Horse"
                description="Disabled element"
                value="horse"
            />
            <RadioItem id="bird" label="Bird without description" value="bird"/>
        </RadioGroup>
    )
});

export const Disabled = meta.story({
    args: {
        name: 'disabled',
        isDisabled: true,
        children: []
    },
    render: (args: RadioGroupProps) => (
        <RadioGroup {...args}>
            <RadioItem id="cat" label="Cat" description="Miaouw" value="cat"/>
            <RadioItem id="dog" label="Dog" description="Ouah-ouah" value="dog"/>
            <RadioItem
                isDisabled
                id="horse"
                label="Horse"
                description="Disabled element"
                value="horse"
            />
            <RadioItem id="bird" label="Bird without description" value="bird"/>
        </RadioGroup>
    )
});

export const Controlled = meta.story({
    args: {
        name: 'controlled',
        children: []
    },
    render: (args: RadioGroupProps) => {
        const [value, setValue] = useState('cat');

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
        };

        return (
            <RadioGroup
                {...args}
                name="controlled"
                value={value}
                onChange={event => handleChange(event)}
            >
                <RadioItem id="dog1" label="Dog" description="Ouah-ouah" value="dog"/>
                <RadioItem id="cat" label="Cat" description="Miaow" value="cat"/>
                <RadioItem id="fish" label="Fish" description="blop" value="fish"/>
            </RadioGroup>
        );
    }
});
