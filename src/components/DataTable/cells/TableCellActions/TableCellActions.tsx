import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import style from './TableCellActions.module.scss';
import {layout} from '~/globals/css-utils.js';

const TableCellActionsForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellActionsProps> = (
    {
        actions,
        actionsOnHover,
        className,
        ...props
    },
    ref
) => (
    <TableCell ref={ref} className={clsx(layout.flexRow_reverse, layout.alignCenter, style.tableCellActions, className)} align="right" {...props}>
        {actionsOnHover && (
            <div className={clsx(layout.flexRow_nowrap, layout.alignCenter, style.displayHover)}>{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

export const TableCellActions = React.forwardRef(TableCellActionsForwardRef);
TableCellActions.displayName = 'TableCellActions';
