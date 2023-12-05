import React, {useState} from 'react';
import {Story} from '@storybook/react';

import {Checkbox} from '~/components';
import type {CheckboxProps} from './Checkbox.types';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
        // When enabled, the controlledCheckbox doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
        // Actions: {argTypesRegex: '^on.*'}
    }
};

const Template: Story<CheckboxProps> = args => <Checkbox {...args}/>;

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
    'aria-label': 'default example checkbox'
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    indeterminate: true,
    'aria-label': 'indeterminate example checkbox'
};

export const Controlled: Story<CheckboxProps> = args => {
    // Const [checked, setChecked] = useState(false);

    const handleOnChange = (e, value?: string, isChecked?: boolean) => {
        console.log(`value: ${value}`);
        console.log(`checked: ${isChecked}`);
    };

    return (
        <Checkbox
            defaultChecked={false}
            value="test"
            onChange={(e, val, isChecked) => handleOnChange(e, val, isChecked)}
            {...args}
        />
    );
};
