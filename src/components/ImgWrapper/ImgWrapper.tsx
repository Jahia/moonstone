import clsx from 'clsx';
import React from 'react';

import { icons } from '~/globals/css-utils.js';
import { warnOnce } from '~/utils/warnOnce';

import type { ImgWrapperProps } from './ImgWrapper.types';

export const ImgWrapper: React.FC<ImgWrapperProps> = ({
    alt,
    size = 'default',
    className,
    ...props
}) => {
    if (alt === undefined) {
        warnOnce('ImgWrapper.alt', 'The ImgWrapper component needs an `alt` prop: a text alternative, or an empty string for a decorative image.');
    }

    const classes = clsx(
        className,
        ['moonstone-icon', icons['moonstone-icon']],
        [`moonstone-icon_${size}`, icons[`moonstone-icon_${size}`]],
    );
    return (
        <img {...props} alt={alt} className={classes}/>
    );
};

ImgWrapper.displayName = 'ImgWrapper';
