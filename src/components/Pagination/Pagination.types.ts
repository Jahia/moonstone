import type React from 'react';

export type PaginationProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Number of items on each page. It must be one of `itemsPerPageOptions`: the component
     * throws otherwise.
     * @default the first of `itemsPerPageOptions`
     */
    itemsPerPage?: number;

    /**
     * Choices of the items-per-page selector.
     * @default [25, 50, 100]
     */
    itemsPerPageOptions?: number[];

    /**
     * Called with the new number of items per page when the user picks one.
     */
    onItemsPerPageChange: (itemsPerPage: number) => void;

    /**
     * Total number of items, across all pages.
     */
    totalOfItems: number;

    /**
     * Number of the current page, starting at 1: the component throws below 1.
     */
    currentPage: number;

    /**
     * Called with the number of the page the user moves to.
     */
    onPageChange: (page: number) => void;

    /**
     * Pagination labels
     * @deprecated Use `i18n` instead.
     */
    label?: {
        itemsPerPage: string;
        of: string;
    };

    /**
     * Labels of the component.
     * @default {itemsPerPage: 'Items', of: 'of'}
     */
    i18n?: {
        itemsPerPage: string;
        of: string;
    };
};
