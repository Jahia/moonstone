import React from 'react';
import classnames from 'clsx';
import './TabItem.scss';
import {TabItemProps} from './TabItem.types';
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
    ...props
}: TabItemProps) =>
    React.createElement(
        component,
        {
            className: classnames(
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
            ...props
        },
        (
            <>
                {icon && <icon.type {...icon.props} size={(size === 'big') ? 'default' : size}/>}

                {label && (
                    <Typography isNowrap
                                component="span"
                                variant="button"
                                isUpperCase={size === 'big'}
                                weight="default"
                    >
                        {label}
                    </Typography>
                )}
            </>
        )
    );

TabItem.displayName = 'TabItem';
