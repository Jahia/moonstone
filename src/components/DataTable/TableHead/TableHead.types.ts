import React from 'react';

export type TableHeadProps = Omit<React.ComponentPropsWithoutRef<'thead'>, 'children'| 'className'> & {
    /**
     * Determines whether the table header row should stay sticky while the
     * table content is being scrolled through
     */
    isSticky?: boolean;

    /**
     * Name of HTML element to render in the DOM for this component
     */
    component?: string;

    /**
     * Any additional class names to apply to the component
     */
    className?: string;

    /**
     * The children elements provided
     */
    children: React.ReactNode;
};
