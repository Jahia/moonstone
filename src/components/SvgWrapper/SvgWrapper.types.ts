import {ReactElement} from 'react';

export type SvgWrapperSize = 'small' | 'default' | 'big';
export const svgWrapperSizes = ['small', 'default', 'big'];

export type SvgWrapperProps = Omit<React.ComponentPropsWithoutRef<'svg'>, 'className'> & {
    /**
     * Svg as a string
     */
    svg: ReactElement;
    /**
     * Svg size
     */
    size?: SvgWrapperSize;
    /**
     * Extra CSS class
     */
    className?: string;
}

