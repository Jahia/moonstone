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
import type {TableCellProps} from './cells/TableCell.types';
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

type ColumnLayoutProps = Pick<TableCellProps, 'width' | 'style'>;

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
    onResizeChange,
    columnSizing: columnSizingState,
    onColumnSizingChange,
    // Pagination props
    enablePagination = false,
    itemsPerPage,
    itemsPerPageOptions,
    paginationLabel,
    rowProps,
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
            ...(enableResize && {columnSizingInfo, columnSizing: columnSizingState})
        },
        onColumnSizingInfoChange: enableResize ? setColumnSizingInfo : undefined,
        onColumnSizingChange: enableResize ? onColumnSizingChange : undefined,
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

    useEffect(() => {
        if (!enableResize) {
            return;
        }

        const {isResizingColumn} = columnSizingInfo;
        const prev = prevResizingRef.current;

        if (!prev && isResizingColumn) {
            onResizeStart?.(isResizingColumn);
        } else if (prev && !isResizingColumn) {
            onResizeStop?.(prev);
        }

        if (isResizingColumn) {
            const col = table.getColumn(isResizingColumn);
            const width = col?.getSize() ?? 0;
            onResizeChange?.(isResizingColumn, width);
        }

        prevResizingRef.current = isResizingColumn;
    }, [enableResize, columnSizingInfo, table, onResizeStart, onResizeStop, onResizeChange]);

    useEffect(() => {
        if (isStructured && data.length > 0) {
            table.toggleAllRowsExpanded(true);
        }
    }, [data, isStructured, table]);

    const getColumnLayoutProps = useCallback(({
        enableResize: isResizeEnabled,
        columnSize,
        configuredWidth
    }: {
        enableResize: boolean;
        columnSize: number;
        configuredWidth?: number;
    }): ColumnLayoutProps => {
        if (!isResizeEnabled) {
            return {
                width: typeof configuredWidth === 'number' ? `${configuredWidth}px` : undefined,
                style: undefined
            };
        }

        const size = `${columnSize}px`;

        if (typeof configuredWidth === 'number') {
            return {
                width: size,
                style: {
                    minWidth: size,
                    maxWidth: size,
                    flexBasis: size,
                    flexShrink: 0
                }
            };
        }

        return {
            width: undefined,
            style: {
                minWidth: size,
                flexBasis: size,
                flexShrink: 0
            }
        };
    }, []);

    // Render row cells - cell content rendering is delegated to columns configuration (via render prop)
    // DataTable handles the cell wrapper (TableBodyCell) with structured view props for expand/collapse
    const renderRowContent = useCallback(
        (row: Row<T>) => {
            // Build column-id → resize handler map for body cells.
            // Computed per-row call — acceptable for typical dataset sizes.
            const headers = table.getHeaderGroups()[0]?.headers ?? [];

            return (
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
                        const cellLayout = getColumnLayoutProps({
                            enableResize,
                            columnSize: cell.column.getSize(),
                            configuredWidth: meta?.width
                        });
                        const resizeHandler = enableResize ?
                            headers.find(header => header.column.id === cell.column.id)?.getResizeHandler() :
                            undefined;
                        const cellIsResizing = enableResize ? cell.column.getIsResizing() : undefined;

                        // Use TableStructuredCell for first column in structured view
                        if (showStructured) {
                            return (
                                <TableStructuredCell
                                    key={cell.id}
                                    align={meta?.align ?? 'left'}
                                    width={cellLayout.width}
                                    depth={row.depth}
                                    isExpandable={row.getCanExpand()}
                                    isExpanded={row.getIsExpanded()}
                                    style={cellLayout.style}
                                    enableResize={enableResize || undefined}
                                    resizeHandler={resizeHandler}
                                    isResizing={cellIsResizing}
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
                                width={cellLayout.width}
                                style={cellLayout.style}
                                enableResize={enableResize || undefined}
                                resizeHandler={resizeHandler}
                                isResizing={cellIsResizing}
                            >
                                {cellContent}
                            </TableCell>
                        );
                    })}

                    {/* Actions cell — no explicit width, auto-sizes to content */}
                    {actions && (
                        <TableCell>
                            {actions(row.original)}
                        </TableCell>
                    )}
                </>
            );
        },
        [enableSelection, actions, isStructured, enableResize, getColumnLayoutProps, table]
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

    // Width: 100% — fills the container like a non-resize table.
    // minWidth: totalSize — enables horizontal scroll when resized columns exceed the container.
    const tableStyle = enableResize ?
        {width: '100%', minWidth: `${table.getTotalSize()}px`} :
        undefined;

    const tableContent = (
        <Table
            {...props}
            className={className}
            style={tableStyle}
        >
            <TableHead>
                {table.getHeaderGroups().map(headerGroup => (
                    <TableRow key={headerGroup.id}>
                        {enableSelection && (
                            <TableHeadCell width="52px">
                                <Checkbox
                                    checked={table.getIsAllRowsSelected()}
                                    indeterminate={table.getIsSomeRowsSelected()}
                                    onChange={table.getToggleAllRowsSelectedHandler()}
                                />
                            </TableHeadCell>
                        )}
                        {headerGroup.headers.map(header => {
                            const meta = header.column.columnDef.meta as CustomColumnMeta | undefined;
                            const isColumnSortable = enableSorting && (meta?.isSortable ?? false);
                            const alignment = meta?.align ?? 'left';
                            const sortDirection = header.column.getIsSorted();
                            const headerLayout = getColumnLayoutProps({
                                enableResize,
                                columnSize: header.getSize(),
                                configuredWidth: meta?.width
                            });

                            return (
                                <TableHeadCell
                                    key={header.id}
                                    width={headerLayout.width}
                                    sorting={isColumnSortable ? {
                                        direction: sortDirection === 'desc' ? 'descending' : 'ascending',
                                        isActive: Boolean(sortDirection)
                                    } : undefined}
                                    style={{
                                        cursor: isColumnSortable ? 'pointer' : 'default',
                                        ...headerLayout.style
                                    }}
                                    align={alignment}
                                    enableResize={enableResize}
                                    isResizing={enableResize ? header.column.getIsResizing() : undefined}
                                    resizeHandler={enableResize ? header.getResizeHandler() : undefined}
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
                        {/* Actions header — no explicit width, auto-sizes to content */}
                        {actions && (
                            <TableHeadCell>
                                {actionsHeaderLabel}
                            </TableHeadCell>
                        )}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {table.getRowModel().rows.map(row => renderRowWithCustomization(row))}
            </TableBody>
        </Table>
    );

    return (
        <>
            <div style={{overflowX: 'auto', width: '100%', minWidth: 0}}>{tableContent}</div>
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
