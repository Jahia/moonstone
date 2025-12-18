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
    Row
} from '@tanstack/react-table';
import {useState, useEffect, useMemo, useCallback} from 'react';

import type {DataTableProps} from './DataTable.types';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    Checkbox
} from '~/index';
import {TableCell} from './cells/TableCell';
import {TableHeadCell} from './table-cells/TableHeadCell';
import {createTableColumns} from './utils/tableHelpers';

type CustomColumnMeta = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
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
    renderRow,
    onClickTableHeadCell
}: DataTableProps<T>) => {
    // Internal sorting state - fully managed by TanStack
    const initialSorting = useMemo<SortingState>(() => {
        if (defaultSortBy) {
            return [
                {
                    id: defaultSortBy,
                    desc: defaultSortDirection === 'descending'
                }
            ];
        }

        return [];
    }, [defaultSortBy, defaultSortDirection]);

    const [sorting, setSorting] = useState<SortingState>(initialSorting);
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [rowSelection, setRowSelection] = useState<RowSelectionState>(() =>
        defaultSelection?.reduce((acc, key) => ({...acc, [key]: true}), {}) ?? {}
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
        enableSortingRemoval: false, // Only toggle between asc/desc, no unsorted state
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

    // Render row cells - cell content rendering is delegated to columns configuration (via render prop)
    // DataTable handles the cell wrapper (TableBodyCell) with structured view props for expand/collapse
    const renderRowContent = useCallback(
        (row: Row<T>) => (
            <>
                {/* Selection checkbox cell */}
                {enableSelection && (
                    <TableCell width="52px">
                        <Checkbox
                            checked={row.getIsSelected()}
                            onChange={row.getToggleSelectedHandler()}
                        />
                    </TableCell>
                )}

                {/* Data cells - content comes from column.cell defined in createTableColumns */}
                {row.getVisibleCells().map((cell, index) => {
                    const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
                    const isFirstColumn = index === 0;

                    // Build structured view props for tree view support
                    const structuredProps = isStructured && isFirstColumn ? {
                        row,
                        isExpandableColumn: true
                    } : {};

                    return (
                        <TableCell
                            key={cell.id}
                            textAlign={meta?.align ?? 'left'}
                            {...structuredProps}
                        >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    );
                })}

                {/* Actions cell */}
                {actions && <TableCell>{actions(row.original)}</TableCell>}
            </>
        ),
        [enableSelection, actions, isStructured]
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
                                    sorting={isColumnSortable ? {
                                        direction: sortDirection === 'desc' ? 'descending' : 'ascending',
                                        isActive: Boolean(sortDirection)
                                    } : undefined}
                                    style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
                                    textAlign={alignment}
                                    onClick={e => {
                                        if (isColumnSortable) {
                                            header.column.getToggleSortingHandler()?.(e);
                                        }

                                        onClickTableHeadCell?.(header.id);
                                    }}
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
