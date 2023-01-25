import * as React from 'react';
import type {ButtonProps} from '~/components/Button/Button.types';
import {ButtonSize, ButtonColor, ButtonVariant} from '~/components/Button/Button.types';

export type ButtonGroupProps = React.ComponentPropsWithRef<'div'> & {
    /**
     * Buttons grouped
     */
    children: React.ReactElement<ButtonProps>[];

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
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Additional classnames
     */
    className?: string;
}
