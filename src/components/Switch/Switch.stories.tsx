import {useState} from 'react';
import {StoryObj} from '@storybook/react-vite';

import {Switch} from './index';
import type {SwitchProps} from './Switch.types';
import markdownNotes from './Switch.md?raw';

export default {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    // When enabled, the controlledSwitch doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
    // Actions: {argTypesRegex: '^on.*'}
    },
    args: {
        'aria-label': 'switch component'
    }
};

export const Uncontrolled: StoryObj<SwitchProps> = {};

export const Controlled: StoryObj<SwitchProps> = {
    render: args => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Switch checked={checked} onChange={() => handleOnChange()} {...args}/>
        );
    }
};
