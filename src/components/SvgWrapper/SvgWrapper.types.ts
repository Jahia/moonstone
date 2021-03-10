export type SvgWrapperSize = 'small' | 'default' | 'big';
export const svgWrapperSizes = ['small', 'default', 'big'];

export type ToCompProps = {
    [key: string]: number;
}

export type SvgWrapperProps = {
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

