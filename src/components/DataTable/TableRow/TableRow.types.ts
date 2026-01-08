import React from 'react';

export type TableRowProps = Omit<React.ComponentPropsWithoutRef<'tr'>, 'children'| 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Name of HTML element to render in the DOM for this component
     */
    component?: 'string;'

    /**
     * If true, then the row is selected
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
