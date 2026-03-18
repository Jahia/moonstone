import React from 'react';
import clsx from 'clsx';

import type {TableRowProps} from './TableRow.types';
import styles from './TableRow.module.scss';

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
            styles.TableRow,
            'alignCenter',
            hasMultipleLines && 'moonstone-TableRow-multipleLines',
            hasMultipleLines && styles.TableRow_multipleLines,
            isSelected && 'moonstone-TableRow-selected',
            isHighlighted && 'moonstone-TableRow-highlighted',
            isHighlighted && styles.TableRow_highlighted,
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
