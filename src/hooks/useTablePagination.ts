import {useState} from 'react';
import type {PaginationState} from '@tanstack/react-table';
import type {DataTableProps} from '~/components/DataTable/DataTable.types';

type Props = Pick<DataTableProps<Record<string, unknown>>, 'currentPage' | 'itemsPerPage' | 'defaultCurrentPage' | 'defaultItemsPerPage' | 'itemsPerPageOptions' | 'onPageChange' | 'onItemsPerPageChange'>;

export function useTablePagination({currentPage, itemsPerPage, defaultCurrentPage, defaultItemsPerPage, itemsPerPageOptions = [5, 10, 25], onPageChange, onItemsPerPageChange}: Props) {
    const isControlled = currentPage !== undefined;
    const options = itemsPerPageOptions ?? [5, 10, 25];
    const defaultSize = defaultItemsPerPage && options.includes(defaultItemsPerPage)
        ? defaultItemsPerPage
        : (options[0] ?? 10);

    const [internal, setInternal] = useState<PaginationState>({
        pageIndex: defaultCurrentPage ? defaultCurrentPage - 1 : 0,
        pageSize: defaultSize
    });

    const pagination: PaginationState = isControlled
        ? {pageIndex: (currentPage ?? 1) - 1, pageSize: itemsPerPage ?? defaultSize}
        : internal;

    const handlePaginationChange = (updater: React.SetStateAction<PaginationState>) => {
        const next = typeof updater === 'function' ? updater(pagination) : updater;

        if (!isControlled) {
            setInternal(next);
        }

        onPageChange?.(next.pageIndex + 1);
        onItemsPerPageChange?.(next.pageSize);
    };

    return {pagination, isControlled, handlePaginationChange};
}
