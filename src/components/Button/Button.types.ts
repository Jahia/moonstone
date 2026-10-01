import React from 'react';

export const buttonSizes = ['small', 'default', 'big'] as const;
export type ButtonSize = typeof buttonSizes[number];

export const buttonVariants = ['default', 'ghost', 'outlined'] as const;
export type ButtonVariant = typeof buttonVariants[number];

export const buttonColors = ['default', 'accent', 'danger'] as const;
export type ButtonColor = typeof buttonColors[number];

export type ButtonProps = Omit<React.ComponentPropsWithRef<'button'>, 'className' | 'onClick' | 'color'> & {
    /**
     * Text displays inside the button
     */
    label?: React.ReactNode;

    /**
     * Size of the button
     */
    size?: ButtonSize;

    /**
     * Icon component displays before the label
     */
    icon?: React.ReactElement;

    /**
     * Icon component displays after the label
     */
    iconEnd?: React.ReactElement;

    /**
     * Style of the button
     */
    variant?: ButtonVariant;

    /**
     * Color of the button
     */
    color?: ButtonColor;

    /**
     * Whether the component should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the component should use reversed colors. Useful on a dark background
     */
    isReversed?: boolean;

    /**
     * Shows a spinner in place of the icon and disables interaction
     */
    isLoading?: boolean;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Function triggered on click
     */
    onClick?: React.MouseEventHandler;
};
