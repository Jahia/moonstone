import React, {FunctionComponent} from 'react';
import './Badge.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';
import {BadgeProps} from './Badge.types';

export const Badge: FunctionComponent<BadgeProps> = ({
    label = null,
    color = 'accent',
    className,
    ...other
}) => {
    const classNameProps = classnames(
        'moonstone-badge',
        `moonstone-badge_round`,
        `moonstone-badge_${color}`,
        className
    );

    if (!label || label.length < 1) {
        return null
    }

    return (
        <Typography isNowrap component="span" variant="caption" weight="bold" className={classNameProps} {...other}>
            {label}
        </Typography>
    );
};

Badge.displayName = 'Badge';
