import React from 'react';
import clsx from 'clsx';

import type {TagProps} from './Tag.types';

import './Tag.scss';
import {Typography} from '~/components/Typography';

export const Tag: React.FC<TagProps> = ({label, value, size = 'medium', onClick, className, ...props}) => (
    <button
        type="button"
        className={clsx('moonstone-tag', className, {'moonstone-small': size === 'small'})}
        onClick={e => onClick(e, value)}
        {...props}
    >
        {label && <Typography isNowrap component="span" variant="caption">{label}</Typography>}
    </button>
);

Tag.displayName = 'Tag';
