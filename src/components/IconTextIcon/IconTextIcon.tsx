import React from 'react';
import clsx from 'clsx';

import type {IconTextIconProps} from './IconTextIcon.types';
import './IconTextIcon.scss';
import {Typography} from '~/components';

export const IconTextIcon = <C extends React.ElementType = 'div'> ({
    component,
    iconStart,
    iconEnd,
    iconSize = 'default',
    typographyProps,
    className,
    children,
    ...props
}:IconTextIconProps<C>) => {
    const Component = component || 'div';

    return (
        <Component
            className={clsx('moonstone-IconTextIcon', 'flexRow_nowrap', 'alignCenter', className)}
            {...props}
        >
            <>
                {iconStart && (
                    <iconStart.type
                        {...iconStart.props}
                        size={iconSize}
                        className={clsx(`moonstone-icon_${iconSize}`, iconStart.props.className)}
                    />
                )}

                <Typography
                    isNowrap
                    component="span"
                    className={clsx('flexFluid', typographyProps?.className)}
                    {...typographyProps}
                >
                    {children}
                </Typography>

                {iconEnd && (
                    <iconEnd.type
                        {...iconEnd.props}
                        size={iconSize}
                        className={clsx(`moonstone-icon_${iconSize}`, iconEnd.props.className)}
                    />
                )}
            </>
        </Component>
    );
};
