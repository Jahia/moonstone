import {StoryObj, Meta} from '@storybook/react-vite';
import {Badge} from './index';
import type {BadgeProps} from './Badge.types';
import markdownNotes from './Badge.md';

export default {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
} as Meta<typeof Badge>;

type Story = StoryObj<BadgeProps>;

export const Accent: Story = {
    args: {
        label: '3',
        color: 'accent'
    }
};

export const Success: Story = {
    args: {
        label: '3',
        color: 'success'
    }
};

export const Danger: Story = {
    args: {
        label: '3',
        color: 'danger'
    }
};
