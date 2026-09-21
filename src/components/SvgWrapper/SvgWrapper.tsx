import clsx from 'clsx';
import React from 'react';

import { icons } from '~/globals/css-utils.js';

import type { SvgWrapperProps } from './SvgWrapper.types';

export const SvgWrapper: React.FC<SvgWrapperProps> = ({
    svg,
    size = 'default',
    className,
    ...props
}) => {
    const { viewBox, fill, children } = svg.props;
    const css = clsx(
        ['moonstone-icon', icons['moonstone-icon']],
        [`moonstone-icon_${size}`, icons[`moonstone-icon_${size}`]],
        svg.props.className,
        className,
    );

    return (
        <svg className={css} fill={fill} viewBox={viewBox} {...props}>
            {children}
        </svg>
    );
};
