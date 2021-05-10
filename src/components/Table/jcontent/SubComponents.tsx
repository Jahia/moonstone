import React from 'react';
import {
    TableRow,
    TableBodyCell
} from '~/components';

function SubRows({ row, rowProps, visibleColumns, data, loading, table }) {
    if (loading) {
        return (
            <TableRow>
                <TableBodyCell/>
                <TableBodyCell colSpan={visibleColumns.length - 1}>
                    Loading...
                </TableBodyCell>
            </TableRow>
        );
    }

    // error handling here :)

    return (
        <>
            {data.map((x, i) => {
                const r = { ...row, original: x, isExpanded: false, id: row.id + i };
                table.prepareRow(r);
                return (
                    <TableRow
                        {...rowProps}
                        key={`${rowProps.key}-expanded-${i}`}
                    >
                        {row.cells.map((cell) => {
                            return (
                                <TableBodyCell
                                    {...cell.getCellProps()}
                                >
                                    {cell.render(cell.column.SubCell ? 'SubCell' : 'Cell', {
                                        value:
                                            cell.column.accessor &&
                                            cell.column.accessor(x, i),
                                        row: r
                                    })}
                                </TableBodyCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </>
    );
}

function SubRowAsync({ row, rowProps, visibleColumns, getter, table }) {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setData(getter());
            setLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <SubRows
            row={row}
            rowProps={rowProps}
            visibleColumns={visibleColumns}
            data={data}
            loading={loading}
            table={table}
        />
    );
}

export {SubRowAsync, SubRows};
