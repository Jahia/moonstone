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
    ...props
}: DataTableProps<T>) => {
    const [expanded, setExpanded] = useState<ExpandedState>({});
    // const hasRowStart = typeof renderRowStart === 'function';
    
    // Track whether custom cells are being used (to add display columns)
    const [hasCustomBefore, setHasCustomBefore] = useState(false);
    const [hasCustomAfter, setHasCustomAfter] = useState(false);
    
    // Store custom cell content for each row ID
    const customCellsMap = useRef<Map<string, { before?: React.ReactNode; after?: React.ReactNode }>>(new Map());

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

        // Add "before" display column if custom before cells are being used
        if (hasCustomBefore) {
            finalColumns.push({
                id: '__custom_before__',
                header: () => null,
                cell: ({row}: {row: Row<T>}) => {
                    const rowId = row.id;
                    const content = customCellsMap.current.get(rowId)?.before;
                    return content || null;
                },
                size: 8,
                enableSorting: false
            });
        }

        // Add base columns
        finalColumns.push(...baseColumns);

        // Add "after" display column if custom after cells are being used
        if (hasCustomAfter) {
            finalColumns.push({
                id: '__custom_after__',
                header: () => null,
                cell: ({row}: {row: Row<T>}) => {
                    const rowId = row.id;
                    const content = customCellsMap.current.get(rowId)?.after;
                    return content || null;
                },
                enableSorting: false
            });
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

    const renderRowContent = useCallback(
        (row: Row<T>, options?: DefaultRenderOptions) => {
            const rowId = row.id;
            
            // Store custom cell content in map for display columns to access
            if (options?.before !== undefined || options?.after !== undefined) {
                customCellsMap.current.set(rowId, {
                    before: options?.before,
                    after: options?.after
                });
                
                // Track that we're using custom cells (triggers column re-creation)
                if (options?.before && !hasCustomBefore) {
                    setHasCustomBefore(true);
                }
                if (options?.after && !hasCustomAfter) {
                    setHasCustomAfter(true);
                }
            }

            const allCells = row.getVisibleCells();
            const beforeCells = allCells.filter(cell => cell.column.id === '__custom_before__');
            const dataCells = allCells.filter(cell => cell.column.id !== '__custom_before__' && cell.column.id !== '__custom_after__');
            const afterCells = allCells.filter(cell => cell.column.id === '__custom_after__');

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
                        <TableCell width="52px">
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

                    {/* Custom "after" cells - rendered last */}
                    {afterCells.map(cell => (
                        <React.Fragment key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </React.Fragment>
                    ))}
                </>
            );
        },
        [enableSelection, isStructured, hasCustomBefore, hasCustomAfter]
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
                        const allHeaders = headerGroup.headers;
                        const beforeHeaders = allHeaders.filter(h => h.column.id === '__custom_before__');
                        const dataHeaders = allHeaders.filter(h => h.column.id !== '__custom_before__' && h.column.id !== '__custom_after__');
                        const afterHeaders = allHeaders.filter(h => h.column.id === '__custom_after__');

                        return (
                            <TableRow key={headerGroup.id}>
                                {/* Custom "before" column headers */}
                                {beforeHeaders.map(header => (
                                    <TableHeadCell 
                                        key={header.id}
                                        width="8px"
                                    />
                                ))}

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

                                {/* Data column headers */}
                                {dataHeaders.map(header => {
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

                                {/* Custom "after" column headers */}
                                {afterHeaders.map(header => (
                                    <TableHeadCell 
                                        key={header.id}
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
