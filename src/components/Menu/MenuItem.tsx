import React, {useRef} from 'react';
import {ListItem} from '~/components/ListItem';
import clsx from 'clsx';
import styles from './MenuItem.module.scss';

import type {MenuItemProps} from './MenuItem.types';
import {onArrowNavigation} from '~/hooks';

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
    onKeyPress,
    onKeyUp,
    ...props
}) => {
    const containerRef = useRef(null);
    return (
        <ListItem
        ref={containerRef}
        tabIndex={isDisabled || variant === 'title' || isSelected ? null : 0}
        aria-disabled={isDisabled}
        className={clsx(
            ['moonstone-menuItem', styles['moonstone-menuItem']],
            isHover && ['moonstone-hover', styles['moonstone-hover']],
            isSelected && ['moonstone-selected', styles['moonstone-selected']],
            isDisabled && ['moonstone-disabled', styles['moonstone-disabled']],
            isHighlighted && !isSelected && ['moonstone-highlighted', styles['moonstone-highlighted']],
            variant === 'title' && ['moonstone-title', styles['moonstone-title']],
            image && ['moonstone-menuItem-image', styles['moonstone-menuItem-image']],
            className
        )}
        image={image}
        imageSize={imageSize}
        iconSize={iconSize}
        iconStart={iconStart}
        iconEnd={iconEnd}
        description={description}
        onKeyPress={e => {
                        console.warn('onKeyPress is deprecated and will be removed in a future release. You should use onKeyUp instead.');
                        onKeyPress(e);
                    }}
        onKeyUp={onKeyUp}
        {... onArrowNavigation({ref: containerRef})}
        {...props}
    />
    );
};

MenuItem.displayName = 'MenuItem';
