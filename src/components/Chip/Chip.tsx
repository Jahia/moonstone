import React from 'react';
import clsx from 'clsx';
import './Chip.scss';
import {ChipProps} from './Chip.types';
import {Typography} from '~/components/Typography';

export const Chip: React.FC<ChipProps> = ({
    label = '',
    color = 'default',
    icon = null,
    isDisabled = false,
    className,
    ...props
}: ChipProps) => (
    <div
        className={clsx(
            'moonstone-chip',
            `moonstone-color_${color}`,
            {'moonstone-disabled': isDisabled},
            className
        )}
        {...props}
    >
        {icon && <icon.type size="small"/>}
        {label && <Typography isNowrap component="span" variant="caption" weight="semiBold">{label}</Typography>}
    </div>
);

Chip.displayName = 'Chip';
