import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    flexRender,
    type ExpandedState,
    type RowSelectionState,
    type SortingState,
    type Row
} from '@tanstack/react-table';
import { useState, useEffect, useMemo } from 'react';

import type { DataTableProps } from './DataTable.types';
import { Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow, Checkbox, SortIndicator } from '~/index';
import { createTableColumns } from './utils/DataTableColumnUtils';

type CustomColumnMeta = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
};

const adaptRowForTableBodyCell = <T extends NonNullable<unknown>>(row: Row<T>) => ({
    canExpand: row.getCanExpand(),
    isExpanded: row.getIsExpanded(),
    depth: row.depth,
    getToggleRowExpandedProps: () => ({
        onClick: row.getToggleExpandedHandler()
    })
});

const extractIconFromCell = (cellValue: unknown): React.ReactElement | undefined => {
    if (cellValue && typeof cellValue === 'object' && 'icon' in cellValue) {
        return (cellValue as { icon?: React.ReactElement }).icon;
    }

    return undefined;
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
    defaultSelection = []
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
        defaultSelection.reduce((acc, key) => ({ ...acc, [key]: true }), {})
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
        // Sorting
        onSortingChange: setSorting,
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        enableSorting,
        // Selection
        onRowSelectionChange: setRowSelection,
        enableRowSelection: enableSelection,
        // Core
        getCoreRowModel: getCoreRowModel(),
        // Structured/Expandable
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

    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <Table>
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
                                    style={{ cursor: isColumnSortable ? 'pointer' : 'default' }}
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
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {table.getRowModel().rows.map(row => {
                    const adaptedRow = isStructured ? adaptRowForTableBodyCell(row) : undefined;
                    return (
                        <TableRow key={row.id}>
                            {enableSelection && (
                                <TableBodyCell width="52px">
                                    <Checkbox
                                        checked={row.getIsSelected()}
                                        onChange={row.getToggleSelectedHandler()}
                                    />
                                </TableBodyCell>
                            )}
                            {row.getVisibleCells().map((cell, index) => {
                                const isFirstColumn = index === 0;
                                const iconStart = isFirstColumn ?
                                    extractIconFromCell(cell.getValue()) :
                                    undefined;
                                const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
                                const alignment = meta?.align ?? 'left';

                                return (
                                    <TableBodyCell
                                        key={cell.id}
                                        row={adaptedRow as never}
                                        cell={cell as never}
                                        isExpandableColumn={isStructured && isFirstColumn}
                                        iconStart={iconStart}
                                        textAlign={alignment}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableBodyCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};
