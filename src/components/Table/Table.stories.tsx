import React from 'react';
import {Story} from '@storybook/react';
import {useTable} from 'react-table';
import clsx from 'clsx';

import {TableProps} from './Table.types';
import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell
} from '~/components';
import {tableDataFlat} from '~/data/tableDataFlat';
import './Table.scss';

export default {
    title: 'AAA/Table',
    component: Table,
    parameters: {
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};

const Template: Story<TableProps> = args => (
    <Table {...args}></Table>
);

export const Basic = () => (
    <Table>
    <TableHead>
        <TableRow>
            <TableCell component="th">first row</TableCell>
            <TableCell component="th">second row</TableCell>
            <TableCell component="th">third row</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell>cell 1</TableCell>
            <TableCell>cell 2</TableCell>
            <TableCell>cell 3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>cell 4</TableCell>
            <TableCell>cell 5</TableCell>
            <TableCell>cell 6</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>cell 7</TableCell>
            <TableCell>cell 8</TableCell>
            <TableCell>cell 9</TableCell>
        </TableRow>
    </TableBody>
    </Table>
);

export const BasicReactTable = () => {
    const data = React.useMemo(() => tableDataFlat, []);
    const columns = React.useMemo(() => [
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

    // TODO: add keys for looped components
    return (
        <Table {...getTableProps()}>
            <TableHead className="moonstone-table_head">
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell component="th" {...column.getHeaderProps()}>
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
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <TableCell {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};
BasicReactTable.storyName = 'Basic Table Using React Table';

export const SelectableRows = Template.bind({});

export const SortingByColumn = Template.bind({});

export const Pagination = Template.bind({});

export const StructuredView = Template.bind({});

export const KitchenSink = Template.bind({});
