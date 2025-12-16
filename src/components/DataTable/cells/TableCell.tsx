import React from 'react';
import clsx from 'clsx';

import type {TableCellProps} from './TableCell.types';
import {capitalize} from '~/utils/helpers';
import './TableCell.scss';

/**
 * Base table cell component.
 *
 * Usage 1: Direct usage with children prop → renders children directly.
 */
const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {className, children, textAlign, ...props},
    ref
) => {
    return (
        <td
            ref={ref}
            className={clsx(
                'moonstone-TableCell',
                'textAlign' + capitalize(textAlign),
                className
            )}
            {...props}
        >
            {/* If children provided, use it; otherwise show "-" */}
            {children ?? '-'}
        </td>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
