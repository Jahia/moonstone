import React from 'react';

export type TableBodyProps = Omit<React.ComponentPropsWithoutRef<'tbody'>, 'children'| 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Name of HTML element to render in the DOM for this component
     */
    component?: string;

    /**
     * The children elements provided
     */
    children: React.ReactNode;
};
