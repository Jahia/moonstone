import { CompositeItem } from '@floating-ui/react';
import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';
import { rovingItemProps } from '~/hooks';

import type { TabItemProps } from './TabItem.types';

import styles from './TabItem.module.scss';

export const TabItem: React.FC<TabItemProps> = ({
    component = 'button',
    label,
    size = 'default',
    isReversed,
    isDisabled,
    icon,
    className,
    isSelected = false,
    onClick,
    ...props
}) => {
    const tab = React.createElement(
        component,
        {
            'className': clsx(
                ['moonstone-tabItem', styles['moonstone-tabItem']],
                [`moonstone-tabItem_${size}`, styles[`moonstone-tabItem_${size}`]],
                !label && ['moonstone-tabItem_noLabel', styles['moonstone-tabItem_noLabel']],
                isSelected && ['moonstone-tabItem_selected', styles['moonstone-tabItem_selected']],
                isReversed && ['moonstone-reverse', styles['moonstone-reverse']],
                isDisabled && ['moonstone-disabled'],
                ['flexRow_center', layout.flexRow_center],
                ['alignCenter', layout.alignCenter],
                className,
            ),
            'role': 'tab',
            'aria-selected': isSelected,
            'disabled': isDisabled,
            ...rovingItemProps,
            onClick,
            ...props,
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
        ),
    );

    return <CompositeItem render={tab}/>;
};

TabItem.displayName = 'TabItem';
