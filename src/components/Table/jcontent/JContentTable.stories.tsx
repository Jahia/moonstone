import React, {useState, useCallback, useMemo} from 'react';
import {useTable, usePagination, useRowState} from 'react-table';

import {
    Table,
    TableHead,
    TableHeadCell,
    TableRow,
    TableBody,
    TableBodyCell
} from '~/components';

import {Typography} from '~/components/Typography';

// Real jContent data for digitall site
import cols from './columns.json';
import rs from './data.json';

// Adapt columns and rows so that react-table can understand it
const adaptedColumns = cols.map(c => {
    return {
        Header: c.label.substring(c.label.lastIndexOf('.') + 1),
        accessor: c.id
    }
});

const adaptedRows = rs.map(r => ({
    ...r,
    name: r.displayName,
    type: r.primaryNodeType.displayName,
    createdBy: r.createdBy.value,
    lastModified: r.lastModified.value
}));

const Pagination = ({table}) => (
    <div>
    <button onClick={() => table.gotoPage(0)} disabled={!table.canPreviousPage}>
        {'<<'}
    </button>{' '}
    <button onClick={() => table.previousPage()} disabled={!table.canPreviousPage}>
        {'<'}
    </button>{' '}
        {table.state.pageIndex + 1}{' '}
    <button onClick={() => table.nextPage()} disabled={!table.canNextPage}>
        {'>'}
    </button>{' '}
    <button onClick={() => table.gotoPage(table.pageCount - 1)} disabled={!table.canNextPage}>
        {'>>'}
    </button>
        Total: {table.pageCount}
    </div>
);

const PaginationSupport = {
    Component: Pagination,
    plugin: usePagination,
    // note I'm overriding initialState
    optionsMaker: (options, vars) => ({...options, initialState: {pageIndex: 0}, manualPagination: true, pageCount: vars.pageCount}),
    // Not a fan of how effect is used to fetch data, can't they use an onclick or something to avoid second render? There is no onclick :(
    effect: (table, pagination) => {
        React.useEffect(() => {
            console.log(table)
            pagination.fetch(table.state.pageIndex);
        }, [table.state.pageIndex])
    }
};

const useSupport = (pagination) => {
    const supports = [];

    if (pagination) supports.push(PaginationSupport);

    return supports;
};

const JContentTable = ({columns, data, pagination}) => {
    const support = useSupport(pagination);

    const table = useTable(
        support.reduce((acc, val) => (val.optionsMaker(acc, pagination)), {data, columns}),
        ...support.reduce((acc, val) => {acc.push(val.plugin); return acc}, []),
        useRowState
    );

    support.forEach(s => s.effect(table, pagination));

    return (
        <>
            <Table {...table.getTableProps()}>
                <TableHead>
                    {table.headerGroups.map(headerGroup => (
                        <TableRow key={'headerGroup' + headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableHeadCell key={column.id} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </TableHeadCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...table.getTableBodyProps()}>
                    {table.rows.map(row => {
                        table.prepareRow(row);
                        console.log(row);
                        return (
                            // This rerenders all the rows :(
                            <TableRow key={'row' + row.id} {...row.getRowProps()} onMouseEnter={() => table.setRowState(row.id, {over: true})} onMouseLeave={() => table.setRowState(row.id, {over: false})}>
                                {row.cells.map(cell => (
                                    // TODO: Figure out a key value for these TableCell instances
                                    // tslint:disable-next-line
                                    <TableBodyCell {...cell.getCellProps()}>
                                        <Typography>{row.state.over && 'over'}{cell.render('Cell')}</Typography>
                                    </TableBodyCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {pagination && <Pagination table={table}/>}
        </>
    );
};


export const TableComponent = () => {
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    return <JContentTable columns={adaptedColumns}
                          data={data}
                          pagination={{
                              pageCount: pageCount,
                              fetch: pageIndex => {
                                  const pageSize = 5;
                                  setTimeout(() => {
                                          const startRow = pageSize * pageIndex;
                                          const endRow = startRow + pageSize;
                                          setData(adaptedRows.slice(startRow, endRow));
                                          setPageCount(Math.ceil(adaptedRows.length / pageSize));
                                  }, 1000)
                              }
                          }}
    />
};

TableComponent.storyName = 'jContent table example';

export default {
    title: 'AAA/Table',
    component: Table,
    parameters: {
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};
