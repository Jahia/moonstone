import React from 'react';
import {ListItem} from '~/components/ListItem';
import clsx from 'clsx';
import './MenuItem.scss';

type TMenuItemVariant = 'default' | 'title';
enum MenuItemVariant {
    Default = 'default',
    Title = 'title'
}

type TMenuItemImageSize = 'small' | 'big';
enum MenuItemImageSize {
    Small = 'small',
    Big = 'big'
}

interface MenuItemProps {
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
    variant?: TMenuItemVariant,

    /**
     * Optional image to display to describe the menu item
     */
    image?: HTMLImageElement,

    /**
     * If there's an image, it should be this size
     */
    imageSize?: TMenuItemImageSize,

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
    onClick?: (event: React.MouseEvent) => void,

    /**
     * Function triggered when the mouse pointer hovering the item
     */
    onMouseEnter?: (event: React.MouseEvent) => void,

    /**
     * Function triggered when the mouse pointer move off the item
     */
    onMouseLeave?: (event: React.MouseEvent) => void,

    /**
     * Function triggered when a key is pressed
     */
    onKeyPress?: (event: React.KeyboardEvent) => void
};

export const MenuItem: React.FC<MenuItemProps> = ({
    variant = MenuItemVariant.Default,
    isHover,
    isSelected,
    isDisabled = false,
    iconStart = null,
    iconEnd = null,
    image,
    imageSize,
    className = '',
    ...props
}) => (
    <ListItem
        tabIndex={isDisabled || variant === MenuItemVariant.Title || isSelected ? null : 0}
        aria-disabled={isDisabled}
        className={clsx(
            'moonstone-menuItem',
            {
                'moonstone-hover': isHover,
                'moonstone-selected': isSelected,
                'moonstone-disabled': isDisabled,
                'moonstone-title': variant === MenuItemVariant.Title
            },
            image && 'moonstone-menuItem-image'
        )}
        image={image}
        imageSize={imageSize}
        iconStart={iconStart}
        iconEnd={iconEnd}
        {...props}
    />
);

MenuItem.displayName = 'MenuItem';
