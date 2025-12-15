import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    flexRender
} from '@tanstack/react-table';

import type {
    ExpandedState,
    RowSelectionState,
    SortingState,
    Row
} from '@tanstack/react-table';
import {useState, useEffect, useMemo, useCallback} from 'react';

import type {DataTableProps} from './DataTable.types';
import {
    Table,
    TableBody,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableRow,
    Checkbox,
    SortIndicator
} from '~/index';
import {createTableColumns} from './utils/DataTableColumnUtils';

type CustomColumnMeta = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
};

export const DataTable = <T extends NonNullable<unknown>>({
    data,
    columns,
    isStructured = false,
    enableSelection = false,
    onChangeSelection,
    enableSorting = false,
    defaultSortBy,
    defaultSortDirection = 'ascending',
    defaultSelection = [],
    actions,
    actionsHeaderLabel = 'Actions',
    renderRow
}: DataTableProps<T>) => {
    // Internal sorting state - fully managed by TanStack
    const initialSorting = useMemo<SortingState>(() => {
        if (defaultSortBy) {
            return [
                {
                    id: defaultSortBy as string,
                    desc: defaultSortDirection === 'descending'
                }
            ];
        }

        return [];
    }, [defaultSortBy, defaultSortDirection]);

    const [sorting, setSorting] = useState<SortingState>(initialSorting);
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [rowSelection, setRowSelection] = useState<RowSelectionState>(() =>
        defaultSelection?.reduce((acc: Record<string, boolean>, key: string) => ({...acc, [key]: true}), {}) ?? {}
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
            sorting
        },
        onSortingChange: setSorting,
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        enableSorting,
        onRowSelectionChange: setRowSelection,
        enableRowSelection: enableSelection,
        getCoreRowModel: getCoreRowModel(),
        ...(isStructured && {
            onExpandedChange: setExpanded,
            getSubRows: (row: T) => (row as T & { subRows?: T[] }).subRows,
            getExpandedRowModel: getExpandedRowModel()
        })
    });

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
                    <TableBodyCell width="52px">
                        <Checkbox
                            checked={row.getIsSelected()}
                            onChange={row.getToggleSelectedHandler()}
                        />
                    </TableBodyCell>
                )}

                {/* Data cells - content comes from column.cell defined in createTableColumns */}
                {row.getVisibleCells().map((cell, index) => {
                    const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
                    const isFirstColumn = index === 0;

                    // Build structured view props for tree view support
                    const structuredProps = isStructured && isFirstColumn ? {
                        row: {
                            canExpand: row.getCanExpand(),
                            isExpanded: row.getIsExpanded(),
                            depth: row.depth,
                            getToggleRowExpandedProps: () => ({
                                onClick: row.getToggleExpandedHandler()
                            })
                        },
                        isExpandableColumn: true
                    } : {};

                    return (
                        <TableBodyCell
                            key={cell.id}
                            textAlign={meta?.align ?? 'left'}
                            {...structuredProps}
                        >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableBodyCell>
                    );
                })}

                {/* Actions cell */}
                {actions && <TableBodyCell>{actions(row.original)}</TableBodyCell>}
            </>
        ),
        [enableSelection, actions, isStructured]
    );

    const renderRowWithCustomization = useCallback(
        (row: Row<T>) => {
            const defaultRender = () => renderRowContent(row);

            if (renderRow) {
                return renderRow(row, defaultRender);
            }

            return <TableRow key={row.id}>{defaultRender()}</TableRow>;
        },
        [renderRow, renderRowContent]
    );

    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <Table>
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

                            return (
                                <TableHeadCell
                                    key={header.id}
                                    iconEnd={
                                        isColumnSortable ? (
                                            <SortIndicator
                                                isSorted={Boolean(sortDirection)}
                                                direction={
                                                    sortDirection === 'asc' ?
                                                        'ascending' :
                                                        sortDirection === 'desc' ?
                                                            'descending' :
                                                            undefined
                                                }
                                            />
                                        ) : undefined
                                    }
                                    style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
                                    textAlign={alignment}
                                    onClick={
                                        isColumnSortable ?
                                            header.column.getToggleSortingHandler() :
                                            undefined
                                    }
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
    );
};
