import {
    useReactTable,
    getCoreRowModel,
    flexRender
} from '@tanstack/react-table';
import {
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    TableBodyCell
} from '~/components';
import {TablePocProps} from './TablePoc.types';

// Where we create the single Table component that can be reused for jcontent dev and will have the future features added

export const TablePoc = <T extends Record<string, unknown>>({
    data,
    columns
}: TablePocProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

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
