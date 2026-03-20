import React from 'react';
import clsx from 'clsx';

import type {IconTextIconProps} from './IconTextIcon.types';
import styles from './IconTextIcon.module.scss';
import {Typography} from '~/components';
import {icons, layout} from '~/globals/css-utils.js';

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
            className={clsx(
                ['moonstone-IconTextIcon', styles['moonstone-IconTextIcon']],
                ['flexRow_nowrap', layout.flexRow_nowrap],
                ['alignCenter', layout.alignCenter],
                className
            )}
            {...props}
        >
            <>
                {iconStart && (
                    <iconStart.type
                        {...iconStart.props}
                        size={iconSize}
                        className={clsx(`moonstone-icon_${iconSize}`, icons[`moonstone-icon_${iconSize}`], iconStart.props.className)}
                    />
                )}

                <Typography
                    isNowrap
                    component="span"
                    className={clsx('flexFluid', layout.flexFluid, typographyProps?.className)}
                    {...typographyProps}
                >
                    {children}
                </Typography>

                {iconEnd && (
                    <iconEnd.type
                        {...iconEnd.props}
                        size={iconSize}
                        className={clsx(`moonstone-icon_${iconSize}`, icons[`moonstone-icon_${iconSize}`], iconEnd.props.className)}
                    />
                )}
            </>
        </Component>
    );
};
