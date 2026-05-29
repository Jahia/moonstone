import React from 'react';
import clsx from 'clsx';
import {TableCell} from '../TableCell';
import type {TableCellStatusProps} from './TableCellStatus.types';
import {layout} from '~/globals/css-utils.js';
import {tableCellStatusStyles as styles} from '../../styles';

const TableCellStatusForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellStatusProps> = (
    {
        color,
        children,
        className,
        ...props
    },
    ref
) => (
    <TableCell
        ref={ref}
        className={clsx(
            styles.tableCellStatus,
            styles[color],
            className
        )}
        component="td"
        width="8px"
        {...props}
    >
        <div className={clsx(layout.flexRow_nowrap, layout.alignCenter, styles.panel)}>
            {children}
        </div>
    </TableCell>
);

export const TableCellStatus = React.forwardRef(TableCellStatusForwardRef);
TableCellStatus.displayName = 'TableCellStatus';
