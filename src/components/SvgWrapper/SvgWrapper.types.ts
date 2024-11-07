import {ReactElement} from 'react';

type SvgWrapperSize = 'small' | 'default' | 'big';

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
     * Additional classname
     */
    className?: string;
}

