import React from 'react';
import clsx from 'clsx';

import type {TableRowProps} from './TableRow.types';
import './TableRow.scss';

const TableRowForwardRef: React.ForwardRefRenderFunction<HTMLElement, TableRowProps> = (
    {
        className,
        component = 'tr',
        hasMultipleLines = false,
        isSelected = false,
        isHighlighted = false,
        children,
        ...props
    }, ref) => React.createElement(
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
        tabIndex: 0,
        ...props,
        ref
    },
    children
);

export const TableRow = React.forwardRef(TableRowForwardRef);

TableRow.displayName = 'TableRow';
