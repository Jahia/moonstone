import React from 'react';

type SvgWrapperSize = 'small' | 'default' | 'big';

export type SvgWrapperProps = Omit<React.ComponentPropsWithoutRef<'svg'>, 'className'> & {
    /**
     * Svg as a string
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
}

