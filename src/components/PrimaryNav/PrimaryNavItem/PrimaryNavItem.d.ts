import * as React from 'react';

export interface PrimaryNavItemProps {
    /**
     * Label
     */
    label?: string;
    /**
     * Icon node from our icon library
     */
    icon?: React.ReactElement<any>;
    /**
     * Subtitle
     */
    subtitle?: string;
    /**
     * Optional button
     */
    button?: React.ReactNode;
    /**
     * Element is selected or not
     */
    isSelected?: boolean;
    /**
     * Badge
     */
    badge?: React.ReactElement<any>;
    /**
     * URL to navigate to. If this is used <a> element will be returned with target set to _blank.
     */
    url?: string;
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Function triggered on click
     */
    onClick?: (...args: any[])=>any;
}

export const PrimaryNavItem: React.SFC<PrimaryNavItemProps>;

