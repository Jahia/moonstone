import React from 'react';

export type TableRowProps = {
    /**
     * Any additional class names to apply
     */
    className?: React.ReactNode;

    /**
     * Whether the cell height should be increased to show more than 1 line
     */
    isMultipleLines?: boolean;

    /**
     * If true, then the row is selected
     */
    isSelected?: boolean;

    /**
     * The children elements
     */
    children?: React.ReactNode;
};
