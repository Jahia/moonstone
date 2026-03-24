import React, {useRef} from 'react';
import clsx from 'clsx';
import styles from './TabItem.module.scss';
import type {TabItemProps} from './TabItem.types';
import {Typography} from '~/components/Typography';
import {onArrowNavigation} from '~/hooks';
import {layout} from '~/globals/css-utils.js';

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
}) => {
    const ref = useRef(null);
    return (
        React.createElement(
            component,
            {
                className: clsx(
                    ['moonstone-tabItem', styles['moonstone-tabItem']],
                    [`moonstone-tabItem_${size}`, styles[`moonstone-tabItem_${size}`]],
                    !label && ['moonstone-tabItem_noLabel', styles['moonstone-tabItem_noLabel']],
                    isSelected && ['moonstone-tabItem_selected', styles['moonstone-tabItem_selected']],
                    isReversed && ['moonstone-reverse', styles['moonstone-reverse']],
                    isDisabled && ['moonstone-disabled', styles['moonstone-disabled']],
                    ['flexRow_center', layout.flexRow_center],
                    ['alignCenter', layout.alignCenter],
                    className
                ),
                ref: ref,
                role: 'tab',
                'aria-selected': isSelected,
                disabled: isDisabled,
                onClick,
                ...onArrowNavigation({ref: ref, direction: 'horizontal'}),
                ...props
            },
            (
                <>
                    {icon && <icon.type {...icon.props} className={clsx('moonstone-tabItem_icon', styles['moonstone-tabItem_icon'], icon.props.className)} size={(size === 'big') ? 'default' : size}/>}

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
        ));
};

TabItem.displayName = 'TabItem';
