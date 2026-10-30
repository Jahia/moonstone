import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';
import { Close } from '~/icons';

import type { TagProps } from './Tag.types';

import styles from './Tag.module.scss';

export const Tag: React.FC<TagProps> = ({
    label, value, size = 'medium', onClick, onKeyDown, className, isDisabled, ...props
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
        onKeyDown={(e) => {
            onKeyDown?.(e);
            // Delete and Backspace remove the tag: a native click keeps onClick's MouseEvent signature
            const isRemoveKey = e.key === 'Delete' || e.key === 'Backspace';
            const hasModifier = e.shiftKey || e.ctrlKey || e.metaKey || e.altKey;
            if (!e.defaultPrevented && isRemoveKey && !hasModifier && !e.repeat) {
                e.preventDefault();
                e.currentTarget.click();
            }
        }}
        {...props}
    >
        {label && <Typography isNowrap component="span" variant="caption">{label}</Typography>}
        <Close className={clsx('moonstone-tag_icon', styles['moonstone-tag_icon'])} size={size === 'small' ? 'small' : 'default'}/>
    </button>
);

Tag.displayName = 'Tag';
