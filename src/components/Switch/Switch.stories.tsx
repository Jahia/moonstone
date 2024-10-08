import React, {useState} from 'react';
import {Story} from '@storybook/react';

import {Switch} from './index';
import type {SwitchProps} from './Switch.types';

export default {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered'
        // When enabled, the controlledSwitch doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
        // Actions: {argTypesRegex: '^on.*'}
    }
};

const Template: Story<SwitchProps> = args => <Switch {...args}/>;

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
    'aria-label': 'default example checkbox'
};

export const Controlled: Story<SwitchProps> = args => {
    const [checked, setChecked] = useState(false);

    const handleOnChange = () => {
        setChecked(!checked);
    };

    return (
        <Switch
            checked={checked}
            onChange={() => handleOnChange()}
            {...args}
        />
    );
};
