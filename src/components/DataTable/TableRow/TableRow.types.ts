import React from 'react';

export type TableRowProps = Omit<React.ComponentPropsWithoutRef<'tr'>, 'children'| 'className'> & {
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Name of HTML element to render in the DOM for this component
     */
    component?: string;

    /**
     * The children elements
     */
    children: React.ReactNode;
} & ({
    type?: 'head';
    /**
     * If true, then the row is highlighted with a different background color
     * @default false
     */
    isHighlighted?: never;
} | {
    type?: 'body';
    /**
     * If true, then the row is highlighted with a different background color
     * @default false
     */
    isHighlighted?: boolean;
});
