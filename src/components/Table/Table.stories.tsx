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
        <TableHeadCell>first column</TableHeadCell>
        <TableHeadCell>second column</TableHeadCell>
        <TableHeadCell>third column</TableHeadCell>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableBodyCell><Typography>cell 1</Typography></TableBodyCell>
            <TableBodyCell><Typography>cell 2</Typography></TableBodyCell>
            <TableBodyCell><Typography>cell 3</Typography></TableBodyCell>
        </TableRow>
        <TableRow>
            <TableBodyCell><Typography>cell 4</Typography></TableBodyCell>
            <TableBodyCell><Typography>cell 5</Typography></TableBodyCell>
            <TableBodyCell><Typography>cell 6</Typography></TableBodyCell>
        </TableRow>
        <TableRow>
            <TableBodyCell><Typography>cell 7</Typography></TableBodyCell>
            <TableBodyCell><Typography>cell 8</Typography></TableBodyCell>
            <TableBodyCell><Typography>cell 9</Typography></TableBodyCell>
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
