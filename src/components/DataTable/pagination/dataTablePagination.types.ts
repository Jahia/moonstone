import React from 'react';

import type { ControlledPaginationProps, UncontrolledPaginationProps } from '~/components/Pagination';

type PaginationBaseProps = {
    /**
     * Choices for items per page value
     * @default [5, 10, 25]
     */
    itemsPerPageOptions?: ControlledPaginationProps['itemsPerPageOptions'];
    /** Custom attributes for the Pagination element */
    paginationProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & Record<string, unknown>;
};

type PaginationControlledProps = Pick<ControlledPaginationProps, 'currentPage' | 'itemsPerPage' | 'onPageChange' | 'defaultCurrentPage' | 'defaultItemsPerPage'>
    & Partial<Pick<ControlledPaginationProps, 'onItemsPerPageChange'>>
    & {
        /** Total number of items across all pages, when you pass only the rows of the current page */
        totalItems: number;
    };

export type PaginationUncontrolledProps = Pick<UncontrolledPaginationProps, 'currentPage' | 'itemsPerPage' | 'defaultCurrentPage' | 'defaultItemsPerPage' | 'onPageChange' | 'onItemsPerPageChange'>
    & {
        totalItems?: never;
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
        paginationProps?: never;
    };
