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
     * SecondaryNav labels
     */
    i18n?: {
        /**
         * aria-label of the handle that resizes the navigation
         * @default the aria-label of the navigation, else 'Resize'
         */
        resizeHandleLabel?: string;
        /**
         * Unit read after the width of the navigation, e.g. "300 pixels"
         * @default 'pixels'
         */
        widthUnit?: string;
    };
};
