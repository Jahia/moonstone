import * as React from 'react';

export type SecondaryNavProps = {
    /**
     * Define if the SecondaryNavigation is expanded by default
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
     * Additional classnames
     */
    className?: string;

    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Triggered when the visibility is toggled
     */
    onToggled?: (e: React.MouseEvent) => void;
};

