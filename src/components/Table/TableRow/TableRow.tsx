import React from 'react';
import clsx from 'clsx';

import type {TableRowProps} from './TableRow.types';
import styles from './TableRow.module.scss';
import {layout} from '~/globals/css-utils.js';

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
            ['flexRow', layout.flexRow],
            ['moonstone-TableRow', styles['moonstone-TableRow']],
            ['alignCenter', layout.alignCenter],
            hasMultipleLines && ['moonstone-TableRow-multipleLines', styles['moonstone-TableRow-multipleLines']],
            isSelected && 'moonstone-TableRow-selected',
            isHighlighted && ['moonstone-TableRow-highlighted', styles['moonstone-TableRow-highlighted']],
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
