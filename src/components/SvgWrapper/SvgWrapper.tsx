import React from 'react';
import clsx from 'clsx';
import {SvgWrapperProps} from './SvgWrapper.types';
import {icons, reset} from '~/globals/css-utils.js';

export const SvgWrapper: React.FC<SvgWrapperProps> = ({
    svg,
    size = 'default',
    className,
    ...props
}) => {
    const {viewBox, fill, children} = svg.props;
    const css = clsx(
        reset,
        ['moonstone-icon', icons['moonstone-icon']],
        [`moonstone-icon_${size}`, icons[`moonstone-icon_${size}`]],
        svg.props.className,
        className
    );

    return (
        <svg viewBox={viewBox && viewBox} fill={fill && fill} className={css} {...props}>
            {children}
        </svg>
    );
};
