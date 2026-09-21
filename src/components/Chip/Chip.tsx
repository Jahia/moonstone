import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components/Typography';
import { icons } from '~/globals/css-utils.js';

import type { ChipProps } from './Chip.types';

import styles from './Chip.module.scss';

export const Chip: React.FC<ChipProps> = ({
    label = '',
    color = 'default',
    variant = 'default',
    icon = null,
    isDisabled = false,
    className,
    ...props
}) => (
    <div
        className={clsx(
            ['moonstone-chip', styles['moonstone-chip']],
            [`moonstone-color_${color}`, styles[`moonstone-color_${color}`]],
            [`moonstone-chip_${variant}`, styles[`moonstone-chip_${variant}`]],
            isDisabled && ['moonstone-disabled', styles['moonstone-disabled']],
            className,
        )}
        {...props}
    >
        {icon && <icon.type {...icon.props} className={clsx('moonstone-icon_small', icons['moonstone-icon_small'], icon.props.className)} size="small"/>}
        {label && <Typography isNowrap component="span" variant="caption" weight="semiBold">{label}</Typography>}
    </div>
);

Chip.displayName = 'Chip';
