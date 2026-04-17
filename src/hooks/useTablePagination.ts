import {useState} from 'react';
import type {PaginationState} from '@tanstack/react-table';
import type {UseTablePaginationProps} from '~/components/DataTable/Pagination/dataTablePagination.types';

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
