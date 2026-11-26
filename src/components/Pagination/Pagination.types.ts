import type React from 'react';

type BasePaginationProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Choices of the items-per-page selector.
     * @default [25, 50, 100]
     */
    itemsPerPageOptions?: number[];

    /**
     * Total number of items, across all pages.
     */
    totalOfItems: number;

    /**
     * Pagination labels
     * @deprecated Use `i18n` instead.
     * @default {itemsPerPage: 'Items', of: 'of'}
     */
    label?: {
        itemsPerPage: string;
        of: string;
    };

    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
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

type ControlledProps = {
    /**
     * Number of the current page, starting at 1: the component throws below 1. Pass it to hold the page yourself.
     */
    currentPage: number;

    /**
     * Number of items on each page. It must be one of `itemsPerPageOptions`: the component
     * throws otherwise.
     * @default the first of `itemsPerPageOptions`
     */
    itemsPerPage?: number;

    /**
     * Called when the user moves to another page.
     * @param page - The number of the new page, starting at 1
     */
    onPageChange: (page: number) => void;

    /**
     * Called when the user picks a number of items per page.
     * @param itemsPerPage - The new number of items per page
     */
    onItemsPerPageChange: (itemsPerPage: number) => void;

    defaultCurrentPage?: never;
    defaultItemsPerPage?: never;
};

type UncontrolledProps = {
    currentPage?: never;
    itemsPerPage?: never;

    /**
     * Page shown first, starting at 1, when the component holds the page itself.
     * @default 1
     */
    defaultCurrentPage?: number;

    /**
     * Number of items on each page shown first, when the component holds it itself. It must be one of `itemsPerPageOptions`.
     * @default the first of `itemsPerPageOptions`
     */
    defaultItemsPerPage?: number;

    /**
     * Called when the user moves to another page.
     * @param page - The number of the new page, starting at 1
     */
    onPageChange?: (page: number) => void;

    /**
     * Called when the user picks a number of items per page.
     * @param itemsPerPage - The new number of items per page
     */
    onItemsPerPageChange?: (itemsPerPage: number) => void;
};

export type ControlledPaginationProps = BasePaginationProps & ControlledProps;

export type UncontrolledPaginationProps = BasePaginationProps & UncontrolledProps;

export type PaginationProps = ControlledPaginationProps | UncontrolledPaginationProps;
