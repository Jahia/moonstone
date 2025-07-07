import React from 'react';
import clsx from 'clsx';

import type {TagProps} from './Tag.types';

import './Tag.scss';
import {Typography} from '~/components/Typography';

export const Tag: React.FC<TagProps> = ({label, value, size = 'medium', onClick, className, isDisabled = false, ...props}) => (
    <button
        type="button"
        className={clsx('moonstone-tag', className, {'moonstone-small': size === 'small'})}
        onClick={e => onClick(e, value)}
        disabled={isDisabled}
        {...props}
    >
        {label && <Typography isNowrap component="span" variant="caption">{label}</Typography>}
    </button>
);

Tag.displayName = 'Tag';
