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
    component?: string;

    /**
     * The children elements
     */
    children: React.ReactNode;
} & ({
    /**
     * Whether the row is in the head or in the body of the table
     * @default 'body'
     */
    type?: 'head';
    /**
     * If true, then the row is highlighted with a different background color
     * @default false
     */
    isHighlighted?: never;
} | {
    /**
     * Whether the row is in the head or in the body of the table
     * @default 'body'
     */
    type?: 'body';
    /**
     * If true, then the row is highlighted with a different background color
     * @default false
     */
    isHighlighted?: boolean;
});
