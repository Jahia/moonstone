import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender
} from '@tanstack/react-table';

import type {
    ExpandedState,
    RowSelectionState,
    SortingState,
    PaginationState,
    Row
} from '@tanstack/react-table';
import {useState, useEffect, useMemo, useCallback} from 'react';

import type {DataTableProps, CustomColumnMeta} from './DataTable.types';
import {Checkbox} from '~/components';
import {
    Table,
    TableRow,
    TableBody,
    TableHead,
    TableCell,
    TableStructuredCell,
    TableHeadCell
} from '~/components/DataTable';
import {createTableColumns} from '~/utils/dataTable/tableHelpers';
import {Pagination} from '~/components/Pagination';

export const DataTable = <T extends NonNullable<unknown>>({
    className,
    data,
    columns,
    primaryKey,
    isStructured = false,
    enableSelection = false,
    selection,
    onChangeSelection,
    defaultSelection = [],
    enableSorting = false,
    sortBy,
    sortDirection,
    onSortChange,
    defaultSortBy,
    defaultSortDirection = 'ascending',
    manualSorting = false,
    actions,
    actionsHeaderLabel = 'Actions',
    renderRow,
    onClickTableHeadCell,
    // Pagination props
    enablePagination = false,
    pageIndex,
    pageSize,
    onPageChange,
    onItemsPerPageChange,
    totalRowCount,
    manualPagination = false,
    itemsPerPage,
    itemsPerPageOptions,
    paginationLabel,
    paginationProps,
    rowProps,
    ...props
}: DataTableProps<T>) => {
    // Sorting: controlled (sortBy/sortDirection props) vs uncontrolled (internal state)
    const isSortingControlled = sortBy !== undefined;
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
    const [expanded, setExpanded] = useState<ExpandedState>({});

    // Selection: controlled (selection prop) vs uncontrolled (internal state)
    const isSelectionControlled = selection !== undefined;
    const uncontrolledRowSelection = useState<RowSelectionState>(() =>
        defaultSelection?.reduce((acc, key) => ({...acc, [key]: true}), {}) ?? {}
    );
    const controlledRowSelection = useMemo<RowSelectionState>(
        () => (selection ?? []).reduce((acc, id) => ({...acc, [id]: true}), {}),
        [selection]
    );
    const rowSelection = isSelectionControlled ? controlledRowSelection : uncontrolledRowSelection[0];
    const setRowSelection = uncontrolledRowSelection[1];

    // Pagination: controlled (pageIndex/pageSize props) vs uncontrolled (internal state)
    const isPaginationControlled = pageIndex !== undefined;
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

    const tableColumns = useMemo(() => createTableColumns(columns), [columns]);

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
                    first.id as Extract<keyof T, string>,
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
            if (isPaginationControlled && onPageChange && onItemsPerPageChange) {
                const next = typeof updater === 'function' ? updater(pagination) : updater;
                if (next.pageIndex !== pagination.pageIndex) {
                    onPageChange(next.pageIndex + 1);
                }

                if (next.pageSize !== pagination.pageSize) {
                    onItemsPerPageChange(next.pageSize);
                }
            } else {
                setUncontrolledPagination(updater);
            }
        },
        [isPaginationControlled, pagination, onPageChange, onItemsPerPageChange]
    );

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            expanded,
            rowSelection,
            sorting,
            ...(enablePagination && {pagination})
        },
        onSortingChange: handleSortingChange,
        onExpandedChange: setExpanded,
        onRowSelectionChange: handleRowSelectionChange,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting && !manualSorting ? getSortedRowModel() : undefined,
        manualSorting,
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: enablePagination && !manualPagination ? getPaginationRowModel() : undefined,
        manualPagination: enablePagination && manualPagination,
        ...(enablePagination && manualPagination && totalRowCount !== undefined && {rowCount: totalRowCount}),
        // Enables hierarchical/structured table rendering by allowing TanStack to access nested subRows
        getSubRows: (row: T) => (row as T & { subRows?: T[] }).subRows,
        onPaginationChange: enablePagination ? handlePaginationChange : undefined,
        enableSorting,
        // UX decision: Toggle between asc/desc only, no unsorted state to prevent user confusion
        enableSortingRemoval: false,
        enableRowSelection: enableSelection,
        getRowId: (row: T) => String(row[primaryKey])
    });

    useEffect(() => {
        if (isStructured && data.length > 0) {
            table.toggleAllRowsExpanded(true);
        }
    }, [data, isStructured, table]);

    // Render row cells - cell content rendering is delegated to columns configuration (via render prop)
    // DataTable handles the cell wrapper (TableBodyCell) with structured view props for expand/collapse
    const renderRowContent = useCallback(
        (row: Row<T>) => (
            <>
                {/* Selection checkbox cell */}
                {enableSelection && (
                    <TableCell width="52px">
                        <Checkbox
                            checked={row.getIsSelected()}
                            onChange={row.getToggleSelectedHandler()}
                        />
                    </TableCell>
                )}

                {/* Data cells - content comes from column.cell defined in createTableColumns */}
                {row.getVisibleCells().map((cell, index) => {
                    const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
                    const isFirstColumn = index === 0;
                    const cellContent = flexRender(cell.column.columnDef.cell, cell.getContext());
                    const showStructured = isStructured && isFirstColumn;

                    // Use TableStructuredCell for first column in structured view
                    if (showStructured) {
                        return (
                            <TableStructuredCell
                                key={cell.id}
                                align={meta?.align ?? 'left'}
                                width={meta?.width}
                                depth={row.depth}
                                isExpandable={row.getCanExpand()}
                                isExpanded={row.getIsExpanded()}
                                onToggleExpand={row.getToggleExpandedHandler()}
                            >
                                {cellContent}
                            </TableStructuredCell>
                        );
                    }

                    return (
                        <TableCell
                            key={cell.id}
                            align={meta?.align ?? 'left'}
                            width={meta?.width}
                        >
                            {cellContent}
                        </TableCell>
                    );
                })}

                {/* Actions cell */}
                {actions && <TableCell>{actions(row.original)}</TableCell>}
            </>
        ),
        [enableSelection, actions, isStructured]
    );

    const renderRowWithCustomization = useCallback(
        (row: Row<T>) => {
            const defaultRender = () => renderRowContent(row);

            if (renderRow) {
                return renderRow(row, defaultRender);
            }

            return (
                <TableRow
                    key={row.id}
                    aria-selected={row.getIsSelected() || undefined}
                    {...rowProps}
                >
                    {defaultRender()}
                </TableRow>
            );
        },
        [renderRow, renderRowContent, rowProps]
    );

    if (!data || !Array.isArray(data) || data.length === 0) {
        return null;
    }

    return (
        <>
            <Table className={className} {...props}>
                <TableHead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {/* Selection header */}
                            {enableSelection && (
                                <TableHeadCell width="52px">
                                    <Checkbox
                                        checked={table.getIsAllRowsSelected()}
                                        indeterminate={table.getIsSomeRowsSelected()}
                                        onChange={table.getToggleAllRowsSelectedHandler()}
                                    />
                                </TableHeadCell>
                            )}

                            {/* Column headers */}
                            {headerGroup.headers.map(header => {
                                const meta = header.column.columnDef.meta as CustomColumnMeta | undefined;
                                const isColumnSortable = enableSorting && (meta?.isSortable ?? false);
                                const alignment = meta?.align ?? 'left';
                                const sortDirection = header.column.getIsSorted();

                                return (
                                    <TableHeadCell
                                        key={header.id}
                                        width={meta?.width}
                                        sorting={isColumnSortable ? {
                                            direction: sortDirection === 'desc' ? 'descending' : 'ascending',
                                            isActive: Boolean(sortDirection)
                                        } : undefined}
                                        style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
                                        align={alignment}
                                        onClick={(e: React.MouseEvent<HTMLTableCellElement>) => {
                                            if (isColumnSortable) {
                                                header.column.getToggleSortingHandler()?.(e);
                                            }

                                            onClickTableHeadCell?.(header.id);
                                        }}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHeadCell>
                                );
                            })}

                            {/* Actions header */}
                            {actions && <TableHeadCell>{actionsHeaderLabel}</TableHeadCell>}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map(row => renderRowWithCustomization(row))}
                </TableBody>
            </Table>
            {enablePagination && (
                <Pagination
                    currentPage={table.getState().pagination.pageIndex + 1}
                    totalOfItems={
                        manualPagination && totalRowCount !== undefined
                            ? totalRowCount
                            : table.getPrePaginationRowModel().rows.length
                    }
                    itemsPerPage={table.getState().pagination.pageSize}
                    itemsPerPageOptions={itemsPerPageOptions ?? [5, 10, 25]}
                    label={paginationLabel}
                    onPageChange={(page: number) =>
                        isPaginationControlled
                            ? onPageChange?.(page)
                            : table.setPageIndex(page - 1)
                    }
                    onItemsPerPageChange={(size: number) =>
                        isPaginationControlled
                            ? onItemsPerPageChange?.(size)
                            : table.setPageSize(size)
                    }
                    {...paginationProps}
                />
            )}
        </>
    );
};
