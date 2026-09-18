import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    getPaginationRowModel
} from '@tanstack/react-table';
import clsx from 'clsx';
import {toNodeArray} from '~/utils/helpers';
import type {Row} from '@tanstack/react-table';
import React, {useMemo, useCallback} from 'react';
import {useCustomCells, useExpansion, usePagination, useSearch, useSearchPaginationWarning, useSelection, useSorting} from './hooks';
import type {DataTableProps, RenderOptions} from './DataTable.types';
import {createTableColumns} from './shared';
import {renderCell, renderHeadCell} from './utils';
import {Checkbox} from '~/components';
import {SearchInput} from '~/components/Input';
import {Pagination} from '~/components/Pagination';
import styles from './DataTable.module.scss';
import {
    Table,
    TableRow,
    TableBody,
    TableHead,
    TableCell,
    TableHeadCell
} from '~/components/DataTable';

// Styles for custom column headers (no padding to match measured cell widths)
const CUSTOM_HEADER_STYLE = {padding: 0};

// Not translatable yet: the table-level i18n prop has its own ticket
const NO_RESULTS_MESSAGE = 'No results';

const hasNoSearchResult = (enableSearch: boolean, query: string, rowCount: number) => enableSearch && query !== '' && rowCount === 0;

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
    enableSearch = false,
    searchColumns,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    searchInputProps,
    rowProps,
    ...props
}: DataTableProps<T>) => {
    const {expanded, handleExpandedChange} = useExpansion({
        expandedRows,
        defaultExpandedRows: defaultExpandedRows ?? (isStructured ? true : undefined),
        onExpandChange
    });

    const {
        customBeforeCount,
        customAfterCount,
        customHeaderWidths,
        registerCustomCellCounts,
        withCustomCellObserver
    } = useCustomCells({
        data,
        primaryKey,
        renderRow
    });

    const {sorting, isSortingControlled, handleSortingChange} = useSorting<T>({
        sortBy,
        sortDirection,
        defaultSortBy,
        defaultSortDirection,
        onSortChange
    });

    const {rowSelection, handleRowSelectionChange} = useSelection({
        selection,
        defaultSelection,
        onChangeSelection
    });

    const {pagination, isPaginationControlled, handlePaginationChange} = usePagination({
        currentPage,
        itemsPerPage,
        defaultCurrentPage,
        defaultItemsPerPage,
        onPageChange,
        onItemsPerPageChange,
        totalItems
    });

    const {globalFilter, handleGlobalFilterChange} = useSearch({
        searchValue,
        defaultSearchValue,
        onSearchChange
    });

    const isTableFiltering = Boolean(searchColumns?.length);

    useSearchPaginationWarning(enableSearch && enablePagination, isTableFiltering, !isPaginationControlled);

    const tableColumns = useMemo(() => createTableColumns(columns), [columns]);

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            expanded,
            rowSelection,
            sorting,
            globalFilter,
            ...(enablePagination && {pagination})
        },
        onSortingChange: handleSortingChange,
        onGlobalFilterChange: handleGlobalFilterChange,
        onExpandedChange: handleExpandedChange,
        onRowSelectionChange: handleRowSelectionChange,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        manualSorting: isSortingControlled,
        getFilteredRowModel: enableSearch ? getFilteredRowModel() : undefined,
        globalFilterFn: 'includesString',
        getColumnCanGlobalFilter: column => Boolean(searchColumns?.some(key => key === column.id)),
        manualFiltering: !isTableFiltering,
        filterFromLeafRows: isStructured,
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
        getRowId: (row: T) => String(row[primaryKey])
    });

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
                    {renderCell({row, isStructured})}

                    {afterCells.map((cell, i) => (
                        <React.Fragment key={(cell as React.ReactElement).key}>
                            {withCustomCellObserver(cell, row.index, 'after', i)}
                        </React.Fragment>
                    ))}
                </>
            );
        },
        [enableSelection, isStructured, registerCustomCellCounts, selectionCellProps, withCustomCellObserver]
    );

    const renderRowWithCustomization = useCallback(
        (row: Row<T>) => {
            const render = (options?: RenderOptions) => renderRowContent(row, options);

            const rowContext = {
                id: row.id,
                data: row.original as T,
                meta: {
                    index: row.index,
                    isSelected: row.getIsSelected(),
                    isExpanded: row.getIsExpanded()
                }
            };

            if (renderRow) {
                return renderRow({...rowContext, render});
            }

            return (
                <TableRow
                    key={row.id}
                    aria-selected={row.getIsSelected() || undefined}
                    {...(typeof rowProps === 'function' ? rowProps(rowContext) : rowProps)}
                >
                    {render()}
                </TableRow>
            );
        },
        [renderRow, renderRowContent, rowProps]
    );

    const isEmpty = !data || !Array.isArray(data) || data.length === 0;

    const rows = table.getRowModel().rows;
    const showNoResults = hasNoSearchResult(enableSearch, globalFilter, rows.length);
    const columnCount = customBeforeCount + (enableSelection ? 1 : 0) + tableColumns.length + customAfterCount;

    if (isEmpty && !enableSearch) {
        return null;
    }

    return (
        <>
            {enableSearch && (
                <SearchInput
                    variant="outlined"
                    value={globalFilter}
                    onChange={event => table.setGlobalFilter(event.target.value)}
                    onClear={() => table.setGlobalFilter('')}
                    {...searchInputProps}
                    className={clsx(styles.search, searchInputProps?.className)}
                />
            )}
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
                            {renderHeadCell({
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
                    {showNoResults ? (
                        <TableRow>
                            <TableCell colSpan={columnCount} align="center" aria-live="polite">{NO_RESULTS_MESSAGE}</TableCell>
                        </TableRow>
                    ) : (
                        rows.map(row => renderRowWithCustomization(row))
                    )}
                </TableBody>
            </Table>
            {enablePagination && (
                <Pagination
                    currentPage={table.getState().pagination.pageIndex + 1}
                    totalOfItems={
                        isPaginationControlled && totalItems !== undefined ?
                            totalItems :
                            table.getPrePaginationRowModel().rows.length
                    }
                    itemsPerPage={table.getState().pagination.pageSize}
                    itemsPerPageOptions={itemsPerPageOptions}
                    i18n={i18n}
                    onPageChange={(page: number) => table.setPageIndex(page - 1)}
                    onItemsPerPageChange={(size: number) => table.setPageSize(size)}
                    {...paginationProps}
                />
            )}
        </>
    );
};
