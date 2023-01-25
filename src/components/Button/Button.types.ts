import React from 'react';

export type ButtonSize = 'small' | 'default' | 'big';
export const buttonSizes = ['small', 'default', 'big'];

export type ButtonVariant = 'default' | 'ghost' | 'outlined';
export const buttonVariants = ['default', 'ghost', 'outlined'];

export type ButtonColor = 'default' | 'accent' | 'danger';
export const buttonColors = ['default', 'accent', 'danger'];

export type ButtonProps = React.ComponentPropsWithRef<'button'> & {
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
