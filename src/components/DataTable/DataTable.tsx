import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    getSortedRowModel,
    flexRender
} from '@tanstack/react-table';

import type {
    ExpandedState,
    RowSelectionState,
    SortingState,
    Row,
    Cell
} from '@tanstack/react-table';
import {useState, useEffect, useMemo, useCallback} from 'react';

import type {DataTableProps, CellBodyProps} from './DataTable.types';
import {
    Table,
    TableBody,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableRow,
    Checkbox,
    SortIndicator
} from '~/index';
import {createTableColumns} from './utils/DataTableColumnUtils';

type CustomColumnMeta = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
};

const adaptRowForTableBodyCell = <T extends NonNullable<unknown>>(row: Row<T>) => ({
    canExpand: row.getCanExpand(),
    isExpanded: row.getIsExpanded(),
    depth: row.depth,
    getToggleRowExpandedProps: () => ({
        onClick: row.getToggleExpandedHandler()
    })
});

const extractIconFromCell = (cellValue: unknown): React.ReactElement | undefined => {
    if (cellValue && typeof cellValue === 'object' && 'icon' in cellValue) {
        return (cellValue as { icon?: React.ReactElement }).icon;
    }

    return undefined;
};

export const DataTable = <T extends NonNullable<unknown>>({
    data,
    columns,
    isStructured = false,
    enableSelection = false,
    onChangeSelection,
    enableSorting = false,
    defaultSortBy,
    defaultSortDirection = 'ascending',
    defaultSelection = [],
    actions,
    actionsHeaderLabel = 'Actions',
    renderRow
}: DataTableProps<T>) => {
    // Internal sorting state - fully managed by TanStack
    const initialSorting = useMemo<SortingState>(() => {
        if (defaultSortBy) {
            return [
                {
                    id: defaultSortBy as string,
                    desc: defaultSortDirection === 'descending'
                }
            ];
        }

        return [];
    }, [defaultSortBy, defaultSortDirection]);

    const [sorting, setSorting] = useState<SortingState>(initialSorting);
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [rowSelection, setRowSelection] = useState<RowSelectionState>(() =>
        defaultSelection.reduce((acc: Record<string, boolean>, key: string) => ({...acc, [key]: true}), {})
    );

    useEffect(() => {
        onChangeSelection?.(Object.keys(rowSelection));
    }, [rowSelection, onChangeSelection]);

    const tableColumns = useMemo(() => createTableColumns(columns), [columns]);

    const table = useReactTable({
        data,
        columns: tableColumns,
        state: {
            expanded,
            rowSelection,
            sorting
        },
        onSortingChange: setSorting,
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        enableSorting,
        onRowSelectionChange: setRowSelection,
        enableRowSelection: enableSelection,
        getCoreRowModel: getCoreRowModel(),
        ...(isStructured && {
            onExpandedChange: setExpanded,
            getSubRows: (row: T) => (row as T & { subRows?: T[] }).subRows,
            getExpandedRowModel: getExpandedRowModel()
        })
    });

    useEffect(() => {
        if (isStructured && data.length > 0) {
            table.toggleAllRowsExpanded(true);
        }
    }, [data, isStructured, table]);

    const buildCellProps = useCallback(
        (cell: Cell<T, unknown>, isFirstColumn: boolean): CellBodyProps => {
            const iconStart = isFirstColumn ? extractIconFromCell(cell.getValue()) : undefined;
            const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
            const alignment = meta?.align ?? 'left';
            const adaptedRow = isStructured ? adaptRowForTableBodyCell(cell.row) : undefined;

            return {
                row: adaptedRow,
                cell: cell,
                isExpandableColumn: isStructured && isFirstColumn,
                iconStart,
                textAlign: alignment
            };
        },
        [isStructured]
    );

    // Default cell renderer - returns the COMPLETE cell with all structured view props
    const defaultCellRenderer = useCallback(
        (cell: Cell<T, unknown>, isFirstColumn: boolean) => {
            const cellProps = buildCellProps(cell, isFirstColumn);

            return (
                <TableBodyCell
                    key={cell.id}
                    row={cellProps.row as never}
                    cell={cellProps.cell as never}
                    isExpandableColumn={cellProps.isExpandableColumn}
                    iconStart={cellProps.iconStart}
                    textAlign={cellProps.textAlign}
                >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableBodyCell>
            );
        },
        [buildCellProps]
    );

    const renderCellForRow = useCallback(
        (cell: Cell<T, unknown>, index: number) => {
            const isFirstColumn = index === 0;
            return defaultCellRenderer(cell, isFirstColumn);
        },
        [defaultCellRenderer]
    );

    const renderRowContent = useCallback(
        (row: Row<T>) => {
            return (
                <>
                    {enableSelection && (
                        <TableBodyCell width="52px">
                            <Checkbox
                                checked={row.getIsSelected()}
                                onChange={row.getToggleSelectedHandler()}
                            />
                        </TableBodyCell>
                    )}

                    {row.getVisibleCells().map((cell, index) => renderCellForRow(cell, index))}

                    {actions && <TableBodyCell>{actions(row.original)}</TableBodyCell>}
                </>
            );
        },
        [enableSelection, actions, renderCellForRow]
    );

    const renderRowWithCustomization = useCallback(
        (row: Row<T>) => {
            const defaultRender = () => renderRowContent(row);

            if (renderRow) {
                return renderRow(row, defaultRender);
            }

            return <TableRow key={row.id}>{defaultRender()}</TableRow>;
        },
        [renderRow, renderRowContent]
    );

    if (!data || data.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <Table>
            <TableHead>
                {table.getHeaderGroups().map(headerGroup => (
                    <TableRow key={headerGroup.id}>
                        {/* Selection header */}
                        {enableSelection && (
                            <TableHeadCell width="52px">
                                <Checkbox
                                    checked={table.getIsAllRowsSelected()}
                                    indeterminate={table.getIsSomeRowsSelected()}
                                    onChange={table.getToggleAllRowsSelectedHandler()}
                                />
                            </TableHeadCell>
                        )}

                        {/* Column headers */}
                        {headerGroup.headers.map(header => {
                            const meta = header.column.columnDef.meta as CustomColumnMeta | undefined;
                            const isColumnSortable = enableSorting && (meta?.isSortable ?? false);
                            const alignment = meta?.align ?? 'left';
                            const sortDirection = header.column.getIsSorted();

                            return (
                                <TableHeadCell
                                    key={header.id}
                                    iconEnd={
                                        isColumnSortable ? (
                                            <SortIndicator
                                                isSorted={Boolean(sortDirection)}
                                                direction={
                                                    sortDirection === 'asc' ?
                                                        'ascending' :
                                                        sortDirection === 'desc' ?
                                                            'descending' :
                                                            undefined
                                                }
                                            />
                                        ) : undefined
                                    }
                                    style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
                                    textAlign={alignment}
                                    onClick={
                                        isColumnSortable ?
                                            header.column.getToggleSortingHandler() :
                                            undefined
                                    }
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHeadCell>
                            );
                        })}

                        {/* Actions header */}
                        {actions && <TableHeadCell>{actionsHeaderLabel}</TableHeadCell>}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {table.getRowModel().rows.map(row => renderRowWithCustomization(row))}
            </TableBody>
        </Table>
    );
};
