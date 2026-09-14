import React from 'react';
import clsx from 'clsx';

import type {PillProps} from './Pill.types';

import {Typography} from '~/components';
import styles from './Pill.module.scss';

export const Pill: React.FC<PillProps> = ({
    label,
    content,
    className,
    isReversed,
    ...props
}) => {
    if (label !== undefined) {
        console.warn('The property `label` is deprecated in the Pill component. Use `content` instead.');
    }

    return (
        <Typography
            component="span"
            variant="caption"
            weight="semiBold"
            className={clsx(
                ['moonstone-pill', styles['moonstone-pill']],
                isReversed && ['moonstone-pill_reversed', styles['moonstone-pill_reversed']],
                className
            )}
            {...props}
        >
            {content ?? label}
        </Typography>
    );
};

Pill.displayName = 'Pill';
