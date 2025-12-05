import React from 'react';
import clsx from 'clsx';

import type {TableCellProps} from './TableCell.types';
import {renderCellContent} from '../utils/tableCellUtils';
import {capitalize} from '~/utils/helpers';
import './TableCell.scss';

/**
 * Base table cell component.
 *
 * Usage 1: Custom cells (TableCellNumber, TableCellDate, TableCellChips)
 *          pass pre-formatted content as children → renders children directly.
 *
 * Usage 2: Direct usage with value prop → calls renderCellContent() to format.
 */
const TableCellForwardRef: React.ForwardRefRenderFunction<HTMLTableCellElement, TableCellProps> = (
    {className, children, value, textAlign, ...props},
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
            {/* If children provided, use it; otherwise format value via utility */}
            {children ?? renderCellContent(value)}
        </td>
    );
};

export const TableCell = React.forwardRef(TableCellForwardRef);

TableCell.displayName = 'TableCell';
