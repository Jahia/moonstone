import React, { useState } from 'react';

import { RadioGroup } from './index';
import markdownNotes from './RadioGroup.md?raw';
import { RadioItem } from './RadioItem';

import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    subcomponents: { RadioItem },
    parameters: {
        layout: 'centered',
        knobs: { disable: true },
        storysource: { disable: true },
        componentSubtitle: 'Lets the user choose exactly one option.',
        docs: { description: { component: markdownNotes } },
        actions: { argTypesRegex: '^on.*' },
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<typeof RadioGroup>;

const Template: StoryFn<typeof RadioGroup> = args => (
    <RadioGroup {...args}>
        <RadioItem description="Miaouw" id="cat" label="Cat" value="cat"/>
        <RadioItem description="Ouah-ouah" id="dog" label="Dog" value="dog"/>
        <RadioItem
            isDisabled
            description="Disabled element"
            id="horse"
            label="Horse"
            value="horse"
        />
        <RadioItem id="bird" label="Bird without description" value="bird"/>
    </RadioGroup>
);

export const NoDefaultValue = {
    render: Template,

    args: {
        name: 'no-default-value',
    },
};

export const WithDefaultValue = {
    render: Template,

    args: {
        name: 'default-value',
        defaultValue: 'dog',
    },
};

export const Disabled = {
    render: Template,

    args: {
        name: 'disabled',
        isDisabled: true,
    },
};

export const Controlled: StoryObj<typeof RadioGroup> = {
    render: (args) => {
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
                <RadioItem description="Ouah-ouah" id="dog1" label="Dog" value="dog"/>
                <RadioItem description="Miaow" id="cat" label="Cat" value="cat"/>
                <RadioItem description="blop" id="fish" label="Fish" value="fish"/>
            </RadioGroup>
        );
    },
};

export const States: StoryObj<typeof RadioGroup> = {
    render: args => (
        <div style={{ padding: '8px' }}>
            <RadioGroup {...args}>
                <RadioItem label="Rest" value="rest"/>
                <RadioItem id="hover" label="Hover" value="hover"/>
                <RadioItem id="focus-visible" label="Focus" value="focus"/>
                <RadioItem label="Checked" value="checked"/>
                <RadioItem isDisabled label="Disabled" value="disabled"/>
                <RadioItem isReadOnly label="Read-only" value="read-only"/>
            </RadioGroup>
        </div>
    ),

    args: {
        name: 'states',
        defaultValue: 'checked',
    },

    parameters: {
        pseudo: {
            hover: '#hover',
            focusVisible: '#focus-visible',
        },
    },
};
