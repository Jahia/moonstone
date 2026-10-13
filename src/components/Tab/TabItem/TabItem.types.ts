import React from 'react';

export const tabItemSizes = ['default', 'big'] as const;
type TabItemSize = typeof tabItemSizes[number];

export type TabItemProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick' | 'className'> & {
    /**
     * The component used for the root node
     */
    component?: string;
    /**
     * TabItem label
     */
    label?: string;
    /**
     * Id of the tab. Pair it with `aria-controls`, the id of the panel the tab shows, which refers back to the tab with `aria-labelledby`
     */
    id?: string;
    /**
     * Icon size
     */
    size?: TabItemSize;
    /**
     * Icon name, if it's empty the tabItem has no icon
     */
    icon?: React.ReactElement;
    /**
     * Whether the component should be disabled
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
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;
    /**
     * Additional classname
     */
    className?: string;
};
