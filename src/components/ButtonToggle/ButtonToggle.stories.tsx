import markdownNotes from './ButtonToggle.md';
import { ButtonToggle } from './index';
import { iconArgType } from '~/__storybook__/iconArgType';
import { Apps } from '~/icons';

import type { ButtonToggleProps } from './ButtonToggle.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ButtonToggle> = {
    title: 'Components/ButtonToggle',
    component: ButtonToggle,
    tags: ['dark-theme'],

    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
        notes: { markdown: markdownNotes },
    },
    argTypes: {
        iconStart: iconArgType,
        iconEnd: iconArgType,
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
