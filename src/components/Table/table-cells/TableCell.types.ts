import React from 'react';
import {UseExpandedRowProps, Row, Cell} from 'react-table';

// Shared types used by both TableHeadCell and TableBodyCell
export type TableCellProps = {
    /**
     * Additional classnames
     */
    className?: string;

    /**
     * The HTML tag used to render the root node
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
     * Row object returned by react-table instance
     */
    row?: UseExpandedRowProps<Row>;

    /**
     * Cell object returned by react-table instance
     */
    cell?: Cell;

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
