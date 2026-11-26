import clsx from 'clsx';
import React, { useContext, useEffect } from 'react';

import { TableRowContext } from '../../TableRow/TableRow.context';
import { TableCell } from '../TableCell';
import { layout } from '~/globals/css-utils.js';

import type { TableCellStatusProps } from './TableCellStatus.types';

import style from './TableCellStatus.module.scss';

const TableCellStatusForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellStatusProps> = (
    {
        color,
        children,
        className,
        ...props
    },
    ref,
) => {
    const row = useContext(TableRowContext);
    const registerStatus = row?.registerStatus;

    useEffect(() => registerStatus?.(), [registerStatus]);

    return (
        <TableCell
            className={clsx(
                style.tableCellStatus,
                style[color],
                row?.isStatusDismissed && style.dismissed,
                className,
            )}
            component="td"
            ref={ref}
            width="8px"
            {...props}
        >
            <div className={clsx(layout.flexRow_nowrap, layout.alignCenter, style.panel)}>
                {children}
            </div>
        </TableCell>
    );
};

export const TableCellStatus = React.forwardRef(TableCellStatusForwardRef);
TableCellStatus.displayName = 'TableCellStatus';
