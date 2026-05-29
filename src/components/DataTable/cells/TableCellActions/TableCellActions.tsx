import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell';
import type {TableCellActionsProps} from './TableCellActions.types';
import {layout} from '~/globals/css-utils.js';
import {tableCellActionsStyles as styles} from '../../styles';

const TableCellActionsForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellActionsProps> = (
    {
        actions,
        actionsOnHover,
        className,
        ...props
    },
    ref
) => (
    <TableCell ref={ref} className={clsx(layout.flexRow_reverse, layout.alignCenter, styles.tableCellActions, className)} align="right" {...props}>
        {actionsOnHover && (
            <div className={clsx(layout.flexRow_nowrap, layout.alignCenter, styles.displayHover)}>{actionsOnHover}</div>
        )}
        {actions ?? ''}
    </TableCell>
);

export const TableCellActions = React.forwardRef(TableCellActionsForwardRef);
TableCellActions.displayName = 'TableCellActions';
