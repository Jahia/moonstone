import React from 'react';
import {ListItem} from '~/components/ListItem';
import classnames from 'clsx';
import './MenuItem.scss';

type TMenuItemVariant = 'default' | 'title';
enum MenuItemVariant {
    DEFAULT = 'default',
    TITLE = 'title'
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
     * ListItem label
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
     * Icon display at the end of ListItem
     */
    iconEnd?: React.ReactElement,

    /**
     * ListItem variants
     */
    variant?: TMenuItemVariant,

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
    onMouseLeave?: (event: React.MouseEvent) => void
};

export const MenuItem: React.FC<IMenuItemProps> = ({
    variant = MenuItemVariant.DEFAULT,
    isHover,
    isSelected,
    isDisabled = false,
    iconStart = null,
    iconEnd = null,
    className = '',
    ...props
}) => (
    <ListItem
        tabIndex={isDisabled || variant === MenuItemVariant.TITLE || isSelected ? null : 0}
        aria-disabled={isDisabled}
        className={classnames(
            'moonstone-menuItem',
            className,
            {
                'moonstone-hover': isHover,
                'moonstone-selected': isSelected,
                'moonstone-disabled': isDisabled,
                'moonstone-title': variant === MenuItemVariant.TITLE
            }
        )}
        {...props}
    />
);

MenuItem.displayName = 'MenuItem';
