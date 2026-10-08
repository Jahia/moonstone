import React from 'react';

import type { ListItemProps } from '~/components/ListItem/ListItem.types';

export type MenuItemProps = Omit<ListItemProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onKeyPress' | 'typographyVariant'> & {
    /**
     * Whether the item shows its hover style.
     */
    isHover?: boolean;

    /**
     * Whether the item is selected.
     * @default false
     */
    isSelected?: boolean;

    /**
     * Whether the item is disabled. A disabled item ignores clicks.
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Whether the item is highlighted. Ignored when `isSelected` is set.
     * @default false
     */
    isHighlighted?: boolean;

    /**
     * Kind of item. `title` makes it a heading for a group: it can't be focused or chosen.
     * @default 'default'
     */
    variant?: 'default' | 'title';

    /**
     * Value of the item, returned when the item is used in a selection component, such as a Dropdown.
     */
    value?: unknown;

    /**
     * Called when the user clicks the item. Not called when the item is disabled.
     */
    onClick?: React.MouseEventHandler;

    /**
     * Called when the pointer enters the item.
     */
    onMouseEnter?: React.MouseEventHandler;

    /**
     * Called when the pointer leaves the item.
     */
    onMouseLeave?: React.MouseEventHandler;

    /**
     * @deprecated onKeyPress is deprecated and will be removed in a future release. You should use onKeyUp instead.
     */
    onKeyPress?: React.KeyboardEventHandler;

    /**
     * Called when a key is released on the item.
     */
    onKeyUp?: React.KeyboardEventHandler;

    /**
     * Size of the item's icons.
     * @default 'default'
     */
    iconSize?: 'small' | 'default' | 'big';
};
