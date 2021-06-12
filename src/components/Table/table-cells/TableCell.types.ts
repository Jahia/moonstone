import React from 'react';
import {UseExpandedRowProps, Row, Cell} from 'react-table';

// Shared types used by both TableHeadCell and TableBodyCell
export type TableCellProps = {
    /**
     * Any additional class names to apply to the component
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
     * The index of the column which should display the tree-like view with
     * expandable and collapsible elements
     */
    expandableColumnIndex?: number;

    /**
     * Row object returned by react-table instance
     */
    row?: UseExpandedRowProps<Row>;

    /**
     * Cell object returned by react-table instace
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
};
