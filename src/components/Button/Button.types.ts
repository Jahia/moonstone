import React from 'react';

export const buttonSizes = ['small', 'default', 'big'] as const;
export type ButtonSize = typeof buttonSizes[number];

export const buttonVariants = ['default', 'ghost', 'outlined'] as const;
export type ButtonVariant = typeof buttonVariants[number];

export const buttonColors = ['default', 'accent', 'danger'] as const;
export type ButtonColor = typeof buttonColors[number];

export type ButtonProps = Omit<React.ComponentPropsWithRef<'button'>, 'className' | 'onClick' | 'color'> & {
    /**
     * Label inside the button
     */
    label?: React.ReactNode;

    /**
     * Size of the button
     */
    size?: ButtonSize;

    /**
     * Icon component display before the label
     */
    icon?: React.ReactElement;

    /**
     * Style of the button
     */
    variant?: ButtonVariant;

    /**
     * Color of the button
     */
    color?: ButtonColor;

    /**
     * Whether the button should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Define if the button is loading
     */
     isLoading?: boolean;

    /**
     * Additional classnames
     */
    className?: string;

    /**
     * Function triggered on click
     */
    onClick?: React.MouseEventHandler;
}
