import clsx from 'clsx';
import React from 'react';

import { TableCell } from '../TableCell';
import { layout } from '~/globals/css-utils.js';

import type { TableCellActionsProps } from './TableCellActions.types';

import style from './TableCellActions.module.scss';

const TableCellActionsForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellActionsProps> = (
    {
        actions,
        actionsOnHover,
        className,
        ...props
    },
    ref,
) => (
    <TableCell align="right" className={clsx(layout.flexRow_reverse, layout.alignCenter, style.tableCellActions, className)} ref={ref} {...props}>
        {actionsOnHover && (
            <div className={clsx(layout.flexRow_nowrap, layout.alignCenter, style.displayHover)}>{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

export const TableCellActions = React.forwardRef(TableCellActionsForwardRef);
TableCellActions.displayName = 'TableCellActions';
