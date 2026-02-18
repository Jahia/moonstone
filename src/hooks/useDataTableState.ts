import {useState, useEffect, useMemo, useCallback} from 'react';
import type {RowSelectionState, SortingState, PaginationState} from '@tanstack/react-table';

type UseDataTableStateProps<T> = {
    selection?: string[];
    defaultSelection?: string[];
    onChangeSelection?: (selection: string[]) => void;
    sortBy?: keyof T & string;
    sortDirection?: 'ascending' | 'descending';
    defaultSortBy?: keyof T & string;
    defaultSortDirection?: 'ascending' | 'descending';
    onSortChange?: (sortBy: keyof T & string, sortDirection: 'ascending' | 'descending') => void;
    pageIndex?: number;
    pageSize?: number;
    itemsPerPage?: number;
    itemsPerPageOptions?: number[];
    onPageChange?: (page: number) => void;
    onItemsPerPageChange?: (pageSize: number) => void;
};

export function useDataTableState<T>({
    selection,
    defaultSelection = [],
    onChangeSelection,
    sortBy,
    sortDirection,
    defaultSortBy,
    defaultSortDirection = 'ascending',
    onSortChange,
    pageIndex,
    pageSize,
    itemsPerPage,
    itemsPerPageOptions = [5, 10, 25],
    onPageChange,
    onItemsPerPageChange
}: UseDataTableStateProps<T>) {
    const isSelectionControlled = selection !== undefined;
    const isSortingControlled = sortBy !== undefined;
    const isPaginationControlled = pageIndex !== undefined;

    const initialSorting = useMemo<SortingState>(() => {
        if (defaultSortBy) {
            return [{id: defaultSortBy, desc: defaultSortDirection === 'descending'}];
        }

        return [];
    }, [defaultSortBy, defaultSortDirection]);
    const [uncontrolledSorting, setUncontrolledSorting] = useState<SortingState>(initialSorting);
    const controlledSorting = useMemo<SortingState>(
        () => (sortBy ? [{id: sortBy, desc: sortDirection === 'descending'}] : []),
        [sortBy, sortDirection]
    );
    const sorting = isSortingControlled ? controlledSorting : uncontrolledSorting;

    const uncontrolledRowSelection = useState<RowSelectionState>(() =>
        defaultSelection?.reduce((acc, key) => ({...acc, [key]: true}), {}) ?? {}
    );
    const controlledRowSelection = useMemo<RowSelectionState>(
        () => (selection ?? []).reduce((acc, id) => ({...acc, [id]: true}), {}),
        [selection]
    );
    const rowSelection = isSelectionControlled ? controlledRowSelection : uncontrolledRowSelection[0];
    const setRowSelection = uncontrolledRowSelection[1];

    const defaultPageSize = useMemo(() => {
        const options = itemsPerPageOptions ?? [5, 10, 25];
        if (itemsPerPage && options.includes(itemsPerPage)) {
            return itemsPerPage;
        }

        return options[0] ?? 10;
    }, [itemsPerPage, itemsPerPageOptions]);
    const [uncontrolledPagination, setUncontrolledPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: defaultPageSize
    });
    const controlledPagination = useMemo<PaginationState>(
        () => ({pageIndex: pageIndex ?? 0, pageSize: pageSize ?? defaultPageSize}),
        [pageIndex, pageSize, defaultPageSize]
    );
    const pagination = isPaginationControlled ? controlledPagination : uncontrolledPagination;

    useEffect(() => {
        if (!isSelectionControlled) {
            onChangeSelection?.(Object.keys(rowSelection).filter(id => rowSelection[id]));
        }
    }, [isSelectionControlled, rowSelection, onChangeSelection]);

    const handleRowSelectionChange = useCallback(
        (updater: React.SetStateAction<RowSelectionState>) => {
            if (isSelectionControlled) {
                const next = typeof updater === 'function' ? updater(rowSelection) : updater;
                onChangeSelection?.(Object.keys(next).filter(id => next[id]));
            } else {
                setRowSelection(updater);
            }
        },
        [isSelectionControlled, rowSelection, onChangeSelection, setRowSelection]
    );

    const handleSortingChange = useCallback(
        (updater: React.SetStateAction<SortingState>) => {
            const next = typeof updater === 'function' ? updater(sorting) : updater;
            const first = next[0];
            if (isSortingControlled && onSortChange && first) {
                onSortChange(
                    first.id as keyof T & string,
                    first.desc ? 'descending' : 'ascending'
                );
            } else {
                setUncontrolledSorting(updater);
            }
        },
        [isSortingControlled, sorting, onSortChange]
    );

    const handlePaginationChange = useCallback(
        (updater: React.SetStateAction<PaginationState>) => {
            const next = typeof updater === 'function' ? updater(pagination) : updater;
            if (isPaginationControlled && onPageChange && onItemsPerPageChange) {
                onPageChange(next.pageIndex + 1);
                onItemsPerPageChange(next.pageSize);
            } else {
                setUncontrolledPagination(next);
            }
        },
        [isPaginationControlled, pagination, onPageChange, onItemsPerPageChange]
    );

    return {
        sorting,
        rowSelection,
        pagination,
        isPaginationControlled,
        handleRowSelectionChange,
        handleSortingChange,
        handlePaginationChange
    };
}
