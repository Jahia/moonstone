import React from 'react';

export type SecondaryNavProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'onChange'> & {
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
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;
    /**
     * Triggered when the visibility is toggled
     */
    onToggled?: (e: React.MouseEvent) => void;
    /**
     * Secondary nav labels
     */
    i18n?: {
        /**
         * aria-label of the navigation
         * @default 'Secondary navigation'
         */
        navigationLabel?: string;
        /**
         * aria-label of the button that shows and hides the navigation
         * @default 'Toggle secondary navigation'
         */
        toggleButtonLabel?: string;
    };
};
