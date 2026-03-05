import {useState} from 'react';
import type {SortingState} from '@tanstack/react-table';
import type {DataTableProps} from '~/components/DataTable/DataTable.types';

type Props = Pick<DataTableProps<Record<string, unknown>>, 'sortBy' | 'sortDirection' | 'defaultSortBy' | 'defaultSortDirection' | 'onSortChange'>;

export function useTableSorting({sortBy, sortDirection, defaultSortBy, defaultSortDirection = 'ascending', onSortChange}: Props) {
    const isSortingControlled = sortBy !== undefined;

    const [state, setState] = useState<SortingState>(
        () => defaultSortBy ? [{id: defaultSortBy, desc: defaultSortDirection === 'descending'}] : []
    );

    const sorting = isSortingControlled ?
        (sortBy ? [{id: sortBy, desc: sortDirection === 'descending'}] : []) :
        state;

    const handleSortingChange = (updater: React.SetStateAction<SortingState>) => {
        const next = typeof updater === 'function' ? updater(sorting) : updater;

        if (!isSortingControlled) {
            setState(next);
        }

        if (next[0]) {
            onSortChange?.(next[0].id, next[0].desc ? 'descending' : 'ascending');
        }
    };

    return {sorting, isSortingControlled, handleSortingChange};
}
