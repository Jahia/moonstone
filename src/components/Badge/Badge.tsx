import React, {FunctionComponent} from 'react';
import './Badge.scss';
import {Typography} from '~/components/Typography';
import classnames from 'clsx';

export enum BadgeColor {
    'accent' = 'accent',
    'success' = 'success',
    'danger' = 'danger'
}

export enum BadgeType {
    'round' = 'round',
    'diamond' = 'diamond'
}

type BadgeProps = {
    /**
     * Badge label, only for type round
     */
    label?: string,

    /**
     * Badge color
     */
    color?: BadgeColor,

    /**
     * Badge type
     */
    type?: BadgeType,

    /**
     * Additional classname
     */
    className?: string
}

export const Badge: FunctionComponent<BadgeProps> =
    ({label = null, color = BadgeColor.accent,
         type = BadgeType.round, className, ...other}) => {
        const classNameProps = classnames(
            'moonstone-badge',
            `moonstone-color_${color}`,
            `moonstone-${type}`,
            className
        );
        if (type === BadgeType.round) {
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
