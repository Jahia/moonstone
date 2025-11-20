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

import type {DataTableProps} from './types/DataTableColumn.types';
import {Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow, Checkbox} from '~/index';

const createTableColumns = <T extends Record<string, unknown>>(
    columns: DataTableProps<T>['columns']
): ColumnDef<T>[] => {
    return columns.map(col => ({
        id: col.key,
        accessorKey: col.key,
        header: col.label,
        cell: col.render ?
            ({row, getValue}) => col.render!(getValue() as T[keyof T], row.original) :
            ({getValue}) => {
                const value = getValue();
                if (value && typeof value === 'object' && 'value' in value) {
                    return (value as {value: string}).value;
                }

                return String(value ?? '');
            }
    }));
};

const adaptRowForTableBodyCell = <T extends Record<string, unknown>>(row: Row<T>) => ({
    canExpand: row.getCanExpand(),
    isExpanded: row.getIsExpanded(),
    depth: row.depth,
    getToggleRowExpandedProps: () => ({
        onClick: row.getToggleExpandedHandler(),
        style: {}
    })
});

const extractIconFromCell = (cellValue: unknown): React.ReactElement | undefined => {
    if (cellValue && typeof cellValue === 'object' && 'icon' in cellValue) {
        return (cellValue as {icon?: React.ReactElement}).icon;
    }

    return undefined;
};

export const MoonstoneTable = <T extends Record<string, unknown>>({
    data,
    columns,
    isStructured = false,
    enableRowSelection = false
}: DataTableProps<T>) => {
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

    const tableColumns = createTableColumns(columns);

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            expanded,
            rowSelection
        },
        onExpandedChange: setExpanded,
        onRowSelectionChange: setRowSelection,
        enableRowSelection,
        getCoreRowModel: getCoreRowModel(),
        ...(isStructured && {
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
                        {enableRowSelection && (
                            <TableHeadCell width="52px">
                                <Checkbox
                                    checked={table.getIsAllRowsSelected()}
                                    indeterminate={table.getIsSomeRowsSelected()}
                                    onChange={table.getToggleAllRowsSelectedHandler()}
                                />
                            </TableHeadCell>
                        )}
                        {headerGroup.headers.map(header => (
                            <TableHeadCell key={header.id}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHeadCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {table.getRowModel().rows.map(row => {
                    const adaptedRow = isStructured ? adaptRowForTableBodyCell(row) : undefined;

                    return (
                        <TableRow
                            key={row.id}
                            isSelected={enableRowSelection ? row.getIsSelected() : undefined}
                        >
                            {enableRowSelection && (
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
