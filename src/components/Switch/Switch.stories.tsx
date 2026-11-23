import { useState } from 'react';

import { Switch } from './index';
import markdownNotes from './Switch.md?raw';

import type { SwitchProps } from './Switch.types';
import type { StoryObj } from '@storybook/react-vite';

import '~/__storybook__/storybook.scss';

export default {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
        componentSubtitle: 'A setting that takes effect immediately, without a save step.',
        docs: { description: { component: markdownNotes } },
    // When enabled, the controlledSwitch doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
    // Actions: {argTypesRegex: '^on.*'}
    },
    args: {
        'aria-label': 'switch component',
    },
};

export const Uncontrolled: StoryObj<SwitchProps> = {};

export const Controlled: StoryObj<SwitchProps> = {
    render: (args) => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Switch checked={checked} onChange={() => handleOnChange()} {...args}/>
        );
    },
};

export const States: StoryObj<SwitchProps> = {
    render: () => (
        <section className="storyGrid">
            <Switch aria-label="rest"/>
            <Switch aria-label="hover" id="hover"/>
            <Switch aria-label="focus" id="focus-visible"/>
            <Switch defaultChecked aria-label="checked"/>
            <Switch defaultChecked aria-label="checked and hover" id="checked-hover"/>
            <Switch isDisabled aria-label="disabled"/>
            <Switch isDisabled defaultChecked aria-label="checked and disabled"/>
        </section>
    ),
    parameters: {
        pseudo: {
            // The hover style is on the wrapper of the input
            hover: [':has(> #hover)', ':has(> #checked-hover)'],
            focusVisible: '#focus-visible',
        },
    },
};
