import React from 'react';

export type TableHeadProps = {
    /**
     * Determines whether the table header row should stay sticky while the
     * table content is being scrolled through
     */
    sticky?: boolean;

    /**
     * Any additional class names to apply to the component
     */
    className?: string;

    /**
     * The children elements provided
     */
    children?: React.ReactNode;
};
