import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import React from 'react';

import { TableCell, TableHeadCell, TableStructuredCell } from '../cells';
import { getStickyStyle } from '../hooks/useStickyCells';

import type {
    ColumnLayout,
    CustomColumnMeta,
    RenderCellProps,
    RenderHeadCellProps,
} from './renderCells.types';
import type { Column } from '@tanstack/react-table';

import styles from '../DataTable.module.scss';

const getColumnLayoutProps = <T extends NonNullable<unknown>>(column: Column<T>, columnLayout?: ColumnLayout) => {
    if (!columnLayout) {
        return {};
    }

    const meta = column.columnDef.meta as CustomColumnMeta<T> | undefined;
    const isSticky = column.getIsPinned() === 'left';
    const rank = columnLayout.stickyStartBase + column.getPinnedIndex();

    return {
        isSticky,
        className: clsx(meta?.minWidth && styles.columnCell, isSticky && rank === columnLayout.stickyStartCount - 1 && styles.stickyEdgeStart),
        style: {
            minWidth: meta?.minWidth,
            ...(isSticky && getStickyStyle('start', rank)),
        },
    };
};

export const renderHeadCell = <T extends NonNullable<unknown>>({
    headerGroup,
    columnLayout,
    enableSorting,
    isStructured,
    onClickTableHeadCell,
}: RenderHeadCellProps<T>) => headerGroup.headers.map((header) => {
    const meta = header.column.columnDef.meta as CustomColumnMeta<T> | undefined;
    const isColumnSortable = enableSorting && (meta?.isSortable ?? false);
    const columnSortDirection = header.column.getIsSorted();
    const layoutProps = getColumnLayoutProps(header.column, columnLayout);
    // The first column of the configuration, wherever a sticky column moved it
    const isStructuredColumn = isStructured && header.column.id === header.getContext().table.getAllLeafColumns()[0]?.id;

    return (
        <TableHeadCell
            isSticky={layoutProps.isSticky}
            align={meta?.align ?? 'left'}
            className={clsx({ 'moonstone-tableHeadCell_structured': isStructuredColumn }, layoutProps.className)}
            key={header.id}
            sorting={isColumnSortable
                ? {
                        direction: columnSortDirection === 'desc' ? 'descending' : 'ascending',
                        isActive: Boolean(columnSortDirection),
                    }
                : undefined}
            style={{
                cursor: isColumnSortable ? 'pointer' : 'default',
                ...layoutProps.style,
            }}
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
    columnLayout,
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

    const structuredColumnId = row.getAllCells()[0]?.column.id;

    return row.getVisibleCells().map((cell) => {
        const meta = cell.column.columnDef.meta as CustomColumnMeta<T> | undefined;
        const cellContent = flexRender(cell.column.columnDef.cell, cell.getContext());
        const cellProps = typeof meta?.cellProps === 'function'
            ? meta.cellProps(rowContext)
            : meta?.cellProps;
        const layoutProps = getColumnLayoutProps(cell.column, columnLayout);
        const layoutCellProps = columnLayout && {
            isSticky: layoutProps.isSticky,
            className: clsx(cellProps?.className as string | undefined, layoutProps.className),
            style: {
                ...(cellProps?.style as React.CSSProperties | undefined),
                ...layoutProps.style,
            },
        };

        if (isStructured && cell.column.id === structuredColumnId) {
            return (
                <TableStructuredCell
                    key={cell.id}
                    {...cellProps}
                    {...layoutCellProps}
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
                {...layoutCellProps}
                isScrollable={meta?.isScrollable}
                align={meta?.align}
                width={meta?.width}
            >
                {cellContent}
            </TableCell>
        );
    });
};
