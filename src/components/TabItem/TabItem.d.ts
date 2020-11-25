import * as React from 'react';

export type TabItemSize = "default";

export type TabItemVariant = "ghost";

export type TabItemColor = "default";

export interface TabItemProps {
    /**
     * The component used for the root node
     */
    component?: string;
    /**
     * TabItem label
     */
    label?: string;
    /**
     * Icon size
     */
    size?: TabItemSize;
    /**
     * Icon name, if it's empty the tabItem has no icon
     */
    icon?: React.ReactElement<any>;
    /**
     * TabItem style
     */
    variant?: TabItemVariant;
    /**
     * TabItem color
     */
    color?: TabItemColor;
    /**
     * Is tabItem disabled
     */
    isDisabled?: boolean;
    /**
     * Is tabItem selected
     */
    isSelected?: boolean;
    /**
     * Function trigger on click
     */
    onClick: (...args: any[])=>any;
    /**
     * Is tabItem color reversed
     */
    isReversed?: boolean;
    /**
     * Additional classname
     */
    className?: string;
}

export const TabItem: React.SFC<TabItemProps>;

