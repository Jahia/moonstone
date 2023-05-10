import React from 'react';

export type TableBodyProps = Omit<React.ComponentPropsWithoutRef<'tbody'>, 'children'| 'className'> & {
    /**
     * Additional classnames
     */
    className?: string;

    /**
     * The HTML tag used to render the root node
     */
    component?: string;

    /**
     * The children elements provided
     */
    children?: React.ReactNode;
};
