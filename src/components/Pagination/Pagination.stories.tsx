import { useState } from 'react';

import { Pagination } from './index';
import markdownNotes from './Pagination.md?raw';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
        componentSubtitle: 'Moves through the pages of a long list.',
        docs: { description: { component: markdownNotes } },
    },
    argTypes: {
        // The component throws below 1, or for a value missing from itemsPerPageOptions
        currentPage: { control: { type: 'number', min: 1 } },
        itemsPerPage: { control: 'select', options: [25, 50, 100] },
    },
    args: {
        currentPage: 1,
        totalOfItems: 120,
    },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Playground: Story = {};

export const Controlled: Story = {
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setItemsPerPage] = useState(25);
        return (
            <Pagination
                {...args}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={(value) => {
                    setItemsPerPage(value);
                    setCurrentPage(1);
                }}
                onPageChange={setCurrentPage}
            />
        );
    },
};
