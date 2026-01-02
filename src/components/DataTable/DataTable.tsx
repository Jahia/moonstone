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

import type {DataTableProps} from './DataTable.types';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    Checkbox
} from '~/index';
import {TableCell} from './cells/TableCell';
import {TableHeadCell} from './table-cells/TableHeadCell';
import {createTableColumns} from './utils/tableHelpers';
import {DataTablePagination} from './DataTablePagination';

type CustomColumnMeta = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
};

export const DataTable = <T extends NonNullable<unknown>>({
    className,
    data,
    columns,
    primaryKey,
    isStructured = false,
    enableSelection = false,
    onChangeSelection,
    enableSorting = false,
    defaultSortBy,
    defaultSortDirection = 'ascending',
    defaultSelection = [],
    actions,
    actionsHeaderLabel = 'Actions',
    renderRow,
    rowProps,
    onClickTableHeadCell,
    // Pagination props
    enablePagination = false,
    rowsPerPage,
    rowsPerPageOptions,
    paginationLabel,
    ...tableProps
}: DataTableProps<T>) => {
    // Internal sorting state - fully managed by TanStack
    const initialSorting = useMemo<SortingState>(() => {
        if (defaultSortBy) {
            return [
                {
                    id: defaultSortBy,
                    desc: defaultSortDirection === 'descending'
                }
            ];
        }

        return [];
    }, [defaultSortBy, defaultSortDirection]);

    const [sorting, setSorting] = useState<SortingState>(initialSorting);
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [rowSelection, setRowSelection] = useState<RowSelectionState>(() =>
        defaultSelection?.reduce((acc, key) => ({...acc, [key]: true}), {}) ?? {}
    );

    // Ensure rowsPerPage is valid based on options
    const defaultPageSize = useMemo(() => {
        const options = rowsPerPageOptions ?? [5, 10, 25];
        if (rowsPerPage && options.includes(rowsPerPage)) {
            return rowsPerPage;
        }

        return options[0] ?? 10;
    }, [rowsPerPage, rowsPerPageOptions]);

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: defaultPageSize
    });

    useEffect(() => {
        onChangeSelection?.(Object.keys(rowSelection));
    }, [rowSelection, onChangeSelection]);

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
        onSortingChange: setSorting,
        onExpandedChange: setExpanded,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
        getSubRows: (row: T) => (row as T & { subRows?: T[] }).subRows,
        onPaginationChange: setPagination,
        enableSorting,
        enableSortingRemoval: false, // Only toggle between asc/desc, no unsorted state
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

                    const columnDef = columns.find(col => col.key === cell.column.id);

                    return (
                        <TableCell
                            key={cell.id}
                            align={meta?.align ?? 'left'}
                            {...(showStructured && {
                                depth: row.depth,
                                isExpandable: row.getCanExpand(),
                                isExpanded: row.getIsExpanded(),
                                onToggleExpand: row.getToggleExpandedHandler()
                            })}
                            {...columnDef?.cellProps?.(row.original)}
                        >
                            {cellContent}
                        </TableCell>
                    );
                })}

                {/* Actions cell */}
                {actions && <TableCell>{actions(row.original)}</TableCell>}
            </>
        ),
        [enableSelection, actions, isStructured, columns]
    );

    const renderRowWithCustomization = useCallback(
        (row: Row<T>) => {
            const defaultRender = () => renderRowContent(row);

            if (renderRow) {
                return renderRow(row, defaultRender);
            }

            return <TableRow key={row.id} {...rowProps?.(row.original)}>{defaultRender()}</TableRow>;
        },
        [renderRow, renderRowContent, rowProps]
    );

    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <div className="moonstone-dataTable">
            <Table className={className} {...tableProps}>
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
                                        sorting={isColumnSortable ? {
                                            direction: sortDirection === 'desc' ? 'descending' : 'ascending',
                                            isActive: Boolean(sortDirection)
                                        } : undefined}
                                        style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
                                        align={alignment}
                                        onClick={e => {
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
                <DataTablePagination
                    currentPage={table.getState().pagination.pageIndex + 1}
                    totalNumberOfRows={data.length}
                    rowsPerPage={table.getState().pagination.pageSize}
                    rowsPerPageOptions={rowsPerPageOptions ?? [5, 10, 25]}
                    label={paginationLabel}
                    onPageChange={(page: number) => table.setPageIndex(page - 1)}
                    onRowsPerPageChange={(size: number) => table.setPageSize(size)}
                />
            )}
        </div>
    );
};
