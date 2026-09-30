import markdownNotes from './Badge.md?raw';
import { Badge } from './index';

import type { Meta } from '@storybook/react-vite';

export default {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        componentSubtitle: 'A compact label that surfaces counts or system-driven status on another element.',
        docs: { description: { component: markdownNotes } },
        layout: 'centered',
    },
} as Meta<typeof Badge>;

export const Accent = {
    args: {
        label: '3',
        color: 'accent',
    },
};

export const Success = {
    args: {
        label: '3',
        color: 'success',
    },
};

export const Danger = {
    args: {
        label: '3',
        color: 'danger',
    },
};
