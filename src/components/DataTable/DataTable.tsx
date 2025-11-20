import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    type ColumnDef
} from '@tanstack/react-table';

import type {DataTableProps} from './types/DataTableColumn.types';
import {Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow} from '~/index';

export const MoonstoneTable = <T extends Record<string, unknown>>({
    data,
    columns
}: DataTableProps<T>) => {
    const TableColumns: ColumnDef<T>[] = columns.map(col => ({
        id: col.key,
        accessorKey: col.key,
        header: col.label
    }));

    const table = useReactTable({
        data,
        columns: TableColumns,
        getCoreRowModel: getCoreRowModel()
    });

    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <Table>
            <TableHead>
                {table.getHeaderGroups().map(headerGroup => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <TableHeadCell key={header.id}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHeadCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {table.getRowModel().rows.map(row => (
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <TableBodyCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableBodyCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
