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
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     * @default {itemsPerPage: 'Items', of: 'of'}
     */
    i18n?: {
        /**
         * Label before the items per page selector
         * @default 'Items'
         */
        itemsPerPage?: string;
        /**
         * Word between the visible range and the total, as in "1-10 of 50"
         * @default 'of'
         */
        of?: string;
        /**
         * Accessible name of the first page button
         * @default 'First page'
         */
        firstPage?: string;
        /**
         * Accessible name of the previous page button
         * @default 'Previous page'
         */
        previousPage?: string;
        /**
         * Accessible name of the next page button
         * @default 'Next page'
         */
        nextPage?: string;
        /**
         * Accessible name of the last page button
         * @default 'Last page'
         */
        lastPage?: string;
    };
};
