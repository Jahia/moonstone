import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {RadioGroup} from './index';
import {RadioItem} from './RadioItem';

export default {
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
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = args => (
    <RadioGroup {...args}>
        <RadioItem
                id="cat"
                label="Cat"
                description="Miaouw"
                value="cat"
            />
        <RadioItem
                id="dog"
                label="Dog"
                description="Ouah-ouah"
                value="dog"
            />
        <RadioItem
                isDisabled
                id="horse"
                label="Horse"
                description="Disabled element"
                value="horse"
            />
        <RadioItem
                id="bird"
                label="Bird without description"
                value="bird"
            />
    </RadioGroup>
);

export const NoDefaultValue = Template.bind({});
NoDefaultValue.args = {
    name: 'no-default-value'
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
    name: 'default-value',
    defaultValue: 'dog'
};

export const Disabled = Template.bind({});
Disabled.args = {
    name: 'disabled',
    isDisabled: true
};

export const Controlled: ComponentStory<typeof RadioGroup> = args => {
    const [value, setValue] = useState('cat');

    const handleChange = (event :React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <RadioGroup {...args} name="controlled" value={value} onChange={(event => handleChange(event))}>
            <RadioItem
                id="dog1"
                label="Dog"
                description="Ouah-ouah"
                value="dog"
            />
            <RadioItem
                id="cat"
                label="Cat"
                description="Miaow"
                value="cat"
            />
            <RadioItem
                id="fish"
                label="Fish"
                description="blop"
                value="fish"
            />
        </RadioGroup>
    );
};

