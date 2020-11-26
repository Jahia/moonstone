import * as React from 'react';

export type ButtonSize = "small" | "default" | "big";

export type ButtonVariant = "default" | "ghost" | "outlined";

export type ButtonColor = "default" | "accent" | "danger";

export interface ButtonProps {
    /**
     * Button label
     */
    label?: React.ReactNode;
    /**
     * Does the label contain HTML markup
     */
    isHtml?: boolean;
    /**
     * Icon size
     */
    size?: ButtonSize;
    /**
     * Icon name, if it's empty the button has no icon
     */
    icon?: React.ReactElement<any>;
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
     * Function trigger on click
     */
    onClick: (...args: any[])=>any;
    /**
     * Is button color reversed
     */
    isReversed?: boolean;
    /**
     * Additional classname
     */
    className?: string;
}

export const Button: React.SFC<ButtonProps>;

