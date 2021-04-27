import React from 'react';
import {Story} from '@storybook/react'
import {CheckboxProps} from './Checkbox.types';
import {Checkbox} from '~/components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        knobs: {disabled: true},
        storysource: {disabled: true}
    }
};

const Template: Story<CheckboxProps> = args => <Checkbox {...args}/>;

export const Default = Template.bind({});

export const CheckedByDefault = Template.bind({});
CheckedByDefault.args = {
    defaultSelected: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    defaultSelected: true,
    isIndeterminate: true
};

export const onChange = Template.bind({});
onChange.args = {
    onChange: (isSelected: boolean) => isSelected
        ? alert('checked! :D')
        : alert('unchecked :(')
};

