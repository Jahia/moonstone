import React from 'react';
import {ListItem} from '~/components/ListItem';
import clsx from 'clsx';
import './MenuItem.scss';

import type {MenuItemProps} from './MenuItem.types';

export const MenuItem: React.FC<MenuItemProps> = ({
    variant = 'default',
    isHover,
    isSelected = false,
    isDisabled = false,
    isHighlighted = false,
    iconStart = null,
    iconSize = null,
    iconEnd = null,
    image,
    imageSize,
    className,
    description,
    ...props
}) => (
    <ListItem
        tabIndex={isDisabled || variant === 'title' || isSelected ? null : 0}
        aria-disabled={isDisabled}
        className={clsx(
            'moonstone-menuItem',
            {
                'moonstone-hover': isHover,
                'moonstone-selected': isSelected,
                'moonstone-disabled': isDisabled,
                'moonstone-highlighted': isHighlighted && !isSelected,
                'moonstone-title': variant === 'title'
            },
            image && 'moonstone-menuItem-image',
            className
        )}
        image={image}
        imageSize={imageSize}
        iconSize={iconSize}
        iconStart={iconStart}
        iconEnd={iconEnd}
        description={description}
        {...props}
    />
);

MenuItem.displayName = 'MenuItem';
