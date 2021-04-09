import React from 'react';
import {Story} from '@storybook/react'
import {CheckboxProps} from './Checkbox.types';
import {Checkbox, Typography} from '~/components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    }
};


const Template: Story<CheckboxProps> = args => <Checkbox {...args}/>;
export const Checked = Template.bind({});
Checked.args = {
    isChecked: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    isMixedState: true
};

export const Field = () => (
    <>
        <Checkbox id="test"/>
        <Typography component="label">Select something</Typography>
        {/* <Typography htmlFor="test" component="label">Select something</Typography> */}
    </>
)
