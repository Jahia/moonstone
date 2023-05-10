import * as React from 'react';

export const tabItemSizes = ['default', 'big'] as const;
export type TabItemSize = typeof tabItemSizes[number];

export const tabItemVariants = ['ghost'] as const;
export type TabItemVariant = typeof tabItemVariants[number];

export const tabItemColors = ['default'] as const;
export type TabItemColor = typeof tabItemColors[number];

export type TabItemProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'| 'className'> & {
    /**
     * The HTML tag used to render the root node
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
     * Style of the component
     * @deprecated As we only have only one variant
     */
    variant?: TabItemVariant;

    /**
     * Color of the component
     * @deprecated As we only have only one color
     */
    color?: TabItemColor;

    /**
     * Whether the tab item should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the tab item should be selected
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
     * Additional classnames
     */
    className?: string;
}

