export type SvgWrapperSize = 'small' | 'default' | 'big';
export const svgWrapperSize = ['small', 'default', 'big'];

export type ToCompProps = {
    [key: string]: number;
}

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

