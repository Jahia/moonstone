/*
    This file has been written in jsx instead of tsx due to issues using
    Typescript with react-table. When react-table v8 is released in 2021,
    these issues should be resolved.
*/

import React, {useEffect, useState} from 'react';
import {useExpanded, useFlexLayout, useRowSelect, useSortBy, useTable} from 'react-table';
import storyStyles from '~/__storybook__/storybook.module.scss';

import {
    Checkbox,
    IconTextIcon,
    SortIndicator,
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    TableBodyCell,
    TablePagination
} from '~/components';
import {tableDataFlat, tableDataNested, tablePaginationDataFlat} from '~/data';

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
        {
            Header: 'Name',
            id: 'name',
            accessor: row => row.name.value,
            Cell: cellInfo => {
                const {row} = cellInfo;
                return <IconTextIcon iconStart={row.original.name.icon}>{row.values.name}</IconTextIcon>;
            }
        },
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
    const data = React.useMemo(() => tableDataFlat, []);
    const columns = React.useMemo(() => [
        {
            id: 'selection',
            Header: header => <Checkbox isUncontrolled {...header.getToggleAllRowsSelectedProps()}/>,
            Cell: cellInfo => <Checkbox isUncontrolled {...cellInfo.row.getToggleRowSelectedProps()}/>
        },
        {
            Header: 'Name',
            id: 'name',
            accessor: row => row.name.value,
            Cell: cellInfo => {
                const {row} = cellInfo;
                return <IconTextIcon iconStart={row.original.name.icon}>{row.values.name}</IconTextIcon>;
            }
        },
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

export const SortingByColumn = () => {
    const data = React.useMemo(() => tableDataFlat, []);
    const columns = React.useMemo(() => [
        {
            Header: 'Name',
            id: 'name',
            accessor: row => row.name.value,
            Cell: cellInfo => {
                const {row} = cellInfo;
                return <IconTextIcon iconStart={row.original.name.icon}>{row.values.name}</IconTextIcon>;
            }
        },
        {Header: 'Status', accessor: 'status', disableSortBy: true},
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
            columns,
            initialState: {
                sortBy: [
                    {id: 'lastModifiedOn', desc: true}
                ]
            },
            disableSortRemove: true
        },
        useSortBy
    );

    const renderSortIndicator = (isSorted, isSortedDesc) => {
        const direction = isSortedDesc ? 'descending' : 'ascending';
        return <SortIndicator isSorted={isSorted} direction={direction}/>;
    };

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
                            <TableHeadCell
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                iconEnd={column.canSort && renderSortIndicator(column.isSorted, column.isSortedDesc)}
                            >
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
                        <TableRow {...row.getRowProps()} isHighlighted={row.values.name === 'Highlight Row'}>
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

SortingByColumn.storyName = 'Sorting by Column with React-Table';

export const Pagination = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const data = React.useMemo(() => tablePaginationDataFlat.slice((currentPage - 1) * rowsPerPage, Math.min(tablePaginationDataFlat.length, currentPage * rowsPerPage)), [currentPage, rowsPerPage]);
    const columns = React.useMemo(() => [
        {
            Header: 'Name',
            id: 'name',
            accessor: row => row.name.value,
            Cell: cellInfo => {
                const {row} = cellInfo;
                return <IconTextIcon iconStart={row.original.name.icon}>{row.values.name}</IconTextIcon>;
            }
        },
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
            <TablePagination
                currentPage={currentPage}
                totalNumberOfRows={tablePaginationDataFlat.length}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={rowsPerPage => setRowsPerPage(rowsPerPage)}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
};

Pagination.storyName = 'Pagination with React-Table';

export const StructuredView = () => {
    const data = React.useMemo(() => tableDataNested, []);
    const columns = React.useMemo(() => [
        {Header: 'Name', id: 'name', accessor: row => row.name.value},
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
        toggleAllRowsExpanded
    } = useTable(
        {
            data,
            columns
        },
        useExpanded
    );

    useEffect(() => {
        toggleAllRowsExpanded();
    }, [toggleAllRowsExpanded]);

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
                                <TableBodyCell
                                    {...cell.getCellProps()}
                                    row={row}
                                    cell={cell}
                                    isExpandableColumn={cell.column.id === 'name'}
                                    iconStart={row.original[cell.column.id]?.icon}
                                >
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

StructuredView.storyName = 'Structured View with React-Table';

export const ColumnWidthReactTable = () => {
    const data = React.useMemo(() => tableDataFlat, []);
    const columns = React.useMemo(() => [
        /*
            Use the width property in these column definitions to specify column widths.
            A column without a width property, such as the column definition immediately
            below this comment, will expand to fit any remaining space.
                "`width` is used as both the flex-basis and flex-grow. This means that it
                essentially acts as both the minimum width and flex-ratio of the column."
                - https://react-table.tanstack.com/docs/api/useFlexLayout
        */
        {Header: 'Name', id: 'name', accessor: row => row.name.value},
        {Header: 'Status', accessor: 'status', width: 35},
        {Header: 'Content Type', accessor: 'type', width: 50},
        {Header: 'Created By', accessor: 'createdBy', width: 30},
        {Header: 'Last Modified On', accessor: 'lastModifiedOn', width: 50}
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
        },
        // Use the useFlexLayout plugin to render the table elements with flexbox
        // (instead of with table element widths which are calculated by the browser)
        useFlexLayout
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
                                <TableBodyCell
                                    {...cell.getCellProps()}
                                    iconStart={cell.column.id === 'name' && row.original.name.icon}
                                >
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

ColumnWidthReactTable.storyName = 'Column Width Management with React-Table';

export const KitchenSinkFlat = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const data = React.useMemo(() => (
        tablePaginationDataFlat.slice(
            (currentPage - 1) * rowsPerPage,
            Math.min(tablePaginationDataFlat.length, currentPage * rowsPerPage)
        )
    ), [currentPage, rowsPerPage]);
    const columns = React.useMemo(() => [
        {
            id: 'selection',
            width: 20,
            Header: header => <Checkbox isUncontrolled {...header.getToggleAllRowsSelectedProps()}/>,
            Cell: cellInfo => <Checkbox isUncontrolled {...cellInfo.row.getToggleRowSelectedProps()}/>
        },
        {Header: 'Name', id: 'name', accessor: row => row.name.value},
        {Header: 'Status', accessor: 'status', disableSortBy: true, width: 35},
        {Header: 'Type', accessor: 'type', width: 50},
        {Header: 'Created By', accessor: 'createdBy', width: 30},
        {Header: 'Last Modified On', accessor: 'lastModifiedOn', width: 50}
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
            columns,
            initialState: {
                sortBy: [
                    {id: 'lastModifiedOn', desc: true}
                ]
            },
            disableSortRemove: true
        },
        useSortBy,
        useRowSelect,
        useFlexLayout
    );

    const renderSortIndicator = (isSorted, isSortedDesc) => {
        const direction = isSortedDesc ? 'descending' : 'ascending';
        return <SortIndicator isSorted={isSorted} direction={direction}/>;
    };

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
                                <TableHeadCell
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    iconEnd={column.canSort && renderSortIndicator(column.isSorted, column.isSortedDesc)}
                                >
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
                                    <TableBodyCell
                                        {...cell.getCellProps()}
                                        iconStart={row.original[cell.column.id]?.icon}
                                    >
                                        {cell.render('Cell')}
                                    </TableBodyCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <TablePagination
                currentPage={currentPage}
                totalNumberOfRows={tablePaginationDataFlat.length}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={rowsPerPage => setRowsPerPage(rowsPerPage)}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
};

KitchenSinkFlat.storyName = 'All features except row expansion - flat data';

export const KitchenSinkNested = () => {
    const data = React.useMemo(() => tableDataNested, []);
    const columns = React.useMemo(() => [
        {
            id: 'selection',
            width: 20,
            Header: header => <Checkbox isUncontrolled {...header.getToggleAllRowsSelectedProps()}/>,
            Cell: cellInfo => <Checkbox isUncontrolled {...cellInfo.row.getToggleRowSelectedProps()}/>
        },
        {Header: 'Name', id: 'name', accessor: row => row.name.value},
        {Header: 'Status', accessor: 'status', disableSortBy: true, width: 35},
        {Header: 'Type', accessor: 'type', width: 50},
        {Header: 'Created By', accessor: 'createdBy', width: 30},
        {Header: 'Last Modified On', accessor: 'lastModifiedOn', width: 50}
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        toggleAllRowsExpanded
    } = useTable(
        {
            data,
            columns,
            initialState: {
                sortBy: [
                    {id: 'lastModifiedOn', desc: true}
                ]
            },
            disableSortRemove: true
        },
        useSortBy,
        useExpanded,
        useRowSelect,
        useFlexLayout
    );

    const renderSortIndicator = (isSorted, isSortedDesc) => {
        const direction = isSortedDesc ? 'descending' : 'ascending';
        return <SortIndicator isSorted={isSorted} direction={direction}/>;
    };

    useEffect(() => {
        toggleAllRowsExpanded();
    }, [toggleAllRowsExpanded]);

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
                            <TableHeadCell
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                iconEnd={column.canSort && renderSortIndicator(column.isSorted, column.isSortedDesc)}
                            >
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
                                <TableBodyCell
                                    {...cell.getCellProps()}
                                    row={row}
                                    cell={cell}
                                    isExpandableColumn={cell.column.id === 'name'}
                                    iconStart={row.original[cell.column.id]?.icon}
                                >
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

KitchenSinkNested.storyName = 'All features except pagination - nested data';
