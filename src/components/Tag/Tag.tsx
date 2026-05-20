import React from 'react';
import clsx from 'clsx';

import type {TagProps} from './Tag.types';

import styles from './Tag.module.scss';
import {Typography} from '~/components/Typography';
import {Close} from '~/icons';
import {reset} from '~/globals/css-utils.js';

export const Tag: React.FC<TagProps> = ({label, value, size = 'medium', onClick, className, isDisabled = false, ...props}) => (
    <button
        type="button"
        className={clsx(
            reset,
            ['moonstone-tag', styles['moonstone-tag']],
            className,
            size === 'small' && ['moonstone-small', styles['moonstone-small']]
        )}
        disabled={isDisabled}
        onClick={e => onClick(e, value)}
        {...props}
    >
        {label && <Typography isNowrap component="span" variant="caption">{label}</Typography>}
        <Close aria-hidden size={size === 'small' ? 'small' : 'default'} className={clsx('moonstone-tag_icon', styles['moonstone-tag_icon'])}/>
    </button>
);

Tag.displayName = 'Tag';
