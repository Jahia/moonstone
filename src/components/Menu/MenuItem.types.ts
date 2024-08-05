import React from 'react';

import type {ListItemProps} from '~/components/ListItem/ListItem.types'

export type MenuItemProps = Omit<ListItemProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onKeyPress' | 'typographyVariant'> & {
// export type MenuItemProps = Omit<React.ComponentPropsWithoutRef<'li'>, 'className' | 'role' | 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onKeyPress'> & {

    /**
     * Is item being hovered
     */
    isHover?: boolean,

    /**
     * Is item selected
     */
    isSelected?: boolean,

    /**
     * Whether the component should be disabled
     */
    isDisabled?: boolean,

    /**
     * Is item highlighted, cannot be selected at the same time
     */
    isHighlighted?: boolean,

    /**
     * MenuItem variants
     */
    variant?: 'default' | 'title',

    /**
     * Optional value which can be returned when being used in user input elements such as Dropdown
     */
    value?: unknown,

    /**
     * Function triggered on clicking the item
     */
    onClick?: React.MouseEventHandler,

    /**
     * Function triggered when the mouse pointer hovering the item
     */
    onMouseEnter?: React.MouseEventHandler,

    /**
     * Function triggered when the mouse pointer move off the item
     */
    onMouseLeave?: React.MouseEventHandler,

    /**
     * Function triggered when a key is pressed
     */
    onKeyPress?: React.KeyboardEventHandler
};
