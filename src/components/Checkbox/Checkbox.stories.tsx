import React from 'react';
import {Story} from '@storybook/react';

import {Checkbox} from '~/components';
import type {CheckboxProps} from './Checkbox.types';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
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

