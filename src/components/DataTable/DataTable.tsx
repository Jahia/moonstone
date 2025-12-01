import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    flexRender,
    type ColumnDef,
    type ExpandedState,
    type RowSelectionState,
    type Row
} from '@tanstack/react-table';
import {useState, useEffect} from 'react';

import type {DataTableProps, SubRowKey} from './DataTable.types';
import {Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow, Checkbox, SortIndicator} from '~/index';

const createTableColumns = <T extends NonNullable<unknown>>(
    columns: DataTableProps<T>['columns']
): ColumnDef<T>[] => columns.map(col => ({
    id: String(col.key),
    accessorKey: col.key,
    header: col.label,
    cell: col.render ?
        ({row, getValue}) => col.render!(getValue() as Omit<T, SubRowKey>, row.original) :
        ({getValue}) => {
            const value = getValue();
            if (value && typeof value === 'object' && 'value' in value) {
                return (value as {value: string}).value;
            }

            return String(value ?? '');
        },
    meta: {
        isSortable: col.isSortable
    }
}))

const adaptRowForTableBodyCell = <T extends object>(row: Row<T>) => ({
    canExpand: row.getCanExpand(),
    isExpanded: row.getIsExpanded(),
    depth: row.depth,
    getToggleRowExpandedProps: () => ({
        onClick: row.getToggleExpandedHandler()
    })
});

const extractIconFromCell = (cellValue: unknown): React.ReactElement | undefined => {
    if (cellValue && typeof cellValue === 'object' && 'icon' in cellValue) {
        return (cellValue as {icon?: React.ReactElement}).icon;
    }

    return undefined;
};

export const DataTable = <T extends object>({
    data,
    columns,
    isStructured = false,
    enableSelection = false,
    onChangeSelection,
    enableSorting = true,
    sortBy,
    sortDirection,
    onClickTableHeadCell,
    defaultSelection = []
}: DataTableProps<T>) => {
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [rowSelection, setRowSelection] = useState<RowSelectionState>(() =>
        defaultSelection.reduce((acc, key) => ({...acc, [key]: true}), {})
    );

    useEffect(() => {
        onChangeSelection?.(Object.keys(rowSelection));
    }, [rowSelection, onChangeSelection]);

    const tableColumns = createTableColumns(columns);

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            expanded,
            rowSelection
        },
        onRowSelectionChange: setRowSelection,
        enableRowSelection: enableSelection,
        getCoreRowModel: getCoreRowModel(),
        ...(isStructured && {
            onExpandedChange: setExpanded,
            getSubRows: (row: T) => (row as T & {subRows?: T[]}).subRows,
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
                            const isColumnSortable = enableSorting && (header.column.columnDef.meta as {isSortable?: boolean})?.isSortable !== false;

                            return (
                                <TableHeadCell
                                    key={header.id}
                                    iconEnd={
                                        isColumnSortable ? (
                                            <SortIndicator
                                                isSorted={sortBy === header.id}
                                                direction={sortBy === header.id ? sortDirection : undefined}
                                            />
                                        ) : undefined
                                    }
                                    style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
                                    onClick={isColumnSortable ? () => onClickTableHeadCell?.(header.id) : undefined}
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
                        <TableRow
                            key={row.id}
                        >
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
                                const iconStart = isFirstColumn ? extractIconFromCell(cell.getValue()) : undefined;

                                return (
                                    <TableBodyCell
                                        key={cell.id}
                                        row={adaptedRow as never}
                                        cell={cell as never}
                                        isExpandableColumn={isStructured && isFirstColumn}
                                        iconStart={iconStart}
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
