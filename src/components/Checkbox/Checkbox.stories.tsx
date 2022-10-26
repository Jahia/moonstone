import React from 'react';
import {Story} from '@storybook/react';
import {CheckboxProps} from './Checkbox.types';
import {Checkbox} from '~/components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};

const Template: Story<CheckboxProps> = args => <Checkbox {...args}/>;

export const DefaultControlled = Template.bind({});
DefaultControlled.args = {
    'aria-label': 'default example checkbox'
};
DefaultControlled.storyName = 'Default and uncontrolled';

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    indeterminate: true,
    'aria-label': 'indeterminate example checkbox'
};

