import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import styles from './TableCellActions.module.scss';
import {layout} from '~/globals/css-utils.js';

export const TableCellActions: React.FC<TableCellActionsProps> = ({
    actions,
    actionsOnHover
}) => (
    <TableCell
        align="right"
        className={clsx(layout.flexRow_reverse, layout.alignCenter, styles['moonstone-tableCellActions'])}
    >
        {actionsOnHover && (
            <div className={clsx(layout.flexRow_nowrap, layout.alignCenter, styles['moonstone-tableCellActions_displayHover'])}>
                {actionsOnHover}
            </div>
        )}
        {actions ?? ''}
    </TableCell>
);

TableCellActions.displayName = 'TableCellActions';
