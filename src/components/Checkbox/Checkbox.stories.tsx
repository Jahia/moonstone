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
        storysource: {disable: true}
    }
};

const Template: Story<CheckboxProps> = args => <Checkbox {...args}/>;

export const Default = Template.bind({});
Default.args = {
    'aria-label': 'default example checkbox'
}

export const CheckedByDefault = Template.bind({});
CheckedByDefault.args = {
    defaultSelected: true,
    'aria-label': 'checked by default example checkbox'
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    defaultSelected: true,
    isIndeterminate: true,
    'aria-label': 'indeterminate example checkbox'
};

export const onChange = Template.bind({});
onChange.args = {
    onChange: (isSelected: boolean) => isSelected
        ? alert('checked! :D')
        : alert('unchecked :('),
    'aria-label': 'onChange example checkbox'
};

