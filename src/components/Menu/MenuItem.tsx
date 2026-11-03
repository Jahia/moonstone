import { CompositeItem } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { MenuItemRoleContext } from './Menu.context';
import { ListItem } from '~/components';
import { mergeHandlers, onAccessibleClick, rovingItemProps } from '~/hooks';

import type { MenuItemProps } from './MenuItem.types';
import type { ListItemProps } from '~/components/ListItem/ListItem.types';

import styles from './MenuItem.module.scss';

export const MenuItem: React.FC<MenuItemProps> = ({
    variant = 'default',
    isHover,
    isSelected = false,
    isDisabled = false,
    isHighlighted = false,
    iconStart,
    iconSize,
    iconEnd,
    image,
    imageSize,
    className,
    description,
    onClick,
    onKeyPress,
    onKeyUp,
    ...props
}) => {
    const itemRole = useContext(MenuItemRoleContext);
    const isTitle = variant === 'title';

    // Enter and Space click the item, so `onClick` keeps its MouseEvent
    const keys = onAccessibleClick({
        onClick: e => (e.currentTarget as HTMLElement).click(),
        disabled: isDisabled,
    });

    const listItem = (
        <ListItem
            // A global ARIA attribute would cancel the presentational role of a title
            aria-disabled={isTitle && itemRole ? undefined : isDisabled}
            className={clsx(
                ['moonstone-menuItem', styles['moonstone-menuItem']],
                isHover && ['moonstone-hover', styles['moonstone-hover']],
                isSelected && ['moonstone-selected', styles['moonstone-selected']],
                isDisabled && ['moonstone-disabled', styles['moonstone-disabled']],
                isHighlighted && !isSelected && ['moonstone-highlighted', styles['moonstone-highlighted']],
                isTitle && ['moonstone-title', styles['moonstone-title']],
                image && ['moonstone-menuItem-image', styles['moonstone-menuItem-image']],
                className,
            )}
            description={description}
            iconEnd={iconEnd}
            iconSize={iconSize}
            iconStart={iconStart}
            image={image}
            imageSize={imageSize}
            // In a Menu, a title is presentational: a menu or a listbox holds no list item
            role={isTitle ? itemRole && 'presentation' : itemRole}
            onClick={isDisabled ? undefined : onClick}
            {...mergeHandlers({
                ...props,
                onKeyUp: (e: React.KeyboardEvent<HTMLLIElement>) => {
                    if (onKeyPress) {
                        console.warn('onKeyPress is deprecated and will be removed in a future release. You should use onKeyUp instead.');
                        onKeyPress(e);
                    }

                    onKeyUp?.(e);
                },
            }, {
                onKeyDown: keys.onKeyDown,
                onKeyUp: keys.onKeyUp,
            }) as ListItemProps}
        />
    );

    // A title, or an item the consumer takes out of the Tab sequence, is no item of the Menu
    if (isTitle || props.tabIndex === -1) {
        return listItem;
    }

    return <CompositeItem {...rovingItemProps} render={listItem}/>;
};

MenuItem.displayName = 'MenuItem';
