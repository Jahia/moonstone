import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import './TableCellActions.scss';

export const TableCellActions: React.FC<TableCellActionsProps> = ({
    actions,
    actionsOnHover,
    className,
    ...props
}) => (
    <TableCell align="right" className={clsx('moonstone-tableCellActions', className)} {...props}>
        {actionsOnHover && (
            <div className={clsx('flexRow_nowrap', 'alignCenter', 'moonstone-tableCellActions_displayHover')}>{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

TableCellActions.displayName = 'TableCellActions';
