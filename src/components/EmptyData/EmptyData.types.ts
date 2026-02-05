import React from 'react';

export type EmptyDataProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * HTML tag or component to render (default: 'div')
     */
    component?: React.ElementType;
    /**
     * Title of the empty state
     */
    title?: string;
    /**
     * Message to display
     */
    message: string;
    /**
     * Icon to display
     */
    icon?: React.ReactNode;
    /**
     * Additional classname
     */
    className?: string;
};
