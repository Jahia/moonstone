import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    getPaginationRowModel
} from '@tanstack/react-table';
import {toNodeArray} from '~/utils/helpers';
import type {ExpandedState, Row} from '@tanstack/react-table';
import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {useTableSelection, useTableSorting, useTablePagination} from '~/hooks';
import type {DataTableProps, RenderOptions} from './DataTable.types';
import {useDataTableCustomCells} from './CustomCells';
import {renderDataTableBodyCells, renderDataTableHeaderCells} from './Columns';
import {getDataTablePaginationProps} from './Pagination';
import {Checkbox} from '~/components';
import {Pagination} from '~/components/Pagination';
import {
    Table,
    TableRow,
    TableBody,
    TableHead,
    TableCell,
    TableHeadCell
} from '~/components/DataTable';
import {createTableColumns} from '~/utils/dataTable/tableHelpers';

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
    enableSorting = !isStructured,
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
    enablePagination = !isStructured,
    currentPage,
    itemsPerPage,
    itemsPerPageOptions = [5, 10, 25],
    defaultCurrentPage = 1,
    defaultItemsPerPage = itemsPerPageOptions[0],
    onPageChange,
    onItemsPerPageChange,
    totalItems,
    i18n,
    paginationProps,
    rowProps,
    ...props
}: DataTableProps<T>) => {
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const {
        customBeforeCount,
        customAfterCount,
        customHeaderWidths,
        registerCustomCellCounts,
        withCustomCellObserver
    } = useDataTableCustomCells({
        data,
        primaryKey,
        renderRow
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
        (row: Row<T>, options?: RenderOptions) => {
            const beforeCells = toNodeArray(options?.before);
            const afterCells = toNodeArray(options?.after);
            registerCustomCellCounts(beforeCells.length, afterCells.length);

            return (
                <>
                    {beforeCells.map((cell, i) => (
                        <React.Fragment key={(cell as React.ReactElement).key}>
                            {withCustomCellObserver(cell, row.index, 'before', i)}
                        </React.Fragment>
                    ))}

                    {enableSelection && (
                        <TableCell width="auto" {...selectionCellProps}>
                            <Checkbox
                                checked={row.getIsSelected()}
                                onChange={row.getToggleSelectedHandler()}
                            />
                        </TableCell>
                    )}
                    {renderDataTableBodyCells({row, isStructured})}

                    {afterCells.map((cell, i) => (
                        <React.Fragment key={(cell as React.ReactElement).key}>
                            {withCustomCellObserver(cell, row.index, 'after', i)}
                        </React.Fragment>
                    ))}
                </>
            );
        },
        [enableSelection, isStructured, registerCustomCellCounts, withCustomCellObserver]
    );

    const renderRowWithCustomization = useCallback(
        (row: Row<T>) => {
            const render = (options?: RenderOptions) => renderRowContent(row, options);

            if (renderRow) {
                return renderRow(row, render);
            }

            return (
                <TableRow
                    key={row.id}
                    aria-selected={row.getIsSelected() || undefined}
                    {...rowProps}
                >
                    {render()}
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
                        <TableRow key={headerGroup.id} type="head">
                            {/* Custom "before" column headers */}
                            {Array.from({length: customBeforeCount}, (_, i) => (
                                <TableHeadCell
                                    key={`custom-before-header-${i}`}
                                    width={customHeaderWidths.before[i]}
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
                            {renderDataTableHeaderCells({
                                headerGroup,
                                enableSorting,
                                isStructured,
                                onClickTableHeadCell
                            })}

                            {/* Custom "after" column headers */}
                            {Array.from({length: customAfterCount}, (_, i) => (
                                <TableHeadCell
                                    key={`custom-after-header-${i}`}
                                    width={customHeaderWidths.after[i]}
                                    style={CUSTOM_HEADER_STYLE}
                                />
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map(row => renderRowWithCustomization(row))}
                </TableBody>
            </Table>
            {enablePagination && (
                <Pagination
                    {...getDataTablePaginationProps({
                        table,
                        isPaginationControlled,
                        totalItems,
                        itemsPerPageOptions,
                        i18n,
                        paginationProps
                    })}
                />
            )}
        </>
    );
};
