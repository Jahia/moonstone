import React from 'react';
import {ButtonSize, ButtonVariant, ButtonColor} from '~/shared-types/button.types';

export type ButtonProps = {
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
     * Additional classname
     */
    className?: string;

    /**
     * Function trigger on click
     */
    onClick: React.MouseEventHandler;
}
