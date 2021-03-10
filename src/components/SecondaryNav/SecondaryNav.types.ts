import * as React from 'react';

export type SecondaryNavProps = {
    /**
     * Is visible or hidden by default
     */
    isDefaultVisible?: boolean;
    /**
     * Header of the secondary navigation
     */
    header: React.ReactNode;
    /**
     * Content of the component
     */
    children: React.ReactNode;
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Triggered when the visibility is toggled
     */
    onToggled?: (...args: any[]) => void;
};

