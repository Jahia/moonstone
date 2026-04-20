import {flexRender} from '@tanstack/react-table';
import clsx from 'clsx';
import React from 'react';
import {TableCell, TableHeadCell, TableStructuredCell} from '../cells';
import type {
    CustomColumnMeta,
    RenderCellProps,
    RenderHeadCellProps
} from './dataTableColumns.types';

export const renderHeadCell = <T extends NonNullable<unknown>>({
    headerGroup,
    enableSorting,
    isStructured,
    onClickTableHeadCell
}: RenderHeadCellProps<T>) => headerGroup.headers.map((header, index) => {
        const meta = header.column.columnDef.meta as CustomColumnMeta | undefined;
        const isColumnSortable = enableSorting && (meta?.isSortable ?? false);
        const columnSortDirection = header.column.getIsSorted();

        return (
            <TableHeadCell
            key={header.id}
            width={meta?.width}
            className={clsx({'moonstone-tableHeadCell_structured': isStructured && index === 0})}
            sorting={isColumnSortable ? {
                direction: columnSortDirection === 'desc' ? 'descending' : 'ascending',
                isActive: Boolean(columnSortDirection)
            } : undefined}
            style={{cursor: isColumnSortable ? 'pointer' : 'default'}}
            align={meta?.align ?? 'left'}
            onClick={(event: React.MouseEvent<HTMLTableCellElement>) => {
                if (isColumnSortable) {
                    header.column.getToggleSortingHandler()?.(event);
                }

                onClickTableHeadCell?.(header.id);
            }}
            >
                {flexRender(header.column.columnDef.header, header.getContext())}
            </TableHeadCell>
        );
    });

export const renderCell = <T extends NonNullable<unknown>>({
    row,
    isStructured
}: RenderCellProps<T>) => row.getVisibleCells().map((cell, index) => {
        const meta = cell.column.columnDef.meta as CustomColumnMeta | undefined;
        const cellContent = flexRender(cell.column.columnDef.cell, cell.getContext());

        if (isStructured && index === 0) {
            return (
                <TableStructuredCell
                key={cell.id}
                {...meta?.cellProps}
                align={meta?.align ?? 'left'}
                width={meta?.width}
                depth={row.depth}
                isExpandable={row.getCanExpand()}
                isExpanded={row.getIsExpanded()}
                isScrollable={meta?.isScrollable}
                onToggleExpand={row.getToggleExpandedHandler()}
                >
                    {cellContent}
                </TableStructuredCell>
            );
        }

        return (
            <TableCell
            key={cell.id}
            {...meta?.cellProps}
            align={meta?.align}
            width={meta?.width}
            isScrollable={meta?.isScrollable}
            >
                {cellContent}
            </TableCell>
        );
    });
