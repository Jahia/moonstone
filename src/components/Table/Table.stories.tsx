import React from 'react';
import {useTable} from 'react-table';

import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell
} from '~/components';
import {tableDataFlat} from '~/data/tableDataFlat';
import './Table.scss';
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
            <TableCell component="th">first column</TableCell>
            <TableCell component="th">second column</TableCell>
            <TableCell component="th">third column</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell><Typography>cell 1</Typography></TableCell>
            <TableCell><Typography>cell 2</Typography></TableCell>
            <TableCell><Typography>cell 3</Typography></TableCell>
        </TableRow>
        <TableRow>
            <TableCell><Typography>cell 4</Typography></TableCell>
            <TableCell><Typography>cell 5</Typography></TableCell>
            <TableCell><Typography>cell 6</Typography></TableCell>
        </TableRow>
        <TableRow>
            <TableCell><Typography>cell 7</Typography></TableCell>
            <TableCell><Typography>cell 8</Typography></TableCell>
            <TableCell><Typography>cell 9</Typography></TableCell>
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
            <TableHead className="moonstone-table_head">
                {headerGroups.map(headerGroup => (
                    <TableRow key={'headerGroup' + headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell key={column.id} component="th" {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCell>
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
                                <TableCell {...cell.getCellProps()}>
                                    <Typography>{cell.render('Cell')}</Typography>
                                </TableCell>
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
