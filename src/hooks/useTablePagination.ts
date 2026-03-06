import {useState} from 'react';
import type {PaginationState} from '@tanstack/react-table';
import type {DataTableProps} from '~/components/DataTable/DataTable.types';

type Props = Pick<DataTableProps<Record<string, unknown>>, 'currentPage' | 'itemsPerPage' | 'onPageChange' | 'onItemsPerPageChange'> & {
    defaultCurrentPage: number;
    defaultItemsPerPage: number;
    totalItems?: number;
};

export function useTablePagination({currentPage, itemsPerPage, defaultCurrentPage, defaultItemsPerPage, totalItems, onPageChange, onItemsPerPageChange}: Props) {
    const isPaginationControlled = currentPage !== undefined && totalItems !== undefined;
    const [state, setState] = useState<PaginationState>({
        pageIndex: defaultCurrentPage - 1,
        pageSize: defaultItemsPerPage
    });

    const pagination: PaginationState = isPaginationControlled ?
        {pageIndex: (currentPage ?? 1) - 1, pageSize: itemsPerPage ?? defaultItemsPerPage} :
        state;

    const handlePaginationChange = (updater: React.SetStateAction<PaginationState>) => {
        const next = typeof updater === 'function' ? updater(pagination) : updater;

        if (!isPaginationControlled) {
            setState(next);
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
