import markdownNotes from './ButtonToggle.md?raw';
import { ButtonToggle } from './index';
import { Apps } from '~/icons';

import type { ButtonToggleProps } from './ButtonToggle.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

import '~/__storybook__/storybook.scss';

const meta: Meta<typeof ButtonToggle> = {
    title: 'Components/ButtonToggle',
    component: ButtonToggle,
    tags: ['dark-theme'],

    parameters: {
        componentSubtitle: 'An action that stays on until the user toggles it.',
        docs: { description: { component: markdownNotes } },
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
    },
};
export default meta;

type Story = StoryObj<ButtonToggleProps>;

export const Default: Story = {
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle',
    },
};

export const Pressed: Story = {
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle',
        isPressed: true,
    },
};

export const Disabled: Story = {
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle',
        isDisabled: true,
    },
};

export const States: Story = {
    render: args => (
        <section className="storyGrid">
            <ButtonToggle {...args} label="Rest"/>
            <ButtonToggle {...args} id="hover" label="Hover"/>
            <ButtonToggle {...args} id="active" label="Active"/>
            <ButtonToggle {...args} id="focus-visible" label="Focus"/>
            <ButtonToggle {...args} isDisabled label="Disabled"/>
            <ButtonToggle {...args} isPressed label="Pressed"/>
            <ButtonToggle {...args} isPressed id="pressed-hover" label="Pressed and hover"/>
            <ButtonToggle {...args} isPressed id="pressed-active" label="Pressed and active"/>
            <ButtonToggle {...args} isPressed id="pressed-focus-visible" label="Pressed and focus"/>
        </section>
    ),

    args: {
        iconStart: <Apps/>,
    },

    parameters: {
        pseudo: {
            hover: ['#hover', '#pressed-hover'],
            active: ['#active', '#pressed-active'],
            focusVisible: ['#focus-visible', '#pressed-focus-visible'],
        },
        controls: { exclude: ['label', 'isDisabled', 'isPressed'] },
    },
};
