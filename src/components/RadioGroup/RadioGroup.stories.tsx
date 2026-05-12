import React, {useState} from 'react';
import {StoryObj, Meta} from '@storybook/react-vite';

import {RadioGroup} from './index';
import {RadioItem} from './RadioItem';

const meta: Meta<typeof RadioGroup> = {
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
};
export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: Parameters<typeof RadioGroup>[0]) => (
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
);

export const NoDefaultValue: Story = {
    render: Template,

    args: {
        name: 'no-default-value'
    }
};

export const WithDefaultValue: Story = {
    render: Template,

    args: {
        name: 'default-value',
        defaultValue: 'dog'
    }
};

export const Disabled: Story = {
    render: Template,

    args: {
        name: 'disabled',
        isDisabled: true
    }
};

export const Controlled: Story = {
    render: args => {
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
};
