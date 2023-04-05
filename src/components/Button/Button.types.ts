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
     * Optional icon element to render on the left of the label or without label
     */
    icon?: React.ReactElement;

    /**
     * Optional icon element to render on the right of the label, it's only display when a label is provided
     */
    iconEnd?: React.ReactElement;

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
