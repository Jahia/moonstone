import { CompositeItem } from '@floating-ui/react';
import clsx from 'clsx';
import React from 'react';

import { ListItem } from '~/components';
import { rovingItemProps } from '~/hooks';

import type { MenuItemProps } from './MenuItem.types';

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
    const listItem = (
        <ListItem
            aria-disabled={isDisabled}
            className={clsx(
                ['moonstone-menuItem', styles['moonstone-menuItem']],
                isHover && ['moonstone-hover', styles['moonstone-hover']],
                isSelected && ['moonstone-selected', styles['moonstone-selected']],
                isDisabled && ['moonstone-disabled', styles['moonstone-disabled']],
                isHighlighted && !isSelected && ['moonstone-highlighted', styles['moonstone-highlighted']],
                variant === 'title' && ['moonstone-title', styles['moonstone-title']],
                image && ['moonstone-menuItem-image', styles['moonstone-menuItem-image']],
                className,
            )}
            description={description}
            iconEnd={iconEnd}
            iconSize={iconSize}
            iconStart={iconStart}
            image={image}
            imageSize={imageSize}
            onClick={isDisabled ? undefined : onClick}
            onKeyUp={(e: React.KeyboardEvent<HTMLLIElement>) => {
                if (onKeyPress) {
                    console.warn('onKeyPress is deprecated and will be removed in a future release. You should use onKeyUp instead.');
                    onKeyPress(e);
                }

                onKeyUp?.(e);
            }}
            {...props}
        />
    );

    // A title, or an item the consumer takes out of the Tab sequence, is no item of the Menu
    if (variant === 'title' || props.tabIndex === -1) {
        return listItem;
    }

    return <CompositeItem {...rovingItemProps} render={listItem}/>;
};

MenuItem.displayName = 'MenuItem';
