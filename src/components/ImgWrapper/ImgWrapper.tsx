import clsx from 'clsx';
import React from 'react';

import { icons } from '~/globals/css-utils.js';

import type { ImgWrapperProps } from './ImgWrapper.types';

export const ImgWrapper: React.FC<ImgWrapperProps> = ({
    size = 'default',
    className = '',
    ...props
}) => {
    const classes = clsx(
        className,
        ['moonstone-icon', icons['moonstone-icon']],
        [`moonstone-icon_${size}`, icons[`moonstone-icon_${size}`]],
    );
    return (
        // oxlint-disable-next-line jsx-a11y/alt-text
        <img {...props} className={classes}/>
    );
};

ImgWrapper.displayName = 'ImgWrapper';
