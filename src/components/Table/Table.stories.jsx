// This file has been written in jsx instead of tsx due to issues using
// typescript with react-table. When react-table v8 is released in 2021,
// these issues should be resolved.

import React from 'react';
import {useRowSelect, useTable} from 'react-table';
import storyStyles from '~/__storybook__/storybook.module.scss';

import {
    Checkbox,
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    TableBodyCell
} from '~/components';
import {tableDataFlat} from '~/data/tableDataFlat';

export default {
    title: 'Components/Table',
    component: Table,
    parameters: {
        controls: {disable: true},
        knobs: {disable: true},
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
        {
            data,
            columns
        }
    );

    return (
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    // A key is included in headerGroup.getHeaderGroupProps
                    // eslint-disable-next-line react/jsx-key
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            // A key is included in column.getHeaderProps
                            // eslint-disable-next-line react/jsx-key
                            <TableHeadCell {...column.getHeaderProps()}>
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
                        // A key is included in row.getRowProps
                        // eslint-disable-next-line react/jsx-key
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                // A key is included in cell.getCellProps
                                // eslint-disable-next-line react/jsx-key
                                <TableBodyCell {...cell.getCellProps()}>
                                    {cell.render('Cell')}
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

export const SelectableRows = () => {
    // These components were pulled out of the columns definition below so that prop-type
    // eslint errors can be avoided
    const headerSelection = ({getToggleAllRowsSelectedProps}) => (
        <Checkbox variant="uncontrolled" {...getToggleAllRowsSelectedProps()}/>
    );
    const cellSelection = ({row}) => (
        <Checkbox variant="uncontrolled" {...row.getToggleRowSelectedProps()}/>
    );

    const data = React.useMemo(() => tableDataFlat, []);
    const columns = React.useMemo(() => [
        {
            id: 'selection',
            Header: headerSelection,
            Cell: cellSelection
        },
        {Header: 'Name', accessor: 'name'},
        {Header: 'Status', accessor: 'status'},
        {Header: 'Type', accessor: 'type'},
        {Header: 'Created By', accessor: 'createdBy'},
        {Header: 'Last Modified On', accessor: 'lastModifiedOn'}
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state: {selectedRowIds}
    } = useTable(
        {
            data,
            columns
        },
        useRowSelect
    );

    return (
        <>
            <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        // A key is included in headerGroup.getHeaderGroupProps
                        // eslint-disable-next-line react/jsx-key
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // A key is included in column.getHeaderProps
                                // eslint-disable-next-line react/jsx-key
                                <TableHeadCell {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </TableHeadCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map((row, id) => {
                        prepareRow(row);
                        return (
                            // A key is included in row.getRowProps
                            // eslint-disable-next-line react/jsx-key
                            <TableRow
                                isSelected={row.isSelected}
                                isHighlighted={id === 1}
                                {...row.getRowProps()}
                            >
                                {row.cells.map(cell => (
                                    // A key is included in cell.getCellProps
                                    // eslint-disable-next-line react/jsx-key
                                    <TableBodyCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableBodyCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            <section>
                <pre>
                    <code className={storyStyles.storyCode}>
                        {JSON.stringify(
                            {
                                selectedRowIds,
                                'selectedFlatRows[].original': selectedFlatRows.map(d => d.original)
                            },
                            null,
                            2
                        )}
                    </code>
                </pre>
            </section>
        </>
    );
};

SelectableRows.storyName = 'Selectable Rows with React-Table';

// Export const SortingByColumn = () => {};
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
