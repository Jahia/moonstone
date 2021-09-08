import React from 'react';
import clsx from 'clsx';

import {TableRowProps} from './TableRow.types';
import './TableRow.scss';

export const TableRow: React.FC<TableRowProps> = ({
    className,
    component = 'tr',
    hasMultipleLines = false,
    isSelected = false,
    isHighlighted = false,
    children,
    ...props
}) => React.createElement(
    component,
    {
        className: clsx(
            'flexRow',
            'moonstone-TableRow',
            'alignCenter',
            hasMultipleLines && 'moonstone-TableRow-multipleLines',
            isSelected && 'moonstone-TableRow-selected',
            isHighlighted && 'moonstone-TableRow-highlighted',
            className
        ),
        ...props
    },
    children
);

TableRow.displayName = 'TableRow';
