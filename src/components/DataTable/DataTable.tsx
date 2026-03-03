import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender
} from '@tanstack/react-table';

import type {ExpandedState, Row} from '@tanstack/react-table';
import {useState, useEffect, useMemo, useCallback} from 'react';

import type {DataTableProps, CustomColumnMeta} from './DataTable.types';
import {useTableSelection, useTableSorting, useTablePagination} from '~/hooks';
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
    actions,
    actionsHeaderLabel = 'Actions',
    renderRow,
    onClickTableHeadCell,
    // Pagination props
    enablePagination = false,
    currentPage,
    itemsPerPage,
    defaultCurrentPage,
    defaultItemsPerPage,
    onPageChange,
    onItemsPerPageChange,
    totalRowCount,
    itemsPerPageOptions,
    paginationLabel,
    paginationProps,
    rowProps,
    ...props
}: DataTableProps<T>) => {
    // Derive manual flags from controlled state — abstraction over TanStack internals
    const manualSorting = sortBy !== undefined;
    const manualPagination = currentPage !== undefined;

    const [expanded, setExpanded] = useState<ExpandedState>({});

    const {sorting, handleSortingChange} = useTableSorting({
        sortBy,
        sortDirection,
        defaultSortBy,
        defaultSortDirection,
        onSortChange
    });

    const {rowSelection, handleRowSelectionChange} = useTableSelection({
        selection,
        defaultSelection,
        onChangeSelection
    });

    const {pagination, isControlled: isPaginationControlled, handlePaginationChange} = useTablePagination({
        currentPage,
        itemsPerPage,
        defaultCurrentPage,
        defaultItemsPerPage,
        itemsPerPageOptions,
        onPageChange,
        onItemsPerPageChange
    });

    const tableColumns = useMemo(() => createTableColumns(columns), [columns]);

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
                                const columnSort = header.column.getIsSorted();

                                return (
                                    <TableHeadCell
                                        key={header.id}
                                        width={meta?.width}
                                        sorting={isColumnSortable ? {
                                            direction: columnSort === 'desc' ? 'descending' : 'ascending',
                                            isActive: Boolean(columnSort)
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
                        manualPagination && totalRowCount !== undefined ?
                            totalRowCount :
                            table.getPrePaginationRowModel().rows.length
                    }
                    itemsPerPage={table.getState().pagination.pageSize}
                    itemsPerPageOptions={itemsPerPageOptions ?? [5, 10, 25]}
                    label={paginationLabel}
                    onPageChange={(page: number) =>
                        isPaginationControlled ?
                            onPageChange?.(page) :
                            table.setPageIndex(page - 1)}
                    onItemsPerPageChange={(size: number) =>
                        isPaginationControlled ?
                            onItemsPerPageChange?.(size) :
                            table.setPageSize(size)}
                    {...paginationProps}
                />
            )}
        </>
    );
};
