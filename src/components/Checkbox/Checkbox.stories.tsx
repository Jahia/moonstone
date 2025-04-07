import {useState} from 'react';
import {StoryObj} from '@storybook/react';

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

export const Uncontrolled = {
    args: {
        'aria-label': 'default example checkbox'
    }
};

export const Indeterminate = {
    args: {
        indeterminate: true,
        'aria-label': 'indeterminate example checkbox'
    }
};

export const Controlled: StoryObj<CheckboxProps> = {
    render: args => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Checkbox checked={checked} onChange={() => handleOnChange()} {...args}/>
        );
    }
};
