import * as React from 'react';
import {ButtonSize, ButtonColor, ButtonVariant} from '~/components/Button/Button.types';

export type ButtonGroupProps = React.ComponentPropsWithRef<'div'> & {
    /**
     * Buttons grouped
     */
    children: React.ReactNode;
    /**
     * Buttons size
     */
    size?: ButtonSize;
    /**
     * Button style
     */
    variant?: ButtonVariant;
    /**
     * Button color
     */
    color?: ButtonColor;
    /**
     * Is button color reversed
     */
    isReversed?: boolean;
    /**
     * Additional classname
     */
    // className?: string;
}
