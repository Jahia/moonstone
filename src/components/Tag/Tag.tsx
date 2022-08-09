import React from 'react';
import clsx from 'clsx';

import type {TagProps} from './Tag.types';

import './Tag.scss';
import {Typography} from '~/components/Typography';

export const Tag: React.FC<TagProps> = ({
    label,
    value,
    onClick,
    className,
    ...props
}) => (
    <button
        type="button"
        className={clsx('moonstone-tag', className)}
        onClick={e => onClick(e, {label: label, value: value})}
        {...props}
    >
        {label && <Typography isNowrap component="span" variant="body">{label}</Typography>}
    </button>
);

Tag.displayName = 'Tag';
