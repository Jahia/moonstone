import markdownNotes from './ButtonToggle.md';
import { ButtonToggle } from './index';
import { iconArgType } from '~/__storybook__/iconArgType';
import { Apps } from '~/icons';

import type { ButtonToggleProps } from './ButtonToggle.types';
import type { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ButtonToggle> = {
    title: 'Components/ButtonToggle',
    component: ButtonToggle,

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
const Template = (args: ButtonToggleProps, globals: StoryContext) => {
    const theme = globals.theme;
    return <ButtonToggle {...args} isReversed={theme === 'dark'}/>;
};

export const Default: Story = {
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle',
    },
    render: Template,
};

export const Pressed: Story = {
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle',
        isPressed: true,
    },
    render: Template,
};

export const Disabled: Story = {
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle',
        isDisabled: true,
    },
    render: Template,
};
