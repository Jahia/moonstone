import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender
} from '@tanstack/react-table';

import type {ExpandedState, Row} from '@tanstack/react-table';
import {useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {useTableSelection, useTableSorting, useTablePagination, useTableResizing} from '~/hooks';
import type {DataTableProps, CustomColumnMeta, DefaultRenderOptions} from './DataTable.types';
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

// Maps column ids to their TanStack resize handler, used to attach resize handles to body cells.
type ResizeHandlerMap = Record<string, (event: unknown) => void>;

// Returns the pixel width from TanStack when the column has a fixed size, otherwise falls back
// to metaWidth (undefined = fluid column that takes remaining space).
const resolveColumnWidth = (
    enableResize: boolean,
    columnSize: number,
    metaWidth: string | undefined,
    sizingEntry: number | undefined
): string | undefined => {
    if (!enableResize) {
        return metaWidth;
    }

    const hasFixedWidth = metaWidth !== undefined || sizingEntry !== undefined;

    return hasFixedWidth ? `${columnSize}px` : metaWidth;
};

export const DataTable = <T extends NonNullable<unknown>>({
    className,
    data,
    columns,
    primaryKey,
    isStructured = false,
    enableSelection = false,
    selection,
    onChangeSelection,
    enableSorting = false,
    sortBy,
    sortDirection,
    onSortChange,
    defaultSortBy,
    defaultSortDirection = 'ascending',
    defaultSelection = [],
    renderRow,
    onClickTableHeadCell,
    // Pagination props
    enablePagination = false,
    currentPage,
    itemsPerPage,
    itemsPerPageOptions = [5, 10, 25],
    defaultCurrentPage = 1,
    defaultItemsPerPage = itemsPerPageOptions[0],
    onPageChange,
    onItemsPerPageChange,
    totalItems,
    paginationLabel,
    paginationProps,
    rowProps,
    // Resize props
    enableResize = false,
    onResizeStart,
    onResizeChange,
    onResizeStop,
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

    const {pagination, isPaginationControlled, handlePaginationChange} = useTablePagination({
        currentPage,
        itemsPerPage,
        defaultCurrentPage,
        defaultItemsPerPage,
        onPageChange,
        onItemsPerPageChange,
        totalItems
    });

    const {columnSizing, columnSizingInfo, handleColumnSizingChange, handleColumnSizingInfoChange} = useTableResizing({
        onResizeStart,
        onResizeChange,
        onResizeStop
    });

    const tableColumns = useMemo(() => createTableColumns(columns), [columns]);

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            expanded,
            rowSelection,
            sorting,
            ...(enablePagination && {pagination}),
            ...(enableResize && {columnSizing, columnSizingInfo})
        },
        onSortingChange: handleSortingChange,
        onExpandedChange: setExpanded,
        onRowSelectionChange: handleRowSelectionChange,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
        // Enables hierarchical/structured table rendering by allowing TanStack to access nested subRows
        getSubRows: (row: T) => (row as T & {subRows?: T[]}).subRows,
        onPaginationChange: enablePagination ? handlePaginationChange : undefined,
        onColumnSizingChange: enableResize ? handleColumnSizingChange : undefined,
        onColumnSizingInfoChange: enableResize ? handleColumnSizingInfoChange : undefined,
        enableSorting,
        // UX decision: Toggle between asc/desc only, no unsorted state to prevent user confusion
        enableSortingRemoval: false,
        enableRowSelection: enableSelection,
        enableColumnResizing: enableResize,
        columnResizeMode: 'onChange',
        getRowId: (row: T) => String(row[primaryKey])
    });

    useEffect(() => {
        if (isStructured && data.length > 0) {
            table.toggleAllRowsExpanded(true);
        }
    }, [data, isStructured, table]);

    // TanStack only exposes getResizeHandler on headers, so we build a map to also attach
    // resize handles to body cells. A ref avoids stale closures during high-frequency drag updates.
    const resizeHandlersRef = useRef<ResizeHandlerMap>({});

    resizeHandlersRef.current = enableResize ?
        table.getFlatHeaders().reduce<ResizeHandlerMap>((acc, h) => ({...acc, [h.id]: h.getResizeHandler()}), {}) :
        {};

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
                    const cellWidth = resolveColumnWidth(
                        enableResize,
                        cell.column.getSize(),
                        meta?.width,
                        columnSizing[cell.column.id]
                    );
                    const cellResizeHandler = cell.column.getCanResize() ? resizeHandlersRef.current[cell.column.id] : undefined;
                    const cellIsResizing = cell.column.getIsResizing();

                    // Use TableStructuredCell for first column in structured view
                    if (showStructured) {
                        return (
                            <TableStructuredCell
                                key={cell.id}
                                align={meta?.align ?? 'left'}
                                width={cellWidth}
                                depth={row.depth}
                                isExpandable={row.getCanExpand()}
                                isExpanded={row.getIsExpanded()}
                                isResizing={cellIsResizing}
                                resizeHandler={cellResizeHandler}
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
                            width={cellWidth}
                            resizeHandler={cellResizeHandler}
                            isResizing={cellIsResizing}
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
        [enableSelection, isStructured, enableResize, columnSizing]
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
            <Table
                className={className}
                {...props}
                style={props.style}
            >
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
                                const columnWidth = resolveColumnWidth(
                                    enableResize,
                                    header.getSize(),
                                    meta?.width,
                                    columnSizing[header.column.id]
                                );

                                return (
                                    <TableHeadCell
                                        key={header.id}
                                        width={columnWidth}
                                        sorting={isColumnSortable ? {
                                            direction: columnSortDirection === 'desc' ? 'descending' : 'ascending',
                                            isActive: Boolean(columnSortDirection)
                                        } : undefined}
                                        style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
                                        align={alignment}
                                        resizeHandler={header.column.getCanResize() ? header.getResizeHandler() : undefined}
                                        isResizing={header.column.getIsResizing()}
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

                            {/* Spacer header cell to align with the actions column in body rows */}
                            {renderRow && <TableHeadCell className="moonstone-tableCellActions"/>}

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
                            totalItems :
                            table.getPrePaginationRowModel().rows.length
                    }
                    itemsPerPage={table.getState().pagination.pageSize}
                    itemsPerPageOptions={itemsPerPageOptions}
                    label={paginationLabel}
                    onPageChange={(page: number) => table.setPageIndex(page - 1)}
                    onItemsPerPageChange={(size: number) => table.setPageSize(size)}
                    {...paginationProps}
                />
            )}
        </>
    );
};
