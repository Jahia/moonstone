import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import './TableCellActions.scss';

const TableCellActionsForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellActionsProps> = (
    {
        actions,
        actionsOnHover
    },
    ref
) => (
    <TableCell ref={ref} align="right" className={clsx('flexRow_reverse', 'alignCenter', 'moonstone-tableCellActions')}>
        {actionsOnHover && (
            <div className={clsx('flexRow_nowrap', 'alignCenter', 'moonstone-tableCellActions_displayHover')}>{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

export const TableCellActions = React.forwardRef(TableCellActionsForwardRef);
TableCellActions.displayName = 'TableCellActions';
