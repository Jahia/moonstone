import preview from '~storybook/preview';
import {Badge} from './index';
import type {BadgeProps} from './Badge.types';
import markdownNotes from './Badge.md';

const meta = preview.meta({
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
});

export const Accent = meta.story({
    args: {
        label: '3',
        color: 'accent'
    },
    render: (args: BadgeProps) => <Badge {...args}/>
});

export const Success = Accent.extend({
    args: {
        color: 'success'
    }
});

export const Danger = Accent.extend({
    args: {
        color: 'danger'
    }
});
