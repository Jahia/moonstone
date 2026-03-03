import {useState} from 'react';
import type {SortingState} from '@tanstack/react-table';
import type {DataTableProps} from '~/components/DataTable/DataTable.types';

type Props = Pick<DataTableProps<Record<string, unknown>>, 'sortBy' | 'sortDirection' | 'defaultSortBy' | 'defaultSortDirection' | 'onSortChange'>;

export function useTableSorting({sortBy, sortDirection, defaultSortBy, defaultSortDirection = 'ascending', onSortChange}: Props) {
    const isControlled = sortBy !== undefined;

    const [internal, setInternal] = useState<SortingState>(
        () => defaultSortBy ? [{id: defaultSortBy, desc: defaultSortDirection === 'descending'}] : []
    );

    const sorting = isControlled ?
        (sortBy ? [{id: sortBy, desc: sortDirection === 'descending'}] : []) :
        internal;

    const handleSortingChange = (updater: React.SetStateAction<SortingState>) => {
        const next = typeof updater === 'function' ? updater(sorting) : updater;

        if (!isControlled) {
            setInternal(next);
        }

        if (next[0]) {
            onSortChange?.(next[0].id, next[0].desc ? 'descending' : 'ascending');
        }
    };

    return {sorting, isControlled, handleSortingChange};
}
