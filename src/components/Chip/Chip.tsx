import React from 'react';
import clsx from 'clsx';
import styles from './Chip.module.scss';
import type {ChipProps} from './Chip.types';
import {Typography} from '~/components/Typography';
import {icons, reset} from '~/globals/css-utils.js';

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
            reset,
            ['moonstone-chip', styles['moonstone-chip']],
            [`moonstone-color_${color}`, styles[`moonstone-color_${color}`]],
            [`moonstone-chip_${variant}`, styles[`moonstone-chip_${variant}`]],
            isDisabled && ['moonstone-disabled', styles['moonstone-disabled']],
            className
        )}
        {...props}
    >
        {icon && <icon.type {...icon.props} size="small" className={clsx('moonstone-icon_small', icons['moonstone-icon_small'], icon.props.className)}/>}
        {label && <Typography isNowrap component="span" variant="caption" weight="semiBold">{label}</Typography>}
    </div>
);

Chip.displayName = 'Chip';
