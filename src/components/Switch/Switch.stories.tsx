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
    render: args => (
        <section className="storyGrid">
            <Switch {...args} aria-label="Rest"/>
            <Switch {...args} aria-label="Hover" id="hover"/>
            <Switch {...args} aria-label="Focus" id="focus-visible"/>
            <Switch {...args} defaultChecked aria-label="Checked"/>
            <Switch {...args} defaultChecked aria-label="Checked and hover" id="checked-hover"/>
            <Switch {...args} isDisabled aria-label="Disabled"/>
            <Switch {...args} isDisabled defaultChecked aria-label="Checked and disabled"/>
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
