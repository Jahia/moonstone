import React, {FunctionComponent} from 'react';
import './Badge.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';

type TBadgeColor = 'accent' | 'success' | 'danger';
export enum BadgeColor {
    Accent = 'accent',
    Success = 'success',
    Danger = 'danger'
}

interface BadgeProps {
    /**
     * Badge label, only for type round
     */
    label?: string;

    /**
     * Badge color
     */
    color?: TBadgeColor;

    /**
     * Additional classname
     */
    className?: string;
}

export const Badge: FunctionComponent<BadgeProps> = ({
    label = null,
    color = BadgeColor.Accent,
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
