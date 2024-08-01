import React from 'react';

export type MenuItemProps = {
    /**
     * Additional classname
     */
    className?: string,

    /**
     * Is item being hovered
     */
    isHover?: boolean,

    /**
     * Is item selected
     */
    isSelected?: boolean,

    /**
     * Is item disabled
     */
    isDisabled?: boolean,

    /**
     * Is item highlighted, cannot be selected at the same time
     */
    isHighlighted?: boolean,

    /**
     * MenuItem label
     */
    label: React.ReactNode,

    /**
     * Optional description to display to describe the item
     */
    description?: string;

    /**
     * A leading icon display before the label
     */
    iconStart?: React.ReactElement,

    /**
     * A trailing icon display at the end of MenuItem
     */
    iconEnd?: React.ReactElement,

    /**
     * MenuItem variants
     */
    variant?: 'default' | 'title',

    /**
     * Optional image to display to describe the menu item
     */
    image?: React.ReactElement,

    /**
     * If there's an image, it should be this size
     */
    imageSize?: 'small' | 'big',

    /**
     * Optional role for accessibility (e.g., if being used as an option in Dropdown)
     */
    role?: string,

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

    /**
     * Which icon size to render. The default is small
     */
    iconSize?: 'small' | 'default' | 'big';
};
