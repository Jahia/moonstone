import {useState} from 'react';
import type {PaginationState} from '@tanstack/react-table';
import type {DataTableProps} from '~/components/DataTable/DataTable.types';

type Props = Pick<DataTableProps<Record<string, unknown>>, 'currentPage' | 'itemsPerPage' | 'defaultCurrentPage' | 'defaultItemsPerPage' | 'itemsPerPageOptions' | 'onPageChange' | 'onItemsPerPageChange'>;

export function useTablePagination({currentPage, itemsPerPage, defaultCurrentPage, defaultItemsPerPage, itemsPerPageOptions, onPageChange, onItemsPerPageChange}: Props) {
    const isPaginationControlled = currentPage !== undefined;
    const defaultPageSize = defaultItemsPerPage ?? itemsPerPageOptions?.[0] ?? 10;

    const [state, setState] = useState<PaginationState>({
        pageIndex: defaultCurrentPage ? defaultCurrentPage - 1 : 0,
        pageSize: defaultPageSize
    });

    const pagination: PaginationState = isPaginationControlled ?
        {pageIndex: (currentPage ?? 1) - 1, pageSize: itemsPerPage ?? defaultPageSize} :
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
