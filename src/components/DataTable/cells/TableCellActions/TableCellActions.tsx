import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell/TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import style from './TableCellActions.module.scss';

const TableCellActionsForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellActionsProps> = (
    {
        actions,
        actionsOnHover,
        className,
        ...props
    },
    ref
) => (
    <TableCell ref={ref} className={clsx('flexRow_reverse', 'alignCenter', style.tableCellActions, className)} align="right" {...props}>
        {actionsOnHover && (
            <div className={clsx('flexRow_nowrap', 'alignCenter', style.displayHover)}>{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

export const TableCellActions = React.forwardRef(TableCellActionsForwardRef);
TableCellActions.displayName = 'TableCellActions';
