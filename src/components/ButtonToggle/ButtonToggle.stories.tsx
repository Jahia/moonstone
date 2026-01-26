import preview from '../../../.storybook/preview';
import {ButtonToggle} from './index';
import {Apps} from '~/icons';
import markdownNotes from './ButtonToggle.md';
import type {ButtonToggleProps} from './ButtonToggle.types';
import {StoryContext} from '@storybook/react-vite';

const meta = preview.meta({
    title: 'Components/ButtonToggle',
    component: ButtonToggle,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
});

export const Default = meta.story({
    args: {
        iconStart: <Apps/>,
        label: 'ButtonToggle'
    },
    render: (args: ButtonToggleProps, globals: StoryContext) => {
        const theme = globals.theme;
        return <ButtonToggle {...args} isReversed={theme === 'dark'}/>;
    }
});
