import * as React from 'react';

export interface ButtonGroupProps {
    /**
     * Buttons grouped
     */
    children: React.ReactNode;
    /**
     * Buttons size
     */
    size?: any;
    /**
     * Button style
     */
    variant?: any;
    /**
     * Button color
     */
    color?: any;
    /**
     * Is button color reversed
     */
    isReversed?: boolean;
    /**
     * Additional classname
     */
    className?: string;
}

export const ButtonGroup: React.SFC<ButtonGroupProps>;

