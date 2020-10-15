import React from 'react';
import {ListItem} from '~/components/ListItem';
import classnames from 'clsx';
import './MenuItem.scss';

type TMenuItemVariant = 'default' | 'title';
enum MenuItemVariant {
    DEFAULT = 'default',
    TITLE = 'title'
}

type TMenuItemImageSize = 'small' | 'big';
enum MenuItemImageSize {
    SMALL = 'small',
    BIG = 'big'
}

interface IMenuItemProps {
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
     * Icon display before the label
     */
    iconStart?: React.ReactElement,

    /**
     * Icon display at the end of MenuItem
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

export const MenuItem: React.FC<IMenuItemProps> = ({
    variant = MenuItemVariant.DEFAULT,
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
        tabIndex={isDisabled || variant === MenuItemVariant.TITLE || isSelected ? null : 0}
        aria-disabled={isDisabled}
        className={classnames(
            'moonstone-menuItem',
            {
                'moonstone-hover': isHover,
                'moonstone-selected': isSelected,
                'moonstone-disabled': isDisabled,
                'moonstone-title': variant === MenuItemVariant.TITLE
            },
            image && 'moonstone-menuItem-image'
        )}
        image={image}
        imageSize={imageSize}
        {...props}
    />
);

MenuItem.displayName = 'MenuItem';
