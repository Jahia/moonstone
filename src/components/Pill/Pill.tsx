import React from 'react';
import clsx from 'clsx';

import type {PillProps} from './Pill.types';

import {Typography} from '~/components/Typography';
import styles from './Pill.module.scss';

export const Pill: React.FC<PillProps> = ({
    label,
    className,
    isReversed,
    ...props
}) => {
    return (
        <Typography
            component="span"
            variant="caption"
            weight="semiBold"
            className={clsx('moonstone-pill', styles.pill, {'moonstone-pill_reversed': isReversed, [styles.pill_reversed]: isReversed}, className)}
            {...props}
        >
            {label}
        </Typography>
    );
};

Pill.displayName = 'Pill';
