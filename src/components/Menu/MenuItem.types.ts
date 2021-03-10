import React from 'react';

type MenuItemVariant = 'default' | 'title';
export enum MenuItemVariants {
    Default = 'default',
    Title = 'title'
}

type MenuItemImageSize = 'small' | 'big';

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
     * MenuItem label
     */
    label: React.ReactNode,

    /**
     * Does the label contain HTML markup
     */
    isHtml?: boolean,

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
    variant?: MenuItemVariant,

    /**
     * Optional image to display to describe the menu item
     */
    image?: HTMLImageElement,

    /**
     * If there's an image, it should be this size
     */
    imageSize?: MenuItemImageSize,

    /**
     * Optional role for accessibility (e.g., if being used as an option in Dropdown)
     */
    role?: string,

    /**
     * Optional value which can be returned when being used in user input elements such as Dropdown
     */
    value?: any,

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
