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
    className = null,
    isSelected = false,
    onClick,
    ...props
}) =>
    React.createElement(
        component,
        {
            className: clsx(
                'moonstone-tabItem',
                `moonstone-tabItem_${size}`,
                {'moonstone-tabItem_noLabel': !label},
                {'moonstone-tabItem_selected': isSelected},
                {'moonstone-reverse': isReversed},
                'flexRow_center',
                'alignCenter',
                className
            ),
            disabled: isDisabled,
            onClick,
            ...props
        },
        (
            <>
                {icon && <icon.type {...icon.props} className={clsx('moonstone-tabItem_icon', icon.props.className)} size={(size === 'big') ? 'default' : size}/>}

                {label && (
                    <Typography
                        isNowrap
                        component="span"
                        variant={size === 'big' ? 'heading' : 'button'}
                        weight={size === 'big' ? 'semiBold' : 'default'}
                    >
                        {label}
                    </Typography>
                )}
            </>
        )
    );

TabItem.displayName = 'TabItem';
