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
};
