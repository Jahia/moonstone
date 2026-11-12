import {
    getCoreRowModel,
    getExpandedRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import React, { useCallback, useMemo, useRef } from 'react';

import {
    getStickyLayout,
    isStickyElement,
    useCustomCells,
    useExpansion,
    usePagination,
    useSelection,
    useSorting,
    useStickyCells,
    withStickyProps,
} from './hooks';
import { createTableColumns } from './shared';
import { renderCell, renderHeadCell } from './utils';
import { Checkbox } from '~/components';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
} from '~/components/DataTable';
import { Pagination } from '~/components/Pagination';
import { toNodeArray } from '~/utils/helpers';

import type { DataTableProps, RenderOptions } from './DataTable.types';
import type { ColumnPinningState, Row } from '@tanstack/react-table';

import styles from './DataTable.module.scss';

// Styles for custom column headers (no padding to match measured cell widths)
const CUSTOM_HEADER_STYLE = { padding: 0 };

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
    expandedRows,
    defaultExpandedRows,
    onExpandChange,
    renderRow,
    customColumnLabels,
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
    const { expanded, handleExpandedChange } = useExpansion({
        expandedRows,
        defaultExpandedRows: defaultExpandedRows ?? (isStructured ? true : undefined),
        onExpandChange,
    });

    const {
        customBeforeCount,
        customAfterCount,
        customHeaderWidths,
        customStickyCells,
        registerCustomCellCounts,
        withCustomCellObserver,
    } = useCustomCells({
        data,
        primaryKey,
        renderRow,
    });

    const { sorting, isSortingControlled, handleSortingChange } = useSorting<T>({
        sortBy,
        sortDirection,
        defaultSortBy,
        defaultSortDirection,
        onSortChange,
    });

    const { rowSelection, handleRowSelectionChange } = useSelection({
        selection,
        defaultSelection,
        onChangeSelection,
    });

    const { pagination, isPaginationControlled, handlePaginationChange } = usePagination({
        currentPage,
        itemsPerPage,
        defaultCurrentPage,
        defaultItemsPerPage,
        onPageChange,
        onItemsPerPageChange,
        totalItems,
    });

    const tableColumns = useMemo(() => createTableColumns(columns), [columns]);

    // TanStack moves the pinned columns before the others
    const columnPinning = useMemo((): ColumnPinningState => ({
        left: columns.filter(col => col.isSticky).map(col => String(col.key)),
        right: [],
    }), [columns]);
    const stickyColumnCount = columnPinning.left?.length ?? 0;
    const hasStickyColumn = stickyColumnCount > 0;
    const isSelectionSticky = enableSelection && (hasStickyColumn || Boolean(selectionCellProps?.isSticky));
    const isScrollable = columns.some(col => col.minWidth || col.isSticky)
        || isSelectionSticky
        || customStickyCells.before.some(Boolean)
        || customStickyCells.after.some(Boolean);

    const headRowRef = useRef<HTMLElement>(null);
    useStickyCells(headRowRef, isScrollable);

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            columnPinning,
            expanded,
            rowSelection,
            sorting,
            ...(enablePagination && { pagination }),
        },
        onSortingChange: handleSortingChange,
        onExpandedChange: handleExpandedChange,
        onRowSelectionChange: handleRowSelectionChange,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        manualSorting: isSortingControlled,
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
        manualPagination: isPaginationControlled,
        rowCount: isPaginationControlled ? totalItems : undefined,
        // Enables hierarchical/structured table rendering by allowing TanStack to access nested subRows
        getSubRows: (row: T) => (row as T & { subRows?: T[] }).subRows,
        onPaginationChange: enablePagination ? handlePaginationChange : undefined,
        enableSorting,
        // UX decision: Toggle between asc/desc only, no unsorted state to prevent user confusion
        enableSortingRemoval: false,
        enableRowSelection: enableSelection,
        getRowId: (row: T) => String(row[primaryKey]),
    });

    const renderRowContent = useCallback(
        (row: Row<T>, options?: RenderOptions) => {
            const beforeCells = toNodeArray(options?.before);
            const afterCells = toNodeArray(options?.after);
            registerCustomCellCounts(beforeCells.length, afterCells.length);
            const sticky = isScrollable
                ? getStickyLayout({
                        before: beforeCells.map(cell => hasStickyColumn || isStickyElement(cell)),
                        isSelectionSticky,
                        stickyColumnCount,
                        after: afterCells.map(isStickyElement),
                    })
                : undefined;

            return (
                <>
                    {beforeCells.map((cell, i) => (
                        <React.Fragment key={(cell as React.ReactElement).key}>
                            {withStickyProps(withCustomCellObserver(cell, row.index, 'before', i), sticky?.before[i])}
                        </React.Fragment>
                    ))}

                    {enableSelection && (
                        <TableCell
                            width="auto"
                            {...selectionCellProps}
                            {...sticky?.selection}
                            className={clsx(selectionCellProps?.className, sticky?.selection?.className)}
                            style={{
                                ...selectionCellProps?.style,
                                ...sticky?.selection?.style,
                            }}
                        >
                            <Checkbox
                                aria-label={i18n?.selectRow || 'Select row'}
                                checked={row.getIsSelected()}
                                onChange={row.getToggleSelectedHandler()}
                            />
                        </TableCell>
                    )}
                    {renderCell({
                        row,
                        isStructured,
                        columnLayout: sticky?.columnLayout,
                    })}

                    {afterCells.map((cell, i) => (
                        <React.Fragment key={(cell as React.ReactElement).key}>
                            {withStickyProps(withCustomCellObserver(cell, row.index, 'after', i), sticky?.after[i])}
                        </React.Fragment>
                    ))}
                </>
            );
        },
        [
            enableSelection,
            isStructured,
            registerCustomCellCounts,
            selectionCellProps,
            i18n?.selectRow,
            withCustomCellObserver,
            isScrollable,
            hasStickyColumn,
            isSelectionSticky,
            stickyColumnCount,
        ],
    );

    const headerSticky = isScrollable
        ? getStickyLayout({
                before: Array.from({ length: customBeforeCount }, (_, i) => hasStickyColumn || Boolean(customStickyCells.before[i])),
                isSelectionSticky,
                stickyColumnCount,
                after: Array.from({ length: customAfterCount }, (_, i) => Boolean(customStickyCells.after[i])),
            })
        : undefined;

    const renderRowWithCustomization = useCallback(
        (row: Row<T>) => {
            const render = (options?: RenderOptions) => renderRowContent(row, options);

            const rowContext = {
                id: row.id,
                data: row.original,
                meta: {
                    index: row.index,
                    isSelected: row.getIsSelected(),
                    isExpanded: row.getIsExpanded(),
                },
            };

            if (renderRow) {
                return renderRow({
                    ...rowContext,
                    render,
                });
            }

            return (
                <TableRow
                    aria-selected={row.getIsSelected() || undefined}
                    key={row.id}
                    {...(typeof rowProps === 'function' ? rowProps(rowContext) : rowProps)}
                >
                    {render()}
                </TableRow>
            );
        },
        [renderRow, renderRowContent, rowProps],
    );

    if (!data || !Array.isArray(data) || data.length === 0) {
        return null;
    }

    return (
        <>
            <Table className={clsx(className, isScrollable && styles.scrollable)} {...props}>
                <TableHead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id} ref={headRowRef} type="head">
                            {/* Custom "before" column headers */}
                            {Array.from({ length: customBeforeCount }, (_, i) => (
                                <TableHeadCell
                                    key={`custom-before-header-${i}`}
                                    {...headerSticky?.before[i]}
                                    style={{
                                        ...CUSTOM_HEADER_STYLE,
                                        ...headerSticky?.before[i]?.style,
                                    }}
                                    width={customHeaderWidths.before[i]}
                                >
                                    {customColumnLabels?.before?.[i] && <span className={styles.dataTable_hiddenLabel}>{customColumnLabels.before[i]}</span>}
                                </TableHeadCell>
                            ))}

                            {/* Selection header */}
                            {enableSelection && (
                                <TableHeadCell
                                    width="auto"
                                    {...selectionCellProps}
                                    {...headerSticky?.selection}
                                    className={clsx(selectionCellProps?.className, headerSticky?.selection?.className)}
                                    style={{
                                        ...selectionCellProps?.style,
                                        ...headerSticky?.selection?.style,
                                    }}
                                >
                                    <span className={styles.dataTable_hiddenLabel}>{i18n?.selectionColumnLabel || 'Selection'}</span>
                                    <Checkbox
                                        aria-label={i18n?.selectAllRows || 'Select all rows'}
                                        checked={table.getIsAllRowsSelected()}
                                        indeterminate={table.getIsSomeRowsSelected()}
                                        onChange={table.getToggleAllRowsSelectedHandler()}
                                    />
                                </TableHeadCell>
                            )}

                            {/* Data column headers */}
                            {renderHeadCell({
                                headerGroup,
                                columnLayout: headerSticky?.columnLayout,
                                enableSorting,
                                isStructured,
                                onClickTableHeadCell,
                            })}

                            {/* Custom "after" column headers */}
                            {Array.from({ length: customAfterCount }, (_, i) => (
                                <TableHeadCell
                                    key={`custom-after-header-${i}`}
                                    {...headerSticky?.after[i]}
                                    style={{
                                        ...CUSTOM_HEADER_STYLE,
                                        ...headerSticky?.after[i]?.style,
                                    }}
                                    width={customHeaderWidths.after[i]}
                                >
                                    {customColumnLabels?.after?.[i] && <span className={styles.dataTable_hiddenLabel}>{customColumnLabels.after[i]}</span>}
                                </TableHeadCell>
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
                    currentPage={table.getState().pagination.pageIndex + 1}
                    i18n={i18n}
                    itemsPerPage={table.getState().pagination.pageSize}
                    itemsPerPageOptions={itemsPerPageOptions}
                    totalOfItems={
                        isPaginationControlled && totalItems !== undefined
                            ? totalItems
                            : table.getPrePaginationRowModel().rows.length
                    }
                    onItemsPerPageChange={(size: number) => table.setPageSize(size)}
                    onPageChange={(page: number) => table.setPageIndex(page - 1)}
                    {...paginationProps}
                />
            )}
        </>
    );
};
