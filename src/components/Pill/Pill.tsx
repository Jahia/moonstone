import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';

import type { PillProps } from './Pill.types';

import styles from './Pill.module.scss';

export const Pill: React.FC<PillProps> = ({
    label,
    children,
    className,
    isReversed,
    ...props
}) => {
    if (label !== undefined) {
        console.warn('The property `label` is deprecated in the Pill component. Use `children` instead.');
    }

    return (
        <Typography
            className={clsx(
                ['moonstone-pill', styles['moonstone-pill']],
                isReversed && ['moonstone-pill_reversed', styles['moonstone-pill_reversed']],
                className,
            )}
            component="span"
            variant="caption"
            weight="semiBold"
            {...props}
        >
            {children ?? label}
        </Typography>
    );
};

Pill.displayName = 'Pill';
