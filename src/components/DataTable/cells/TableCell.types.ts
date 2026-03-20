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
     * Whether the cell content is wrapped in a scrollable/truncatable container.
     * @default false
     */
    isScrollable?: boolean;
};
