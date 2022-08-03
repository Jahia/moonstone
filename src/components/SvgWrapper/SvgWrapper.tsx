import React from 'react';
import clsx from 'clsx';
import {SvgWrapperProps} from './SvgWrapper.types';

export const SvgWrapper: React.FC<SvgWrapperProps> = ({
    svg,
    size = 'default',
    className,
    ...props
}) => {
    const {viewBox, fill, children} = svg.props;
    const css = clsx('moonstone-icon moonstone-icon_' + size, svg.props.className, className);

    return (
        <svg viewBox={viewBox && viewBox} fill={fill && fill} className={css} {...props}>
            {children}
        </svg>
    );
};
