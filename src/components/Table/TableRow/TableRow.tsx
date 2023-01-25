import React from 'react';
import clsx from 'clsx';

import {TableRowProps} from './TableRow.types';
import './TableRow.scss';

export const TableRow = React.forwardRef((
    {
        className,
        component = 'tr',
        hasMultipleLines = false,
        isSelected = false,
        isHighlighted = false,
        children,
        ...props
    }: TableRowProps,
    ref: React.Ref<HTMLElement>
) => React.createElement(
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
        ...props,
        ref
    },
    children
));

TableRow.displayName = 'TableRow';
