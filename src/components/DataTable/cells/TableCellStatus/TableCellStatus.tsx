import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell/TableCell';
import style from './TableCellStatus.module.scss';
import type {TableCellStatusProps} from './TableCellStatus.types';

const TableCellStatusForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellStatusProps> = (
    {
        color,
        children,
        className,
        ...props
    },
    ref
) => (
    <TableCell
        ref={ref}
        className={clsx(
            style.tableCellStatus,
            style[color],
            className
        )}
        component="td"
        width="8px"
        {...props}
    >
        <div className={clsx('flexRow_nowrap', 'alignCenter', style.panel)}>
            {children}
        </div>
    </TableCell>
);

export const TableCellStatus = React.forwardRef(TableCellStatusForwardRef);
TableCellStatus.displayName = 'TableCellStatus';
