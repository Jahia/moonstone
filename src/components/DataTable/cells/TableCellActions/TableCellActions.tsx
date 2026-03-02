import React from 'react';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import './TableCellActions.scss';

export const TableCellActions: React.FC<TableCellActionsProps> = ({
    actions,
    actionsOnHover
}) => (
    <TableCell align="right" className="moonstone-tableCellActions">
        {actionsOnHover && (
            <div className="moonstone-tableCellActions_displayHover">{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

TableCellActions.displayName = 'TableCellActions';
