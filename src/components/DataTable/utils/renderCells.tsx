import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import React from 'react';

import { TableCell, TableHeadCell, TableStructuredCell } from '../cells';

import type {
    CustomColumnMeta,
    RenderCellProps,
    RenderHeadCellProps,
} from './renderCells.types';

export const renderHeadCell = <T extends NonNullable<unknown>>({
    headerGroup,
    enableSorting,
    isStructured,
    onClickTableHeadCell,
}: RenderHeadCellProps<T>) => headerGroup.headers.map((header, index) => {
    const meta = header.column.columnDef.meta as CustomColumnMeta<T> | undefined;
    const isColumnSortable = enableSorting && (meta?.isSortable ?? false);
    const columnSortDirection = header.column.getIsSorted();

    return (
        <TableHeadCell
            align={meta?.align ?? 'left'}
            className={clsx({ 'moonstone-tableHeadCell_structured': isStructured && index === 0 })}
            key={header.id}
            sorting={isColumnSortable
                ? {
                        direction: columnSortDirection === 'desc' ? 'descending' : 'ascending',
                        isActive: Boolean(columnSortDirection),
                    }
                : undefined}
            style={{ cursor: isColumnSortable ? 'pointer' : 'default' }}
            width={meta?.width}
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
    isStructured,
}: RenderCellProps<T>) => {
    const rowContext = {
        id: row.id,
        data: row.original,
        meta: {
            index: row.index,
            isSelected: row.getIsSelected(),
            isExpanded: row.getIsExpanded(),
        },
    };

    return row.getVisibleCells().map((cell, index) => {
        const meta = cell.column.columnDef.meta as CustomColumnMeta<T> | undefined;
        const cellContent = flexRender(cell.column.columnDef.cell, cell.getContext());
        const cellProps = typeof meta?.cellProps === 'function'
            ? meta.cellProps(rowContext)
            : meta?.cellProps;

        if (isStructured && index === 0) {
            return (
                <TableStructuredCell
                    key={cell.id}
                    {...cellProps}
                    isExpandable={row.getCanExpand()}
                    isExpanded={rowContext.meta.isExpanded}
                    isScrollable={meta?.isScrollable}
                    align={meta?.align ?? 'left'}
                    depth={row.depth}
                    width={meta?.width}
                    onToggleExpand={row.getToggleExpandedHandler()}
                >
                    {cellContent}
                </TableStructuredCell>
            );
        }

        return (
            <TableCell
                key={cell.id}
                {...cellProps}
                isScrollable={meta?.isScrollable}
                align={meta?.align}
                width={meta?.width}
            >
                {cellContent}
            </TableCell>
        );
    });
};
