import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    type ColumnDef
} from '@tanstack/react-table';
import {
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    TableBodyCell
} from '~/components';
import type {MoonstoneTableProps} from './types/MoonstoneTableColumn.types';

export const MoonstoneTable = <T extends Record<string, unknown>>({
    data,
    columns
}: MoonstoneTableProps<T>) => {
    const tanstackColumns: ColumnDef<T>[] = columns.map(col => ({
        id: col.key.toString(),
        accessorKey: col.key,
        header: col.label,
        cell: col.render ?
            info => col.render!(info.getValue() as T[keyof T], info.row.original) :
            info => {
                const value = info.getValue();
                if (value instanceof Date) {
                    return value.toLocaleDateString('fr-FR');
                }

                return value === null ? '' : String(value);
            }
    }));

    const table = useReactTable({
        data,
        columns: tanstackColumns,
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
