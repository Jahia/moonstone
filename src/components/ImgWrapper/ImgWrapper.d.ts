import * as React from 'react';

export type ImgWrapperSize = "small" | "default" | "big";

export interface ImgWrapperProps {
    /**
     * Image URL
     */
    src: string;
    /**
     * Image size
     */
    size?: ImgWrapperSize;
    /**
     * Extra CSS class
     */
    className?: string;
}

export const ImgWrapper: React.SFC<ImgWrapperProps>;

