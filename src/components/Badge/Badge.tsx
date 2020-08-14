import React, {FunctionComponent} from 'react';
import './Badge.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';

type TBadgeColor = 'accent' | 'success' | 'danger';

export enum BadgeColor {
    ACCENT = 'accent',
    SUCCESS = 'success',
    DANGER = 'danger'
}

type TBadgeType = 'round' | 'diamond';

export enum BadgeType {
    ROUND = 'round',
    DIAMOND = 'diamond'
}

interface IBadgeProps {
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


export const Badge: FunctionComponent<IBadgeProps> =
    ({label = null, color = BadgeColor.ACCENT,
         type = BadgeType.ROUND, className, ...other}) => {
        const classNameProps = classnames(
            'moonstone-badge',
            `moonstone-color_${color}`,
            `moonstone-${type}`,
            className
        );
        if (type === BadgeType.ROUND) {
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
