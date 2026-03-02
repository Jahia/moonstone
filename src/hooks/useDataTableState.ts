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
    currentPage?: number;
    itemsPerPage?: number;
    defaultCurrentPage?: number;
    defaultItemsPerPage?: number;
    itemsPerPageOptions?: number[];
    onPageChange?: (page: number) => void;
    onItemsPerPageChange?: (itemsPerPage: number) => void;
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
    currentPage,
    itemsPerPage,
    defaultCurrentPage,
    defaultItemsPerPage,
    itemsPerPageOptions = [5, 10, 25],
    onPageChange,
    onItemsPerPageChange
}: UseDataTableStateProps<T>) {
    const isSelectionControlled = selection !== undefined;
    const isSortingControlled = sortBy !== undefined;
    const isPaginationControlled = currentPage !== undefined;

    // --- Sorting ---

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

    // --- Selection ---

    const uncontrolledRowSelection = useState<RowSelectionState>(() =>
        defaultSelection?.reduce((acc, key) => ({...acc, [key]: true}), {}) ?? {}
    );
    const controlledRowSelection = useMemo<RowSelectionState>(
        () => (selection ?? []).reduce((acc, id) => ({...acc, [id]: true}), {}),
        [selection]
    );
    const rowSelection = isSelectionControlled ? controlledRowSelection : uncontrolledRowSelection[0];
    const setRowSelection = uncontrolledRowSelection[1];

    // --- Pagination ---

    const resolvedDefaultPageSize = useMemo(() => {
        const options = itemsPerPageOptions ?? [5, 10, 25];
        if (defaultItemsPerPage && options.includes(defaultItemsPerPage)) {
            return defaultItemsPerPage;
        }

        return options[0] ?? 10;
    }, [defaultItemsPerPage, itemsPerPageOptions]);

    const [uncontrolledPagination, setUncontrolledPagination] = useState<PaginationState>({
        pageIndex: defaultCurrentPage ? defaultCurrentPage - 1 : 0,
        pageSize: resolvedDefaultPageSize
    });
    const controlledPagination = useMemo<PaginationState>(
        () => ({
            pageIndex: currentPage ? currentPage - 1 : 0,
            pageSize: itemsPerPage ?? resolvedDefaultPageSize
        }),
        [currentPage, itemsPerPage, resolvedDefaultPageSize]
    );
    const pagination = isPaginationControlled ? controlledPagination : uncontrolledPagination;

    // --- Selection side-effect (observer in uncontrolled mode) ---

    useEffect(() => {
        if (!isSelectionControlled) {
            onChangeSelection?.(Object.keys(rowSelection).filter(id => rowSelection[id]));
        }
    }, [isSelectionControlled, rowSelection, onChangeSelection]);

    // --- Handlers ---

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

            if (!isSortingControlled) {
                setUncontrolledSorting(updater);
            }

            // Fire onSortChange in both controlled and uncontrolled modes
            if (first && onSortChange) {
                onSortChange(
                    first.id as keyof T & string,
                    first.desc ? 'descending' : 'ascending'
                );
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
