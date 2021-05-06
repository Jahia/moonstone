import React from 'react';
import {useTable} from 'react-table';

import {
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    TableBodyCell
} from '~/components';
import {tableDataFlat} from '~/data/tableDataFlat';
import {Typography} from '~/components/Typography';

export default {
    title: 'AAA/Table',
    component: Table,
    parameters: {
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};

export const Basic = () => (
    <Table>
    <TableHead>
        <TableRow>
            <TableHeadCell>first column</TableHeadCell>
            <TableHeadCell>second column</TableHeadCell>
            <TableHeadCell>third column</TableHeadCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableBodyCell>cell 1</TableBodyCell>
            <TableBodyCell>cell 2</TableBodyCell>
            <TableBodyCell>cell 3</TableBodyCell>
        </TableRow>
        <TableRow>
            <TableBodyCell>cell 4</TableBodyCell>
            <TableBodyCell>cell 5</TableBodyCell>
            <TableBodyCell>cell 6</TableBodyCell>
        </TableRow>
        <TableRow>
            <TableBodyCell>cell 7</TableBodyCell>
            <TableBodyCell>cell 8</TableBodyCell>
            <TableBodyCell>cell 9</TableBodyCell>
        </TableRow>
    </TableBody>
    </Table>
);

export const BasicReactTable = () => {
    const data = React.useMemo(() => tableDataFlat, []);
    // TODO: figure out why there's a type mis-match with columns when it's used below to
    // TODO: instantiate the table
    const columns: any = React.useMemo(() => [
        {Header: 'Name', accessor: 'name'},
        {Header: 'Type', accessor: 'type'},
        {Header: 'Created By', accessor: 'createdBy'},
        {Header: 'Last Modified On', accessor: 'lastModifiedOn'}
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {data, columns}
    );

    return (
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow key={'headerGroup' + headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableHeadCell key={column.id} {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableHeadCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <TableRow key={'row' + row.id} {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                // TODO: Figure out a key value for these TableCell instances
                                // tslint:disable-next-line
                                <TableBodyCell {...cell.getCellProps()}>
                                    <Typography>{cell.render('Cell')}</Typography>
                                </TableBodyCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};
BasicReactTable.storyName = 'Basic Table with React-Table';

// export const SelectableRows = () => {};
// SelectableRows.storyName = 'Selectable Rows with React-Table';
//
// export const SortingByColumn = () => {};
// SortingByColumn.storyName = 'Sorting by Column with React-Table';
//
// export const Pagination = () => {};
// Pagination.storyName = 'Pagination with React-Table';
//
// export const StructuredView = () => {};
// StructuredView.storyName = 'Structured View with React-Table';
//
// export const KitchenSink = () => {};
// KitchenSink.storyName = 'Everything and the Kitchen Sink with React-Table';
