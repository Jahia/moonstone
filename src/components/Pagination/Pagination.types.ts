import type React from 'react';

export type PaginationProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Current items per page
     */
    itemsPerPage?: number;

    /**
     * Choices for items per page value
     */
    itemsPerPageOptions?: number[];

    /**
     * Callback when itemsPerPage value changes
     * @param itemsPerPage
     */
    onItemsPerPageChange: (itemsPerPage: number) => void;

    /**
     * How many items there will be in total for all the pages currently available
     */
    totalOfItems: number;

    /**
     * Number of the current page (1-indexed)
     */
    currentPage: number;

    /**
     * Callback when page changes
     * @param page
     */
    onPageChange: (page: number) => void;

    /**
     * Pagination labels
     */
    label?: {
        itemsPerPage: string;
        of: string;
    };
};
