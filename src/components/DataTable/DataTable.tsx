import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender
} from '@tanstack/react-table';

import type {ExpandedState, Row} from '@tanstack/react-table';
import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react';
import clsx from 'clsx';
import {useTableSelection, useTableSorting, useTablePagination} from '~/hooks';
import type {DataTableProps, CustomColumnMeta, CustomColumnType, DefaultRenderOptions} from './DataTable.types';
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

// Styles for custom column headers (no padding to match measured cell widths)
const CUSTOM_HEADER_STYLE = {padding: 0};

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
    selectionCellProps,
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
    ...props
}: DataTableProps<T>) => {
    const [expanded, setExpanded] = useState<ExpandedState>({});

    // Track how many custom cells are being used per position (0 = none).
    const [customBeforeCount, setCustomBeforeCount] = useState(0);
    const [customAfterCount, setCustomAfterCount] = useState(0);
    // Define if any custom cells are used
    const hasCustomBefore = customBeforeCount > 0;
    const hasCustomAfter = customAfterCount > 0;

    // Pending counts set during render; synced to state to avoid calling setState during render (which triggers React warnings).
    const pendingCustomBefore = useRef(0);
    const pendingCustomAfter = useRef(0);

    // Store custom cell content per row (arrays, one entry per column).
    const customCellsMap = useRef<Map<string, {
        before?: React.ReactNode[];
        after?: React.ReactNode[];
    }>>(new Map());

    // Measured offsetWidths per position index, kept in state so that ResizeObserver updates trigger a re-render and headers stay aligned.
    const [customHeaderWidths, setCustomHeaderWidths] = useState<{ before: string[]; after: string[] }>({before: [], after: []});
    const observersRef = useRef<{ before: (ResizeObserver | undefined)[]; after: (ResizeObserver | undefined)[] }>({before: [], after: []});

    // Disconnect all observers on unmount.
    useEffect(() => () => {
        observersRef.current.before.forEach(o => o?.disconnect());
        observersRef.current.after.forEach(o => o?.disconnect());
    }, []);

    // Clear custom cell mappings when the underlying data or primary key changes
    useEffect(() => {
        if (!renderRow) {
            return;
        }

        customCellsMap.current.clear();
        pendingCustomBefore.current = 0;
        pendingCustomAfter.current = 0;
        setCustomBeforeCount(0);
        setCustomAfterCount(0);
        observersRef.current.before.forEach(o => o?.disconnect());
        observersRef.current.before = [];
        observersRef.current.after.forEach(o => o?.disconnect());
        observersRef.current.after = [];
        setCustomHeaderWidths({before: [], after: []});
    }, [data, primaryKey, renderRow]);

    // Sync pending counts (written during render) to state after each render.
    useEffect(() => {
        if (!renderRow) {
            return;
        }

        if (pendingCustomBefore.current !== customBeforeCount) {
            setCustomBeforeCount(pendingCustomBefore.current);
        }

        if (pendingCustomAfter.current !== customAfterCount) {
            setCustomAfterCount(pendingCustomAfter.current);
        }

        // Reset so the next render starts from a clean slate.
        pendingCustomBefore.current = 0;
        pendingCustomAfter.current = 0;

        // Clear stale entries so the map never accumulates rows from previous pages.
        customCellsMap.current.clear();
    });

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

    const tableColumns = useMemo(() => {
        const baseColumns = createTableColumns(columns);

        if (!hasCustomBefore && !hasCustomAfter) {
            return baseColumns;
        }

        // Helper to create a custom display column for a specific position and index
        const createCustomColumn = (position: 'before' | 'after', index: number) => ({
            id: `custom-${position}-${index}`,
            header: (): null => null,
            cell: ({row}: {readonly row: Row<T>}) => {
                const content = customCellsMap.current.get(row.id)?.[position]?.[index];
                if (!content) {
                    return null;
                }

                // Attach a ResizeObserver to the first row's cell to measure its
                // rendered offsetWidth (including any padding overrides applied by the
                // component). The header cell uses that measured width with padding:0
                // so its total flex size always matches the body cell.
                if (row.index === 0 && React.isValidElement(content)) {
                    return React.cloneElement(content as React.ReactElement, {
                        ref: (node: HTMLElement | null) => {
                            observersRef.current[position][index]?.disconnect();
                            observersRef.current[position][index] = undefined;
                            if (node) {
                                const measure = () => {
                                    const w = `${node.offsetWidth}px`;
                                    setCustomHeaderWidths(prev => {
                                        if (prev[position][index] === w) {
                                            return prev;
                                        }

                                        const next = [...prev[position]];
                                        next[index] = w;
                                        return {...prev, [position]: next};
                                    });
                                };

                                const observer = new ResizeObserver(measure);
                                observer.observe(node);
                                observersRef.current[position][index] = observer;
                            }
                        }
                    });
                }

                return content;
            },
            meta: {
                customColumnType: position as CustomColumnType
            }
        });

        return [
            ...Array.from({length: customBeforeCount}, (_, i) => createCustomColumn('before', i)),
            ...baseColumns,
            ...Array.from({length: customAfterCount}, (_, i) => createCustomColumn('after', i))
        ];
    }, [columns, hasCustomBefore, hasCustomAfter, customBeforeCount, customAfterCount]);

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

    // Helper to filter cells/headers by type using column metadata
    const filterByColumnType = useCallback(<V extends {column: {columnDef: {meta?: unknown}}}>(items: V[]) => {
        const getCustomColumnType = (item: V): CustomColumnType | undefined =>
            (item.column.columnDef.meta as {customColumnType?: CustomColumnType} | undefined)?.customColumnType;

        const isCustomColumn = (item: V, type: CustomColumnType) =>
            getCustomColumnType(item) === type;

        return {
            before: items.filter(item => isCustomColumn(item, 'before')),
            data: items.filter(item => !getCustomColumnType(item)),
            after: items.filter(item => isCustomColumn(item, 'after'))
        };
    }, []);

    const renderRowContent = useCallback(
        (row: Row<T>, options?: DefaultRenderOptions) => {
            // No renderRow means before/after can never be used: render cells directly.
            if (!renderRow) {
                return (
                    <>
                        {enableSelection && (
                            <TableCell width="auto" {...selectionCellProps}>
                                <Checkbox
                                    checked={row.getIsSelected()}
                                    onChange={row.getToggleSelectedHandler()}
                                />
                            </TableCell>
                        )}
                        {row.getVisibleCells().map((cell, index) => {
                            const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
                            const isFirstColumn = index === 0;
                            const cellContent = flexRender(cell.column.columnDef.cell, cell.getContext());

                            if (isStructured && isFirstColumn) {
                                return (
                                    <TableStructuredCell
                                        key={cell.id}
                                        {...meta?.cellProps}
                                        align={meta?.align ?? 'left'}
                                        width={meta?.width}
                                        depth={row.depth}
                                        isExpandable={row.getCanExpand()}
                                        isExpanded={row.getIsExpanded()}
                                        isScrollable={meta?.isScrollable}
                                        onToggleExpand={row.getToggleExpandedHandler()}
                                    >
                                        {cellContent}
                                    </TableStructuredCell>
                                );
                            }

                            return (
                                <TableCell
                                    key={cell.id}
                                    {...meta?.cellProps}
                                    align={meta?.align}
                                    width={meta?.width}
                                    isScrollable={meta?.isScrollable}
                                >
                                    {cellContent}
                                </TableCell>
                            );
                        })}
                    </>
                );
            }

            // Store custom cell content from options
            if (options?.before !== undefined || options?.after !== undefined) {
                customCellsMap.current.set(row.id, {
                    before: options?.before,
                    after: options?.after
                });

                // Mark counts; state is updated after the render completes.
                if (options?.before?.length) {
                    pendingCustomBefore.current = options.before.length;
                }

                if (options?.after?.length) {
                    pendingCustomAfter.current = options.after.length;
                }
            }

            // If no before/after columns have been detected yet, render cells directly
            if (!hasCustomBefore && !hasCustomAfter) {
                return (
                    <>
                        {enableSelection && (
                            <TableCell width="auto" {...selectionCellProps}>
                                <Checkbox
                                    checked={row.getIsSelected()}
                                    onChange={row.getToggleSelectedHandler()}
                                />
                            </TableCell>
                        )}
                        {row.getVisibleCells().map((cell, index) => {
                            const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
                            const isFirstColumn = index === 0;
                            const cellContent = flexRender(cell.column.columnDef.cell, cell.getContext());

                            if (isStructured && isFirstColumn) {
                                return (
                                    <TableStructuredCell
                                        key={cell.id}
                                        {...meta?.cellProps}
                                        align={meta?.align ?? 'left'}
                                        width={meta?.width}
                                        depth={row.depth}
                                        isExpandable={row.getCanExpand()}
                                        isExpanded={row.getIsExpanded()}
                                        isScrollable={meta?.isScrollable}
                                        onToggleExpand={row.getToggleExpandedHandler()}
                                    >
                                        {cellContent}
                                    </TableStructuredCell>
                                );
                            }

                            return (
                                <TableCell
                                    key={cell.id}
                                    {...meta?.cellProps}
                                    align={meta?.align}
                                    width={meta?.width}
                                    isScrollable={meta?.isScrollable}
                                >
                                    {cellContent}
                                </TableCell>
                            );
                        })}
                    </>
                );
            }

            const {before: beforeCells, data: dataCells, after: afterCells} = filterByColumnType(row.getVisibleCells());

            return (
                <>
                    {/* Custom "before" cells - rendered first */}
                    {beforeCells.map(cell => (
                        <React.Fragment key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </React.Fragment>
                    ))}

                    {/* Selection checkbox cell */}
                    {enableSelection && (
                        <TableCell width="auto" {...selectionCellProps}>
                            <Checkbox
                                checked={row.getIsSelected()}
                                onChange={row.getToggleSelectedHandler()}
                            />
                        </TableCell>
                    )}

                    {/* Data columns */}
                    {dataCells.map((cell, index) => {
                        const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
                        const isFirstColumn = index === 0;
                        const cellContent = flexRender(cell.column.columnDef.cell, cell.getContext());
                        const showStructured = isStructured && isFirstColumn;

                        // Use TableStructuredCell for first column in structured view
                        if (showStructured) {
                            return (
                                <TableStructuredCell
                                    key={cell.id}
                                    {...meta?.cellProps}
                                    align={meta?.align ?? 'left'}
                                    width={meta?.width}
                                    depth={row.depth}
                                    isExpandable={row.getCanExpand()}
                                    isExpanded={row.getIsExpanded()}
                                    isScrollable={meta?.isScrollable}
                                    onToggleExpand={row.getToggleExpandedHandler()}
                                >
                                    {cellContent}
                                </TableStructuredCell>
                            );
                        }

                        return (
                            <TableCell
                                key={cell.id}
                                {...meta?.cellProps}
                                align={meta?.align}
                                width={meta?.width}
                                isScrollable={meta?.isScrollable}
                            >
                                {cellContent}
                            </TableCell>
                        );
                    })}

                    {/* Custom "after" cells - rendered last */}
                    {afterCells.map(cell => (
                        <React.Fragment key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </React.Fragment>
                    ))}
                </>
            );
        },
        [enableSelection, isStructured, filterByColumnType, hasCustomBefore, hasCustomAfter, renderRow]
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
                    {table.getHeaderGroups().map(headerGroup => {
                        const {before: beforeHeaders, data: dataHeaders, after: afterHeaders} = filterByColumnType(headerGroup.headers);

                        return (
                            <TableRow key={headerGroup.id} className="moonstone-tableRow_header">
                                {/* Custom "before" column headers */}
                                {beforeHeaders.map((header, index) => (
                                    <TableHeadCell
                                        key={header.id}
                                        width={customHeaderWidths.before[index]}
                                        style={customHeaderWidths.before[index] ? CUSTOM_HEADER_STYLE : undefined}
                                    />
                                ))}

                                {/* Selection header */}
                                {enableSelection && (
                                    <TableHeadCell width="auto" {...selectionCellProps}>
                                        <Checkbox
                                            checked={table.getIsAllRowsSelected()}
                                            indeterminate={table.getIsSomeRowsSelected()}
                                            onChange={table.getToggleAllRowsSelectedHandler()}
                                        />
                                    </TableHeadCell>
                                )}

                                {/* Data column headers */}
                                {dataHeaders.map((header, index) => {
                                    const meta = header.column.columnDef.meta as CustomColumnMeta | undefined;
                                    const isColumnSortable = enableSorting && (meta?.isSortable ?? false);
                                    const alignment = meta?.align ?? 'left';
                                    const columnSortDirection = header.column.getIsSorted();

                                    return (
                                        <TableHeadCell
                                            key={header.id}
                                            width={meta?.width}
                                            className={clsx({'moonstone-tableHeadCell_structured': isStructured && index === 0})}
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

                                {/* Custom "after" column headers */}
                                {afterHeaders.map((header, index) => (
                                    <TableHeadCell
                                        key={header.id}
                                        width={customHeaderWidths.after[index]}
                                        style={customHeaderWidths.after[index] ? CUSTOM_HEADER_STYLE : undefined}
                                    />
                                ))}

                            </TableRow>
                        );
                    })}
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
