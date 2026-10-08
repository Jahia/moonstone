import React from 'react';

import type { PaginationProps as ComponentPaginationProps } from '~/components/Pagination';

type PaginationBaseProps = {
    /**
     * Choices for items per page value
     * @default [5, 10, 25]
     */
    itemsPerPageOptions?: ComponentPaginationProps['itemsPerPageOptions'];
    /** Pagination labels */
    i18n?: ComponentPaginationProps['i18n'];
    /** Custom attributes for the Pagination element */
    paginationProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & Record<string, unknown>;
};

type PaginationControlledProps = {
    /** Current page 1-indexed (Controlled) */
    currentPage: ComponentPaginationProps['currentPage'];
    /** Items per page (Controlled) */
    itemsPerPage?: ComponentPaginationProps['itemsPerPage'];
    /** Total number of items across all pages (Controlled) */
    totalItems: number;
    /** Callback when page changes (Controlled) */
    onPageChange: ComponentPaginationProps['onPageChange'];
    /** Callback when items per page changes */
    onItemsPerPageChange?: ComponentPaginationProps['onItemsPerPageChange'];
    defaultCurrentPage?: never;
    defaultItemsPerPage?: never;
};

export type PaginationUncontrolledProps = {
    currentPage?: never;
    /**
     * Initial page 1-indexed (Uncontrolled)
     * @default 1
     */
    defaultCurrentPage?: number;
    /**
     * Initial items per page (Uncontrolled)
     * @default the first of `itemsPerPageOptions`
     */
    defaultItemsPerPage?: number;
    itemsPerPage?: never;
    totalItems?: never;
    /** Callback when page changes */
    onPageChange?: ComponentPaginationProps['onPageChange'];
    /** Callback when items per page changes */
    onItemsPerPageChange?: ComponentPaginationProps['onItemsPerPageChange'];
};

export type DataTablePaginationProps
    = | ({
        /**
         * Enable Table Pagination
         * @default `true`, or `false` when `isStructured`
         */
        enablePagination: true;
    } & PaginationBaseProps & (PaginationControlledProps | PaginationUncontrolledProps))
    | {
        enablePagination?: false;
        currentPage?: never;
        itemsPerPage?: never;
        onPageChange?: never;
        onItemsPerPageChange?: never;
        totalItems?: never;
        defaultCurrentPage?: never;
        defaultItemsPerPage?: never;
        itemsPerPageOptions?: never;
        i18n?: never;
        paginationProps?: never;
    };
