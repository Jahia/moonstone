import React from 'react';

export type TableRowProps = {
    /**
     * Additional classnames
     */
    className?: string;

    /**
     * The HTML tag used to render the root node
     */
    component?: string;

    /**
     * Whether the cell height should be increased to show more than 1 line
     */
    hasMultipleLines?: boolean;

    /**
     * Whether the row should be selected
     */
    isSelected?: boolean;

    /**
     * If true, then the row is highlighted. The background color of the row
     * will be in contrast to the normal row color and supported components
     * nested within the row will have their style change correspondingly
     */
    isHighlighted?: boolean;

    /**
     * The children elements
     */
    children?: React.ReactNode;
};
