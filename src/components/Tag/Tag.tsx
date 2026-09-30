import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';
import { Close } from '~/icons';

import type { TagProps } from './Tag.types';

import styles from './Tag.module.scss';

export const Tag: React.FC<TagProps> = ({
    label, value, size = 'medium', onClick, className, isDisabled = false, ...props
}) => (
    <button
        disabled={isDisabled}
        className={clsx(
            ['moonstone-tag', styles['moonstone-tag']],
            className,
            size === 'small' && ['moonstone-small', styles['moonstone-small']],
        )}
        type="button"
        onClick={e => onClick(e, value)}
        {...props}
    >
        {label && <Typography isNowrap component="span" variant="caption">{label}</Typography>}
        <Close aria-hidden className={clsx('moonstone-tag_icon', styles['moonstone-tag_icon'])} size={size === 'small' ? 'small' : 'default'}/>
    </button>
);

Tag.displayName = 'Tag';
