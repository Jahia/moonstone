import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender
} from '@tanstack/react-table';
import {toNodeArray} from '~/utils/helpers';
import type {ExpandedState, Row} from '@tanstack/react-table';
import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react';
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

    // Pending counts written during render; synced to state post-render to avoid calling setState during render.
    const pendingCustomBefore = useRef(0);
    const pendingCustomAfter = useRef(0);

    // Measured offsetWidths per position index, kept in state so that ResizeObserver updates trigger a re-render and headers stay aligned.
    const [customHeaderWidths, setCustomHeaderWidths] = useState<{ before: string[]; after: string[] }>({before: [], after: []});
    const observersRef = useRef<{ before:(ResizeObserver | undefined)[]; after: (ResizeObserver | undefined)[] }>({before: [], after: []});

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
        (row: Row<T>, options?: DefaultRenderOptions) => {
            const beforeCells = toNodeArray(options?.before);
            const afterCells = toNodeArray(options?.after);

            // Track how many custom cells are present so the header can create matching placeholder cells.
            if (beforeCells.length) {
                pendingCustomBefore.current = beforeCells.length;
            }

            if (afterCells.length) {
                pendingCustomAfter.current = afterCells.length;
            }

            // For the first row, attach a ResizeObserver so each header placeholder cell
            // can match the measured offsetWidth of the body cell (which includes any
            // padding overrides applied by the component, e.g. TableCellStatus sets padding: 0).
            const withObserver = (node: React.ReactNode, position: 'before' | 'after', index: number): React.ReactNode => {
                if (row.index !== 0 || !React.isValidElement(node)) {
                    return node;
                }

                return React.cloneElement(node as React.ReactElement, {
                    ref: (el: HTMLElement | null) => {
                        observersRef.current[position][index]?.disconnect();
                        observersRef.current[position][index] = undefined;
                        if (el) {
                            const measure = () => {
                                const w = `${el.offsetWidth}px`;
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
                            observer.observe(el);
                            observersRef.current[position][index] = observer;
                        }
                    }
                });
            };

            return (
                <>
                    {beforeCells.map((cell, i) => (
                        <React.Fragment key={(cell as React.ReactElement).key}>{withObserver(cell, 'before', i)}</React.Fragment>
                    ))}

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

                    {afterCells.map((cell, i) => (
                        <React.Fragment key={(cell as React.ReactElement).key}>{withObserver(cell, 'after', i)}</React.Fragment>
                    ))}
                </>
            );
        },
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
                            {headerGroup.headers.map((header, index) => {
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
