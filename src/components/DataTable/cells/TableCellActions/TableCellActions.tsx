import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import styles from './TableCellActions.module.scss';

export const TableCellActions: React.FC<TableCellActionsProps> = ({
    actions,
    actionsOnHover
}) => (
    <TableCell align="right" className={clsx('flexRow_reverse', 'alignCenter', 'moonstone-tableCellActions', styles.tableCellActions)}>
        {actionsOnHover && (
            <div className={clsx('flexRow_nowrap', 'alignCenter', 'moonstone-tableCellActions_displayHover', styles.tableCellActions_displayHover)}>{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

TableCellActions.displayName = 'TableCellActions';
