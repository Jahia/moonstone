import React from 'react';
import clsx from 'clsx';

import {TableRowProps} from './TableRow.types';
import './TableRow.scss';

export const TableRow: React.FC<TableRowProps> = ({
    className,
    hasMultipleLines = false,
    isSelected = false,
    isHighlighted = false,
    children,
    ...props
}) => (
    <tr
        className={
            clsx(
                'moonstone-TableRow',
                'alignCenter', // necessary for useFlexLayout react-table plugin
                hasMultipleLines && 'moonstone-TableRow-multipleLines',
                isSelected && 'moonstone-TableRow-selected',
                isHighlighted && 'moonstone-TableRow-highlighted',
                className
            )
        }
        {...props}
    >
        {children}
    </tr>
);

TableRow.displayName = 'TableRow';
