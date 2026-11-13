import markdownNotes from './ButtonToggle.md?raw';
import { ButtonToggle } from './index';
import { Apps } from '~/icons';

import type { ButtonToggleProps } from './ButtonToggle.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
