import { Paper } from './index';
import markdownNotes from './Paper.md?raw';

import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/Paper',
    component: Paper,
    parameters: {
        componentSubtitle: 'Groups content on a raised surface that stands out from the page background.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Default: StoryObj<typeof Paper> = {
    render: args => <Paper {...args}>Content here</Paper>,
};

export const NoPadding: StoryObj<typeof Paper> = {
    render: args => <Paper {...args}>Content here</Paper>,
    args: { hasPadding: false },
};
