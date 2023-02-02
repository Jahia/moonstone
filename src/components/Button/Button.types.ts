import React from 'react';

export type ButtonSize = 'small' | 'default' | 'big';
export const buttonSizes = ['small', 'default', 'big'];

export type ButtonVariant = 'default' | 'ghost' | 'outlined';
export const buttonVariants = ['default', 'ghost', 'outlined'];

export type ButtonColor = 'default' | 'accent' | 'danger';
export const buttonColors = ['default', 'accent', 'danger'];

export type ButtonProps = {
    /**
     * Button label
     */
    label?: React.ReactNode;

    /**
     * Icon size
     */
    size?: ButtonSize;

    /**
     * Icon component, if it's empty the button has no icon
     */
    icon?: React.ReactElement;

    /**
     * Button style
     */
    variant?: ButtonVariant;

    /**
     * Button color
     */
    color?: ButtonColor;

    /**
     * Is button disabled
     */
    isDisabled?: boolean;

    /**
     * Is button color reversed
     */
    isReversed?: boolean;

    /**
     * Is button loading
     */
     isLoading?: boolean;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;
}
