import clsx from 'clsx';

import { Typography } from '~/components/Typography';

import type { BadgeProps } from './Badge.types';
import type React from 'react';

import styles from './Badge.module.scss';

export const Badge: React.FC<BadgeProps> = ({
    label = null,
    color = 'accent',
    className,
    ...other
}) => {
    const classNameProps = clsx(
        ['moonstone-badge', styles['moonstone-badge']],
        ['moonstone-badge_round', styles['moonstone-badge_round']],
        [`moonstone-badge_${color}`, styles[`moonstone-badge_${color}`]],
        className,
    );

    if (!label || label.length < 1) {
        return null;
    }

    return (
        <Typography
            className={classNameProps}
            component="span"
            variant="caption"
            weight="bold"
            {...other}
        >
            {label}
        </Typography>
    );
};

Badge.displayName = 'Badge';
