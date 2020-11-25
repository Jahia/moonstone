import * as React from 'react';

export type SvgWrapperSize = "small" | "default" | "big";

export interface SvgWrapperProps {
    /**
     * Svg as a string
     */
    svg: string;
    /**
     * Svg size
     */
    size?: SvgWrapperSize;
    /**
     * Extra CSS class
     */
    className?: string;
}

export const SvgWrapper: React.SFC<SvgWrapperProps>;

