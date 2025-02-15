import React from 'react';
import clsx from 'clsx';
import './TabItem.scss';
import type {TabItemProps} from './TabItem.types';
import {Typography} from '~/components/Typography';

export const TabItem: React.FC<TabItemProps> = ({
    component = 'button',
    label = '',
    size = 'default',
    isReversed = false,
    isDisabled = false,
    icon = null,
    variant = 'ghost',
    color = 'default',
    className = null,
    isSelected = false,
    onClick,
    ...props
}) =>
    React.createElement(
        component,
        {
            className: clsx(
                'moonstone-tab-item',
                `moonstone-size_${size}`,
                `moonstone-variant_${variant}`,
                `moonstone-color_${color}`,
                {'moonstone-icon': (icon && label)},
                {'moonstone-icon-tab-item': !label},
                {'moonstone-selected': isSelected},
                {'moonstone-reverse': isReversed},
                className
            ),
            disabled: isDisabled,
            onClick,
            ...props
        },
        (
            <>
                {icon && <icon.type {...icon.props} size={(size === 'big') ? 'default' : size}/>}

                {label && (
                    <Typography
                        isNowrap
                        component="span"
                        variant={size === 'big' ? 'heading' : 'button'}
                        weight={size === 'big' ? 'light' : 'default'}
                    >
                        {label}
                    </Typography>
                )}
            </>
        )
    );

TabItem.displayName = 'TabItem';
