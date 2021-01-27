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

type TBadgeType = 'round' | 'diamond';
export enum BadgeType {
    Round = 'round',
    Diamond = 'diamond'
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
     * Badge type
     */
    type?: TBadgeType;

    /**
     * Additional classname
     */
    className?: string;
}

export const Badge: FunctionComponent<BadgeProps> = ({
    label = null,
    color = BadgeColor.Accent,
    type = BadgeType.Round,
    className,
    ...other
}) => {
    const classNameProps = classnames(
        'moonstone-badge',
        `moonstone-color_${color}`,
        `moonstone-${type}`,
        className
    );

    if (type === BadgeType.Round) {
        if (!label || label.length < 1) {
            return null
        }

        return (
            <Typography isNowrap component="span" variant="caption" weight="bold" className={classNameProps} {...other}>
                {label}
            </Typography>
        );
    }

    return (
        <div className={classNameProps} {...other}/>
    );
};

Badge.displayName = 'Badge';
