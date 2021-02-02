import * as React from 'react';

export type TabItemSize = 'default' | 'big';
export const tabItemSizes = ['default', 'big'];

export type TabItemVariant = 'ghost';
export const tabItemVariants = ['ghost'];

export type TabItemColor = 'default';
export const tabItemColors = ['default'];

export type TabItemProps = {
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
    icon?: React.ReactElement;
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
    onClick: React.MouseEventHandler;
    /**
     * Is tabItem color reversed
     */
    isReversed?: boolean;
    /**
     * Additional classname
     */
    className?: string;
}

