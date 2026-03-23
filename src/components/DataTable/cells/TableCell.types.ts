import React from 'react';

/**
 * Props for TableCell - a composable cell wrapper component.
 */
export type TableCellProps = Omit<React.ComponentPropsWithRef<'td' | 'th'>, 'children'| 'className' | 'width'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Name of the cell HTML element to render in the DOM
     */
    component?: 'td' | 'th';

    /**
     * How to align content horizontally within the table cell
     */
    align?: 'left' | 'center' | 'right';

    /**
     * How to align content vertically within the table cell
     */
    verticalAlign?: 'top' | 'middle' | 'bottom';

    /**
     * Define the width of the cell, if no width is set the column takes all space available. (e.g. '120px')
     */
    width?: string;

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

    /**
     * Enable column resize handle on this cell
     */
    enableResize?: boolean;

    /**
     * Resize handler for mousedown — starts the column resize interaction
     */
    resizeHandler?: (e: React.MouseEvent) => void;

    /**
     * Whether this column is currently being resized
     */
    isResizing?: boolean;

    /**
     * HTML attributes to spread onto the resize handle element.
     * Use for data-testid, aria-label, or other custom attributes.
     */
    resizeHandleAttr?: React.HTMLAttributes<HTMLDivElement>;
};

