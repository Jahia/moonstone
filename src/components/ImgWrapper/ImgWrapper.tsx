import React from 'react';
import {ImgWrapperProps} from './ImgWrapper.types';

export const ImgWrapper: React.FC<ImgWrapperProps> = ({
    size = 'default',
    className = '',
    ...props
}) => {
    const classes = className + ' moonstone-icon moonstone-icon_' + size;
    return (
        <img {...props} className={classes}/>
    );
};

ImgWrapper.displayName = 'ImgWrapper';
