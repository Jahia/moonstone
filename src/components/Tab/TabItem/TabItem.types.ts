import React from 'react';

export const tabItemSizes = ['default', 'big'] as const;
type TabItemSize = typeof tabItemSizes[number];

export type TabItemProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick' | 'className'> & {
    /**
     * Element rendered as the tab.
     * @default 'button'
     */
    component?: string;
    /**
     * Text of the tab.
     * @default ''
     */
    label?: string;
    /**
     * Size of the tab. `big` shows the label in the heading style.
     * @default 'default'
     */
    size?: TabItemSize;
    /**
     * Icon shown before the label.
     */
    icon?: React.ReactElement;
    /**
     * Whether the tab is disabled.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Whether the tab is the selected one. Only one TabItem of a Tab is selected at a time.
     * @default false
     */
    isSelected?: boolean;
    /**
     * Called when the user clicks the tab. Update `isSelected` here: the Tab doesn't select it.
     */
    onClick?: React.MouseEventHandler;
    /**
     * Whether the tab uses reversed colors, for a dark background.
     * @default false
     */
    isReversed?: boolean;
    /**
     * Additional class name.
     */
    className?: string;
};
