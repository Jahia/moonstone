import React from 'react';

type MenuItemVariant = 'default' | 'title';
export enum MenuItemVariants {
    Default = 'default',
    Title = 'title'
}

type MenuItemImageSize = 'small' | 'big';

export type MenuItemProps = React.ComponentPropsWithoutRef<'li'> & {
    /**
     * Additional classnames
     */
    className?: string,

    /**
     * Is item being hovered
     */
    isHover?: boolean,

    /**
     * Whether the item should be selected
     */
    isSelected?: boolean,

    /**
     * Whether the item should be disabled
     */
    isDisabled?: boolean,

    /**
     * MenuItem label
     */
    label: React.ReactNode,

    /**
     * Description to display to describe the item
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
    variant?: MenuItemVariant,

    /**
     * Optional image to display to describe the menu item
     */
    image?: React.ReactElement,

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
