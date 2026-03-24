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
     * Handler to initiate column resizing when dragging the resize handle (mouse or touch).
     * When provided, a resize handle is rendered at the right edge of the cell.
     */
    resizeHandler?: (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;

    /**
     * Whether this column is currently being resized (applies active styling to the handle)
     */
    isResizing?: boolean;

    /**
     * Additional HTML attributes to pass to the resize handle element.
     * Useful for testing selectors, accessibility attributes, or custom data attributes.
     */
    resizeHandleAttr?: React.HTMLAttributes<HTMLDivElement>;
};

