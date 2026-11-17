import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import React from 'react';

import { TableCell, TableHeadCell, TableStructuredCell } from '../cells';
import { getStickyStyle, mergeCellProps } from '../hooks/useStickyCells';

import type {
    CustomColumnMeta,
    RenderCellProps,
    RenderHeadCellProps,
} from './renderCells.types';
import type { Column } from '@tanstack/react-table';

import styles from '../DataTable.module.scss';

const getColumnLayoutProps = <T extends NonNullable<unknown>>(column: Column<T>, stickyStartBase?: number) => {
    if (stickyStartBase === undefined) {
        return {};
    }

    if (column.getIsPinned() !== 'left') {
        return { className: styles.columnCell };
    }

    return {
        'isSticky': true,
        'data-sticky': 'start',
        'className': clsx(styles.columnCell, column.getIsLastColumn('left') && styles.stickyEdgeStart),
        'style': getStickyStyle('start', stickyStartBase + column.getPinnedIndex()),
    };
};

export const renderHeadCell = <T extends NonNullable<unknown>>({
    headerGroup,
    stickyStartBase,
    enableSorting,
    isStructured,
    onClickTableHeadCell,
}: RenderHeadCellProps<T>) => headerGroup.headers.map((header) => {
    const meta = header.column.columnDef.meta as CustomColumnMeta<T> | undefined;
    const isColumnSortable = enableSorting && (meta?.isSortable ?? false);
    const columnSortDirection = header.column.getIsSorted();
    // The first column of the configuration, wherever a sticky column moved it
    const isStructuredColumn = isStructured && header.column.getIsFirstColumn();

    return (
        <TableHeadCell
            {...mergeCellProps({
                className: clsx({ 'moonstone-tableHeadCell_structured': isStructuredColumn }),
                style: { cursor: isColumnSortable ? 'pointer' : 'default' },
            }, getColumnLayoutProps(header.column, stickyStartBase))}
            align={meta?.align ?? 'left'}
            key={header.id}
            sorting={isColumnSortable
                ? {
                        direction: columnSortDirection === 'desc' ? 'descending' : 'ascending',
                        isActive: Boolean(columnSortDirection),
                    }
                : undefined}
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
    stickyStartBase,
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

    return row.getVisibleCells().map((cell) => {
        const meta = cell.column.columnDef.meta as CustomColumnMeta<T> | undefined;
        const cellContent = flexRender(cell.column.columnDef.cell, cell.getContext());
        const ownCellProps = typeof meta?.cellProps === 'function'
            ? meta.cellProps(rowContext)
            : meta?.cellProps;
        const cellProps = stickyStartBase === undefined ? ownCellProps : mergeCellProps(ownCellProps, getColumnLayoutProps(cell.column, stickyStartBase));

        // The first column of the configuration, wherever a sticky column moved it
        if (isStructured && cell.column.getIsFirstColumn()) {
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
