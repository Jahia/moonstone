import React from 'react';

/**
 * Props for TableCell - a composable cell wrapper component.
 */
export type TableCellProps = Omit<React.ComponentPropsWithRef<'td' | 'th'>, 'children' | 'className' | 'width'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Name of the cell HTML element to render in the DOM
     * @default 'td'
     */
    component?: 'td' | 'th';

    /**
     * How to align content horizontally within the table cell
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right';

    /**
     * Width of the cell, such as `'120px'`. Without it, the column takes all the space available.
     */
    width?: string;

    /**
     * Any styles to render inline
     */
    style?: React.CSSProperties;

    /**
     * Children elements
     * @default '-'
     */
    children?: React.ReactNode;

    /**
     * Whether the cell content is scrollable on hover
     * @default false
     */
    isScrollable?: boolean;

    /**
     * Keeps the cell visible while the DataTable scrolls horizontally: on the right edge for a cell
     * passed to `after`, on the left edge for a cell passed to `before` and for the selection cell
     * (through `selectionCellProps`)
     * @default false
     */
    isSticky?: boolean;
};
