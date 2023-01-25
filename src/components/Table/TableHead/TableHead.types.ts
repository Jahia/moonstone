import React from 'react';

export type TableHeadProps = {
    /**
     * Determines whether the table header row should stay sticky while the
     * table content is being scrolled through
     */
    isSticky?: boolean;

    /**
     * The HTML tag used to render the root node
     */
    component?: string;

    /**
     * Additional classnamess
     */
    className?: string;

    /**
     * The children elements provided
     */
    children?: React.ReactNode;
};
