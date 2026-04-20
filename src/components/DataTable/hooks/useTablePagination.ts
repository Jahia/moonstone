import {useState} from 'react';
import type {PaginationState} from '@tanstack/react-table';
import type {PaginationProps as ComponentPaginationProps} from '~/components/Pagination';

type UseTablePaginationProps = {
    currentPage?: ComponentPaginationProps['currentPage'];
    itemsPerPage?: ComponentPaginationProps['itemsPerPage'];
    defaultCurrentPage: number;
    defaultItemsPerPage: number;
    totalItems?: number;
    onPageChange?: ComponentPaginationProps['onPageChange'];
    onItemsPerPageChange?: ComponentPaginationProps['onItemsPerPageChange'];
};

export function useTablePagination({currentPage, itemsPerPage, defaultCurrentPage, defaultItemsPerPage, totalItems, onPageChange, onItemsPerPageChange}: UseTablePaginationProps) {
    const isPaginationControlled = currentPage !== undefined && totalItems !== undefined;
    const isItemsPerPageControlled = itemsPerPage !== undefined;
    const [state, setState] = useState<PaginationState>({
        pageIndex: defaultCurrentPage - 1,
        pageSize: defaultItemsPerPage
    });

    const pagination: PaginationState = isPaginationControlled ?
        {
            pageIndex: (currentPage ?? 1) - 1,
            pageSize: isItemsPerPageControlled ? itemsPerPage : state.pageSize
        } :
        state;

    const handlePaginationChange = (updater: React.SetStateAction<PaginationState>) => {
        const next = typeof updater === 'function' ? updater(pagination) : updater;

        if (!isPaginationControlled) {
            setState(next);
        } else if (!isItemsPerPageControlled && next.pageSize !== state.pageSize) {
            setState(previous => ({...previous, pageSize: next.pageSize}));
        }

        if (next.pageIndex !== pagination.pageIndex) {
            onPageChange?.(next.pageIndex + 1);
        }

        if (next.pageSize !== pagination.pageSize) {
            onItemsPerPageChange?.(next.pageSize);
        }
    };

    return {pagination, isPaginationControlled, handlePaginationChange};
}