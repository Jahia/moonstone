import { useState } from 'react';

import { Pagination } from './index';
import markdownNotes from './Pagination.md?raw';

import type { PaginationProps } from './Pagination.types';
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
    args: {
        totalOfItems: 120,
    },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

// Without currentPage, the Pagination holds the page itself
export const Playground: Story = {};

export const Controlled: Story = {
    render: (args: Omit<PaginationProps, 'defaultCurrentPage' | 'defaultItemsPerPage'>) => {
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
