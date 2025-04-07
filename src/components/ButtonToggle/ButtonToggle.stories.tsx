import {StoryObj, Meta, StoryContext} from '@storybook/react';

import {ButtonToggle} from './index';
import type {ButtonToggleProps} from './ButtonToggle.types';

import {Apps} from '~/icons';
import markdownNotes from './ButtonToggle.md';

const meta: Meta<typeof ButtonToggle> = {
    title: 'Components/ButtonToggle',
    component: ButtonToggle,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
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
        label: 'ButtonToggle'
    },
    render: Template
};
