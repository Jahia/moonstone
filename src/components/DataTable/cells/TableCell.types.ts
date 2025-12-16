import React from 'react';
import type {Row} from '@tanstack/react-table';

/**
 * Shared types used by both TableHeadCell and TableBodyCell.
 */
export type TableCellProps<TData = unknown> = Omit<React.ComponentPropsWithRef<'td' | 'th'>, 'children'| 'className' | 'width'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Name of the cell HTML element to render in the DOM
     */
    component?: 'td' | 'th';

    /**
     * Icon to render at the start/left side of the cell
     */
    iconStart?: React.ReactElement;

    /**
     * Icon to render at the end/right side of the cell
     */
    iconEnd?: React.ReactElement;

    /**
     * How to align content horizontally within the table cell
     */
    textAlign?: 'left' | 'center' | 'right';

    /**
     * How to align content vertically within the table cell
     */
    verticalAlign?: 'top' | 'middle' | 'bottom';

    /**
     * Define the width of the cell, if no width is set the column takes all space available. (e.g. '120px')
     */
    width?: string;

    /**
     * If true, it indicates that the rows in this column have nested sub-rows and
     * that they should be displayed in a tree-like view
     */
    isExpandableColumn?: boolean;

    /**
     * Row object returned by TanStack Table instance.
     * TanStack Table (v8) Row includes all expansion methods built-in
     * (getCanExpand, getIsExpanded, getToggleExpandedHandler, depth).
     */
    row?: Row<TData>;

    /**
     * Any styles to render inline
     */
    style?: React.CSSProperties;

    /**
     * Children elements
     */
    children?: React.ReactNode;

    /**
     * Indicates if the cell is scrollable on hover
     */
    isScrollable?: boolean;

};
