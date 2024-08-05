import * as React from 'react';

export const tabItemSizes = ['default', 'big'] as const;
type TabItemSize = typeof tabItemSizes[number];

export const tabItemVariants = ['ghost'] as const;
type TabItemVariant = typeof tabItemVariants[number];

export const tabItemColors = ['default'] as const;
type TabItemColor = typeof tabItemColors[number];

export type TabItemProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'| 'className'> & {
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
    onClick?: React.MouseEventHandler;
    /**
     * Is tabItem color reversed
     */
    isReversed?: boolean;
    /**
     * Additional classname
     */
    className?: string;
}
