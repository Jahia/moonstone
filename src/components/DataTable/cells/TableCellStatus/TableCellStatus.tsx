import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {TableCell} from '../TableCell';
import './TableCellStatus.scss';
import type {TableCellStatusProps} from './TableCellStatus.types';

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
            'moonstone-tableCellStatus',
            `moonstone-tableCellStatus_${color}`,
            className
        )}
        width="8px"
        {...props}
    >
        <div className="flexRow_nowrap alignCenter moonstone-tableCellStatus_panel">
            {children}
        </div>
    </TableCell>
);

export const TableCellStatus = React.forwardRef(TableCellStatusForwardRef);
TableCellStatus.displayName = 'TableCellStatus';
