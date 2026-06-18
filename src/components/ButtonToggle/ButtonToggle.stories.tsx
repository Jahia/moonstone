import preview from '~/__storybook__/preview';

import {ButtonToggle} from './index';

import {Apps} from '~/icons';
import markdownNotes from './ButtonToggle.md';

const meta = preview.meta({
    title: 'Components/ButtonToggle',
    component: ButtonToggle,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {description: {component: markdownNotes}}
    }
});

const Template = (args: Parameters<typeof ButtonToggle>[0], {globals}: {globals: {theme?: string}}) => {
    return <ButtonToggle {...args} isReversed={globals.theme === 'dark'}/>;
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

