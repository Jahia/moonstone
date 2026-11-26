import React from 'react';

export type SecondaryNavProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className' | 'onChange'> & {
    /**
     * Whether the navigation is visible on first render.
     * @default true
     */
    isDefaultVisible?: boolean;
    /**
     * Title area of the navigation, usually a SecondaryNavHeader.
     */
    header: React.ReactNode;
    /**
     * Navigation of the section, such as a TreeView.
     */
    children: React.ReactNode;
    /**
     * Additional class name.
     */
    className?: string;
    /**
     * Whether the navigation uses reversed colors, for a dark background.
     * @default true
     */
    isReversed?: boolean;
    /**
     * Called when the user shows or hides the navigation.
     */
    onToggled?: (e: React.MouseEvent) => void;
    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * aria-label of the navigation
         * @default 'Secondary'
         */
        navigationLabel?: string;
        /**
         * aria-label of the button that shows and hides the navigation
         * @default 'Toggle secondary navigation'
         */
        toggleButtonLabel?: string;
        /**
         * aria-label of the handle that resizes the navigation
         * @default the aria-label of the navigation
         */
        resizeHandleLabel?: string;
        /**
         * Unit read after the width of the navigation, e.g. "300 pixels"
         * @default 'pixels'
         */
        widthUnit?: string;
    };
};
