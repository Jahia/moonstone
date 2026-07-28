import preview from '~/__storybook__/preview';
import {StoryContext} from '@storybook/react-vite';

import {ButtonToggle} from './index';
import type {ButtonToggleProps} from './ButtonToggle.types';

import {Apps} from '~/icons';
import {iconArgType} from '~/__storybook__/iconArgType';
import markdownNotes from './ButtonToggle.md';

const meta = preview.meta({
    title: 'Components/ButtonToggle',
    component: ButtonToggle,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        iconStart: iconArgType,
        iconEnd: iconArgType
    }
});
const Template = (args: ButtonToggleProps, globals: StoryContext) => {
    const theme = globals.theme;
    return <ButtonToggle {...args} isReversed={theme === 'dark'}/>;
};

export const Default = meta.story({
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle'
    },
    render: Template
});

export const Pressed = meta.story({
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle',
        isPressed: true
    },
    render: Template
});

export const Disabled = meta.story({
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle',
        isDisabled: true
    },
    render: Template
});
