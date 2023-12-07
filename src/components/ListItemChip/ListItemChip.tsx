import React from 'react';
import clsx from 'clsx';

import type {ListItemChipProps} from './ListItemChip.types';

import {Typography} from '~/components/Typography';
import './ListItemChip.scss';

export const ListItemChip: React.FC<ListItemChipProps> = ({
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
            className={clsx('moonstone-listItemChip', {'moonstone-listItemChip_reversed': isReversed}, className)}
            {...props}
        >
            {label}
        </Typography>
    );
};

ListItemChip.displayName = 'ListItemChip';
