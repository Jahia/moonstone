import React from 'react';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';

export const TableCellActions: React.FC<TableCellActionsProps> = ({
    displayMode = 'hover',
    children
}) => (
    <TableCell
        align="right"
        className={
            displayMode === 'hover' ?
                'moonstone-tableCell_actions moonstone-tableCell_actions--hover' :
                'moonstone-tableCell_actions'
        }
    >
        {children ?? ''}
    </TableCell>
);

TableCellActions.displayName = 'TableCellActions';
