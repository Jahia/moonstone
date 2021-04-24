import React from 'react';
import {Story} from '@storybook/react'
import {CheckboxProps} from './Checkbox.types';
import {Checkbox, Typography} from '~/components';

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
const FieldTemplate: Story = ({checkboxArgs, typographyArgs}) => (
    <>
        <Checkbox {...checkboxArgs}/>
        <Typography {...typographyArgs}/>
    </>
);

export const Checked = Template.bind({});
Checked.args = {
    defaultSelected: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    defaultSelected: true,
    isIndeterminate: true
};

// The controls look bit funky for this one...
export const Field = FieldTemplate.bind({});
Field.args = {
    checkboxArgs: {
        name: 'test'
    },
    typographyArgs: {
        component: 'label',
        htmlFor: 'test',
        children: 'Select something'
    }
};
