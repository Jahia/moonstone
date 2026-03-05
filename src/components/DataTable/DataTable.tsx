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

<<<<<<< uncontrolled_states
import type {DataTableProps, CustomColumnMeta} from './DataTable.types';
import {useTableSelection, useTableSorting, useTablePagination} from '~/hooks';
=======
import type {DataTableProps, CustomColumnMeta, DefaultRenderOptions} from './DataTable.types';
>>>>>>> main
import {Checkbox} from '~/components';
import {
    Table,
    TableRow,
    TableBody,
    TableHead,
    TableCell,
    TableCellActions,
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
<<<<<<< uncontrolled_states
    actions,
    actionsHeaderLabel = 'Actions',
=======
    defaultSelection = [],
>>>>>>> main
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

    const defaultItemsPerPageOptions = itemsPerPageOptions ?? [5, 10, 25];

    const {pagination, isPaginationControlled, handlePaginationChange} = useTablePagination({
        currentPage,
        itemsPerPage,
        defaultCurrentPage,
        defaultItemsPerPage,
        itemsPerPageOptions: defaultItemsPerPageOptions,
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
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
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

    const renderRowContent = useCallback(
        (row: Row<T>, actionsContent?: DefaultRenderOptions) => (
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

                {/* Actions cell - rendered only when actions are provided */}
                {(actionsContent?.actions || actionsContent?.actionsOnHover) && (
                    <TableCellActions
                        actions={actionsContent?.actions}
                        actionsOnHover={actionsContent?.actionsOnHover}
                    />
                )}
            </>
        ),
        [enableSelection, isStructured]
    );

    const renderRowWithCustomization = useCallback(
        (row: Row<T>) => {
            const defaultRender = (options?: DefaultRenderOptions) => renderRowContent(row, options);

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
                                const columnSortDirection = header.column.getIsSorted();

                                return (
                                    <TableHeadCell
                                        key={header.id}
                                        width={meta?.width}
                                        sorting={isColumnSortable ? {
                                            direction: columnSortDirection === 'desc' ? 'descending' : 'ascending',
                                            isActive: Boolean(columnSortDirection)
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
                        isPaginationControlled ?
                            totalRowCount as number :
                            table.getPrePaginationRowModel().rows.length
                    }
                    itemsPerPage={table.getState().pagination.pageSize}
                    itemsPerPageOptions={defaultItemsPerPageOptions}
                    label={paginationLabel}
                    onPageChange={(page: number) => table.setPageIndex(page - 1)}
                    onItemsPerPageChange={(size: number) => table.setPageSize(size)}
                    {...paginationProps}
                />
            )}
        </>
    );
};
