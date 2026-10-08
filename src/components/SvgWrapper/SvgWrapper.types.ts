import React from 'react';

type SvgWrapperSize = 'small' | 'default' | 'big';

export type SvgWrapperProps = Omit<React.ComponentPropsWithoutRef<'svg'>, 'className'> & {
    /**
     * The SVG element to render.
     */
    svg: React.ReactElement;
    /**
     * Svg size
     */
    size?: SvgWrapperSize;
    /**
     * Additional classname
     */
    className?: string;
};
