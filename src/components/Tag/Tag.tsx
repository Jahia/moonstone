import React from 'react';
import clsx from 'clsx';

import type {TagProps} from './Tag.types';

import './Tag.scss';
import {Typography} from '~/components/Typography';
import {Close} from '~/icons';

export const Tag: React.FC<TagProps> = ({label, value, size = 'medium', onClick, className, isDisabled = false, ...props}) => (
    <button
        type="button"
        className={clsx('moonstone-tag', className, {'moonstone-small': size === 'small'})}
        disabled={isDisabled}
        onClick={e => onClick(e, value)}
        {...props}
    >
        {label && <Typography isNowrap component="span" variant="caption">{label}</Typography>}
        <Close aria-hidden size={size === 'small' ? 'small' : 'default'} className="moonstone-tag_icon"/>
    </button>
);

Tag.displayName = 'Tag';
