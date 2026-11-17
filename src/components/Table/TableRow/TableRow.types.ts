import React from 'react';

export type TableRowProps = Omit<React.ComponentPropsWithoutRef<'tr'>, 'children' | 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Name of HTML element to render in the DOM for this component
     * @default 'tr'
     */
    component?: 'string;';

    /**
     * Whether the cell height should be increased to show more than 1 line
     * @default false
     */
    hasMultipleLines?: boolean;

    /**
     * If true, then the row is selected
     * @default false
     */
    isSelected?: boolean;

    /**
     * If true, then the row is highlighted. The background color of the row
     * will be in contrast to the normal row color and supported components
     * nested within the row will have their style change correspondingly
     * @default false
     */
    isHighlighted?: boolean;

    /**
     * The children elements
     */
    children?: React.ReactNode;
};
