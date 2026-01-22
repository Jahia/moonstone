import preview from '../../../.storybook/preview';
import {Badge} from './index';
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
    }
});

export const Success = meta.story({
    args: {
        label: '3',
        color: 'success'
    }
});

export const Danger = meta.story({
    args: {
        label: '3',
        color: 'danger'
    }
});
