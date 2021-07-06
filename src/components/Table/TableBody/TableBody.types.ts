import React from 'react';

export type TableBodyProps = {
    /**
     * Class names to be applied to the component
     */
    className?: string;

    /**
     * Name of HTML element to render in the DOM for this component
     */
    component?: string;

    /**
     * The children elements provided
     */
    children?: React.ReactNode;
};
