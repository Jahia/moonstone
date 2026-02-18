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
    ColumnSizingInfoState,
    Row
} from '@tanstack/react-table';
import {useState, useEffect, useMemo, useCallback, useRef} from 'react';

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
    onChangeSelection,
    enableSorting = false,
    defaultSortBy,
    defaultSortDirection = 'ascending',
    defaultSelection = [],
    actions,
    actionsHeaderLabel = 'Actions',
    renderRow,
    onClickTableHeadCell,
    enableResize = false,
    onResizeStart,
    onResizeStop,
    onResizing,
    // Pagination props
    enablePagination = false,
    itemsPerPage,
    itemsPerPageOptions,
    paginationLabel,
    rowProps,
    style,
    ...props
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

    // Ensure itemsPerPage is valid based on options
    const defaultPageSize = useMemo(() => {
        const options = itemsPerPageOptions ?? [5, 10, 25];
        if (itemsPerPage && options.includes(itemsPerPage)) {
            return itemsPerPage;
        }

        return options[0] ?? 10;
    }, [itemsPerPage, itemsPerPageOptions]);

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: defaultPageSize
    });

    const [columnSizingInfo, setColumnSizingInfo] = useState<ColumnSizingInfoState>(
        () => ({startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: false, columnSizingStart: []})
    );

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
            ...(enablePagination && {pagination}),
            ...(enableResize && {columnSizingInfo})
        },
        onColumnSizingInfoChange: enableResize ? setColumnSizingInfo : undefined,
        onSortingChange: setSorting,
        onExpandedChange: setExpanded,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
        // Enables hierarchical/structured table rendering by allowing TanStack to access nested subRows
        getSubRows: (row: T) => (row as T & { subRows?: T[] }).subRows,
        onPaginationChange: setPagination,
        enableSorting,
        // UX decision: Toggle between asc/desc only, no unsorted state to prevent user confusion
        enableSortingRemoval: false,
        enableRowSelection: enableSelection,
        getRowId: (row: T) => String(row[primaryKey]),
        // Column resizing
        enableColumnResizing: enableResize,
        columnResizeMode: 'onChange',
        defaultColumn: {
            minSize: 60,
            maxSize: 800,
            size: 150
        }
    });

    // Resize callbacks: detect start/stop from columnSizingInfo
    const prevResizingRef = useRef<false | string>(false);
    const headerRefsRef = useRef<Record<string, HTMLElement>>({});

    useEffect(() => {
        if (!enableResize) {
            return;
        }

        const {isResizingColumn} = columnSizingInfo;
        const prev = prevResizingRef.current;

        if (!prev && isResizingColumn) {
            onResizeStart?.(isResizingColumn, headerRefsRef.current[isResizingColumn] ?? document.body);
        } else if (prev && !isResizingColumn) {
            onResizeStop?.(prev, headerRefsRef.current[prev] ?? document.body);
        }

        if (isResizingColumn) {
            const col = table.getColumn(isResizingColumn);
            const width = col?.getSize() ?? 0;
            onResizing?.(isResizingColumn, width);
        }

        prevResizingRef.current = isResizingColumn;
    }, [enableResize, columnSizingInfo, table, onResizeStart, onResizeStop, onResizing]);

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
                    const cellWidth = enableResize ? `${cell.column.getSize()}px` : meta?.width;

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
                        >
                            {cellContent}
                        </TableCell>
                    );
                })}

                {/* Actions cell */}
                {actions && <TableCell>{actions(row.original)}</TableCell>}
            </>
        ),
        [enableSelection, actions, isStructured, enableResize]
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

    const tableWidth = enableResize ?
        table.getCenterTotalSize() + (enableSelection ? 52 : 0) + (actions ? 60 : 0) :
        undefined;
    const tableStyle = enableResize ? {tableLayout: 'fixed' as const, width: tableWidth} : undefined;

    return (
        <>
            <Table className={className} style={{...style, ...tableStyle}} {...props}>
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
                                const headerWidth = enableResize ? `${header.getSize()}px` : meta?.width;

                                return (
                                    <TableHeadCell
                                        key={header.id}
                                        width={headerWidth}
                                        sorting={isColumnSortable ? {
                                            direction: sortDirection === 'desc' ? 'descending' : 'ascending',
                                            isActive: Boolean(sortDirection)
                                        } : undefined}
                                        style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
                                        align={alignment}
                                        enableResize={enableResize}
                                        isResizing={enableResize ? header.column.getIsResizing() : undefined}
                                        resizeHandler={enableResize ? header.getResizeHandler() : undefined}
                                        resizeHeaderRef={
                                            enableResize ?
                                                el => {
                                                    if (el) {
                                                        headerRefsRef.current[header.id] = el;
                                                    }
                                                } :
                                                undefined
                                        }
                                        onClick={(e: React.MouseEvent<HTMLTableCellElement>) => {
                                            if (isColumnSortable) {
                                                header.column.getToggleSortingHandler()?.(e);
                                            }

                                            onClickTableHeadCell?.(header.id);
                                        }}
                                        onResizeReset={enableResize ? () => header.column.resetSize() : undefined}
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
                    totalOfItems={table.getPrePaginationRowModel().rows.length}
                    itemsPerPage={table.getState().pagination.pageSize}
                    itemsPerPageOptions={itemsPerPageOptions ?? [5, 10, 25]}
                    label={paginationLabel}
                    onPageChange={(page: number) => table.setPageIndex(page - 1)}
                    onItemsPerPageChange={(size: number) => table.setPageSize(size)}
                />
            )}
        </>
    );
};
