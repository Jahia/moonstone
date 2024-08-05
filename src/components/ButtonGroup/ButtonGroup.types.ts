import * as React from 'react';
import type {ButtonSize, ButtonColor, ButtonVariant} from '~/components/Button/Button.types';

export type ButtonGroupProps = Omit<React.ComponentPropsWithRef<'div'>, 'children' | 'className'> & {
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
    className?: string;
}
