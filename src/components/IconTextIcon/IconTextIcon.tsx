import React from 'react';
import clsx from 'clsx';

import {IconTextIconProps} from './IconTextIcon.types';
import './IconTextIcon.scss';
import {Typography} from '~/components';

export const IconTextIcon: React.FC<IconTextIconProps> = ({
    component = 'div',
    iconStart,
    iconEnd,
    iconSize = 'default',
    typographyProps,
    className,
    children,
    ...props
}) => {
    // Default Typography component props to use. Can be overwritten through
    // the use of the typographyProps property
    const typoProps = {component: 'span', ...typographyProps};

    return React.createElement(
        component,
        {
            className: clsx('moonstone-IconTextIcon', 'flexRow_nowrap', 'alignCenter', className),
            ...props
        },
        (
            <>
                {iconStart && (
                    <iconStart.type
                        size={iconSize}
                        className={clsx('moonstone-IconTextIcon_iconStart', iconStart.props.className)}
                        {...iconStart.props}
                    />
                )}

                <Typography
                    isNowrap
                    className={clsx('flexFluid')}
                    {...typoProps}
                >
                    {children}
                </Typography>

                {iconEnd && (
                    <iconEnd.type
                        size={iconSize}
                        className={clsx('moonstone-IconTextIcon_iconEnd', iconEnd.props.className)}
                        {...iconEnd.props}
                    />
                )}
            </>
        )
    );
};
