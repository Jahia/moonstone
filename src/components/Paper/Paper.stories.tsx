import { Paper } from './index';
import markdownNotes from './Paper.md?raw';

import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/Paper',
    component: Paper,
    parameters: {
        componentSubtitle: 'A raised surface that groups a block of related content.',
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
