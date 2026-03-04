import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import './TableCellActions.scss';

export const TableCellActions: React.FC<TableCellActionsProps> = ({
    actions,
    actionsOnHover
}) => (
    <TableCell align="right" className={clsx('flexRow_reverse', 'alignCenter', 'moonstone-tableCellActions')}>
        {actionsOnHover && (
            <div className={clsx('flexRow_nowrap', 'alignCenter', 'moonstone-tableCellActions_displayHover')}>{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

TableCellActions.displayName = 'TableCellActions';
