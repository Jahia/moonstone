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

    // Structured view props (for tree-like data)

    /**
     * Depth level for structured/tree view (0-indexed)
     */
    depth?: number;

    /**
     * Whether this row can be expanded (has children)
     */
    isExpandable?: boolean;

    /**
     * Whether this row is currently expanded
     */
    isExpanded?: boolean;

    /**
     * Callback to toggle expand/collapse state
     */
    onToggleExpand?: () => void;
};
