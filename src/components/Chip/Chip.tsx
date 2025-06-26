import React from 'react';
import clsx from 'clsx';
import './Chip.scss';
import type {ChipProps} from './Chip.types';
import {Typography} from '~/components/Typography';

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
            'moonstone-chip',
            `moonstone-color_${color}`,
            `moonstone-chip_${variant}`,
            {'moonstone-disabled': isDisabled},
            className
        )}
        {...props}
    >
        {icon && <icon.type {...icon.props} size="small" className={clsx("moonstone-icon_small", icon.props.className)}/>}
        {label && <Typography isNowrap component="span" variant="caption" weight="semiBold">{label}</Typography>}
    </div>
);

Chip.displayName = 'Chip';
