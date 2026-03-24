import React from 'react';
import {ImgWrapperProps} from './ImgWrapper.types';
import clsx from 'clsx';
import {icons} from '~/globals/css-utils.js';

export const ImgWrapper: React.FC<ImgWrapperProps> = ({
    size = 'default',
    className = '',
    ...props
}) => {
    const classes = clsx(
        className,
        ['moonstone-icon', icons['moonstone-icon']],
        [`moonstone-icon_${size}`, icons[`moonstone-icon_${size}`]]
    );
    return (
        <img {...props} className={classes}/>
    );
};

ImgWrapper.displayName = 'ImgWrapper';
