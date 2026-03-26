import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import {TableCell} from '../TableCell';
import './TableCellStatus.scss';
import type {TableCellStatusProps} from './TableCellStatus.types';

const TableCellStatusForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellStatusProps> = (
    {
        color,
        iconStart,
        text,
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
            {iconStart}
            <Typography
                isNowrap
                component="div"
                variant="caption"
                weight="semiBold"
                className="flexRow_nowrap alignCenter"
            >
                {text}
            </Typography>
        </div>
    </TableCell>
);

export const TableCellStatus = React.forwardRef(TableCellStatusForwardRef);
TableCellStatus.displayName = 'TableCellStatus';
