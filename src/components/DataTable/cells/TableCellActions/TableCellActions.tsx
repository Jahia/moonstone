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
            <span className="moonstone-tableCellActions_hover">{actionsOnHover}</span>
        )}
        {actions}
        {!(actions || actionsOnHover) && ''}
    </TableCell>
);

TableCellActions.displayName = 'TableCellActions';
