import markdownNotes from './ColumnChooser.md?raw';
import { ColumnChooser } from '~/components';
import { collectionBarColumns } from '~/data/collectionBar';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ColumnChooser> = {
    title: 'Components/ColumnChooser',
    component: ColumnChooser,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        componentSubtitle: 'Chooses which table columns show, and in what order.',
        docs: { description: { component: markdownNotes } },
    },
    args: { columns: collectionBarColumns },
};
export default meta;

type Story = StoryObj<typeof ColumnChooser>;

export const Playground: Story = {};
