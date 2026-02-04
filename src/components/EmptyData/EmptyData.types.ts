import React from 'react';

export type EmptyDataProps = {
    /**
     * Title of the empty state
     */
    title?: string;
    /**
     * Message to display
     */
    message?: string;
    /**
     * Icon to display
     */
    icon?: React.ReactNode;
    /**
     * Additional classname
     */
    className?: string;
};
