import React from 'react';
import {SvgWrapperProps} from './SvgWrapper.types';

export const SvgWrapper: React.FC<SvgWrapperProps> = initialProps => {
    const {svg, size, ...props} = initialProps;
    const {viewBox, fill, children} = svg.props;
    props.className = initialProps.className + ' moonstone-icon moonstone-icon_' + size;
    return (
        <svg viewBox={viewBox && viewBox} fill={fill && fill} {...props}>
            {children}
        </svg>
    );
};

SvgWrapper.defaultProps = {
    size: 'default',
    className: ''
};
