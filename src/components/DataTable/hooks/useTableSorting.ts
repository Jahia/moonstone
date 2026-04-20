import {useState} from 'react';
import type {SortingState} from '@tanstack/react-table';
import type {DataTableProps, SortDirection, SubRowKey} from '../DataTable.types';

type SortKey<T extends NonNullable<unknown>> = Extract<Exclude<keyof T, SubRowKey>, string>;

type UseTableSortingProps<T extends NonNullable<unknown>> = Pick<
    DataTableProps<T>,
    'sortBy' | 'sortDirection' | 'defaultSortBy' | 'defaultSortDirection' | 'onSortChange'
>;

export function useTableSorting<T extends NonNullable<unknown>>({sortBy, sortDirection, defaultSortBy, defaultSortDirection = 'ascending', onSortChange}: UseTableSortingProps<T>) {
    const isSortingControlled = sortBy !== undefined;

    const [state, setState] = useState<SortingState>(
        () => defaultSortBy ? [{id: defaultSortBy, desc: defaultSortDirection === 'descending'}] : []
    );

    const sorting: SortingState = isSortingControlled ?
        (sortBy ? [{id: sortBy, desc: sortDirection === 'descending'}] : []) :
        state;

    const handleSortingChange = (updater: React.SetStateAction<SortingState>) => {
        const next = typeof updater === 'function' ? updater(sorting) : updater;

        if (!isSortingControlled) {
            setState(next);
        }

        if (next[0]) {
            onSortChange?.(next[0].id as SortKey<T>, next[0].desc ? 'descending' : 'ascending');
        }
    };

    return {sorting, isSortingControlled, handleSortingChange};
}