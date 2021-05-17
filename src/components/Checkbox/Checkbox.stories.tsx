import React from 'react';
import {Story} from '@storybook/react'
import {CheckboxProps} from './Checkbox.types';
import {Checkbox} from '~/components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: { argTypesRegex: '^on.*' }
    }
};

const Template: Story<CheckboxProps> = args => <Checkbox {...args}/>;

export const DefaultControlled = Template.bind({});
DefaultControlled.args = {
    'aria-label': 'default example checkbox',
};
DefaultControlled.storyName = 'Default and Controlled';

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    isIndeterminate: true,
    'aria-label': 'indeterminate example checkbox'
};

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
    variant: 'uncontrolled'
};
