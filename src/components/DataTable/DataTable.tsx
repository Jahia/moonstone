import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender
} from '@tanstack/react-table';

import type {ExpandedState, Row} from '@tanstack/react-table';
import React, {useState, useEffect, useLayoutEffect, useMemo, useCallback, useRef} from 'react';
import clsx from 'clsx';
import {useTableSelection, useTableSorting, useTablePagination} from '~/hooks';
import type {DataTableProps, CustomColumnMeta, DefaultRenderOptions} from './DataTable.types';
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

// Custom column metadata type
type CustomColumnType = 'before' | 'after';

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

    // Track whether custom cells are being used (to add display columns)
    const [hasCustomBefore, setHasCustomBefore] = useState(false);
    const [hasCustomAfter, setHasCustomAfter] = useState(false);

    // Pending flags set during render; synced to state via useLayoutEffect to
    // avoid calling setState during render (which triggers React warnings).
    const pendingCustomBefore = useRef(false);
    const pendingCustomAfter = useRef(false);

    // Store custom cell content
    const customCellsMap = useRef<Map<string, {
        before?: React.ReactNode;
        after?: React.ReactNode;
    }>>(new Map());

    // Clear custom cell mappings when the underlying data or primary key changes
    useEffect(() => {
        customCellsMap.current.clear();
        pendingCustomBefore.current = false;
        pendingCustomAfter.current = false;
        setHasCustomBefore(false);
        setHasCustomAfter(false);
    }, [data, primaryKey]);

    // Sync pending flags (written during render) to state after each render.
    // useLayoutEffect fires synchronously before the browser paints, so the
    // follow-up re-render that adds the custom columns is invisible to the user.
    useLayoutEffect(() => {
        if (pendingCustomBefore.current !== hasCustomBefore) {
            setHasCustomBefore(pendingCustomBefore.current);
        }

        if (pendingCustomAfter.current !== hasCustomAfter) {
            setHasCustomAfter(pendingCustomAfter.current);
        }

        // Reset so the next render starts from a clean slate.
        pendingCustomBefore.current = false;
        pendingCustomAfter.current = false;
    });

    // Store measured widths from first row's rendered cells for header alignment
    const headerCellWidths = useRef<{
        before?: string;
        after?: string;
    }>({});

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

    // Build columns with optional display columns for custom before/after cells
    const tableColumns = useMemo(() => {
        const baseColumns = createTableColumns(columns);
        const finalColumns = [];

        // Helper to create a custom display column with width measurement
        const createCustomColumn = (position: 'before' | 'after', index: number) => ({
            id: `custom-${position}-${index}`,
            header: (): null => null,
            cell: ({row}: {readonly row: Row<T>}) => {
                const rowId = row.id;
                const content = customCellsMap.current.get(rowId)?.[position];
                const isFirstRow = row.index === 0;

                // Measure width from first row's rendered cell
                if (isFirstRow && content && React.isValidElement(content)) {
                    return React.cloneElement(content, {
                        ref: (node: HTMLTableCellElement | null) => {
                            if (node && !headerCellWidths.current[position]) {
                                headerCellWidths.current[position] = `${node.offsetWidth}px`;
                            }
                        }
                    } as React.HTMLAttributes<HTMLTableCellElement>);
                }

                return content || null;
            },
            meta: {
                customColumnType: position as CustomColumnType
            }
        });

        // Add "before" display column if custom before cells are being used
        if (hasCustomBefore) {
            finalColumns.push(createCustomColumn('before', 0));
        }

        // Add base columns
        finalColumns.push(...baseColumns);

        // Add "after" display column if custom after cells are being used
        if (hasCustomAfter) {
            finalColumns.push(createCustomColumn('after', 0));
        }

        return finalColumns;
    }, [columns, hasCustomBefore, hasCustomAfter]);

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
            // Store custom cell content from options
            if (options?.before !== undefined || options?.after !== undefined) {
                customCellsMap.current.set(row.id, {
                    before: options?.before,
                    after: options?.after
                });

                // Mark that custom cells are in use; state is updated via useLayoutEffect
                // after the render completes to avoid calling setState during render.
                if (options?.before) {
                    pendingCustomBefore.current = true;
                }

                if (options?.after) {
                    pendingCustomAfter.current = true;
                }
            }

            const {before: beforeCells, data: dataCells, after: afterCells} = filterByColumnType(row.getVisibleCells());

            return (
                <>
                    {/* Custom "before" cells - rendered first */}
                    {beforeCells.map(cell => flexRender(cell.column.columnDef.cell, cell.getContext()))}

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
                    {afterCells.map(cell => flexRender(cell.column.columnDef.cell, cell.getContext()))}
                </>
            );
        },
        [enableSelection, isStructured, filterByColumnType]
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
                                {/* Custom "before" column headers - match width from measured cells */}
                                {beforeHeaders.map(header => (
                                    <TableHeadCell
                                        key={header.id}
                                        width={headerCellWidths.current.before}
                                        style={CUSTOM_HEADER_STYLE}
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

                                {/* Custom "after" column headers - match width from measured cells */}
                                {afterHeaders.map(header => (
                                    <TableHeadCell
                                        key={header.id}
                                        width={headerCellWidths.current.after}
                                        style={CUSTOM_HEADER_STYLE}
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
