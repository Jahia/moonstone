import { useState } from 'react';

import markdownNotes from './Checkbox.md?raw';
import { Checkbox } from '~/components';

import type { CheckboxProps } from './Checkbox.types';
import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        componentSubtitle: 'A bare checkbox whose label is shown elsewhere.',
        docs: { description: { component: markdownNotes } },
    // When enabled, the controlledCheckbox doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
    // Actions: {argTypesRegex: '^on.*'}
    },
};

export const Uncontrolled = {
    args: {
        'aria-label': 'default example checkbox',
    },
};

export const Indeterminate = {
    args: {
        'indeterminate': true,
        'aria-label': 'indeterminate example checkbox',
    },
};

export const Controlled: StoryObj<CheckboxProps> = {
    render: (args) => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Checkbox aria-label="controlled checkbox" checked={checked} onChange={() => handleOnChange()} {...args}/>
        );
    },
};

export const States: StoryObj<CheckboxProps> = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', padding: '8px' }}>
            <Checkbox aria-label="rest"/>
            <Checkbox aria-label="hover" id="hover"/>
            <Checkbox aria-label="focus" id="focus-visible"/>
            <Checkbox defaultChecked aria-label="checked"/>
            <Checkbox defaultChecked aria-label="checked and hover" id="checked-hover"/>
            <Checkbox isDisabled aria-label="disabled"/>
        </div>
    ),
    parameters: {
        pseudo: {
            hover: ['#hover', '#checked-hover'],
            focusVisible: '#focus-visible',
        },
    },
};
