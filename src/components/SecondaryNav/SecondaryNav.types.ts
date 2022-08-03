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
     * Reversed style for dark background with light text
     */
    isReversed?: boolean;
    /**
     * Triggered when the visibility is toggled
     */
    onToggled?: (e: React.MouseEvent) => void;
};

