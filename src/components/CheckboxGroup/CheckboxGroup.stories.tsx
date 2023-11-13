import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CheckboxGroup} from './index';
import {CheckboxItem} from './CheckboxItem';

export default {
    title: 'Components/CheckboxGroup',
    component: CheckboxGroup,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = args => {
    return (
        <CheckboxGroup {...args}>
            <CheckboxItem
                id="cat"
                label="Cat"
                description="Miaouw"
                value="cat"
            />
            <CheckboxItem
                id="dog"
                label="Dog"
                description="Ouah-ouah"
                value="dog"
            />
            <CheckboxItem
                isDisabled
                id="horse"
                label="Horse"
                description="Disabled element"
                value="horse"
            />
            <CheckboxItem
                id="bird"
                label="Bird without description"
                value="bird"
            />
        </CheckboxGroup>
    );
};

export const Default = Template.bind({});
Default.args = {
    name: 'default'
};

export const Disabled = Template.bind({});
Disabled.args = {
    name: 'disabled',
    isDisabled: true
};
