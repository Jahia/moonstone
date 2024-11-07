import * as React from 'react';
import type {ButtonProps, ButtonSize, ButtonColor, ButtonVariant} from '~/components/Button/Button.types';

export type ButtonGroupProps = Omit<React.ComponentPropsWithRef<'div'>, 'children' | 'className'> & {
    /**
     * Buttons grouped
     */
    children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
    /**
     * Size of the button
     */
    size?: ButtonSize;
    /**
     * Style of the button
     */
    variant?: ButtonVariant;
    /**
     * Color of the button
     */
    color?: ButtonColor;
    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;
    /**
     * Additional classname
     */
    className?: string;
}
