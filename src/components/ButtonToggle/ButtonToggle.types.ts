import React from 'react';

export type ButtonToggleSize = 'default' | 'big';
export const buttonToggleSizes = ['default', 'big'];

type BasicProps = {
    /**
     * Button label
     */
    label?: React.ReactNode;

    /**
     * Icon size
     */
    size?: ButtonToggleSize;

    /**
     * Optional icon element to render on the left of the label or without label
     */
    iconStart?: React.ReactElement;

    /**
     * Optional icon element to render on the right of the label, it's only display when a label is provided
     */
    iconEnd?: React.ReactElement;

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
     * Function trigger on change
     */
    onChange?: (event: React.MouseEvent, isPressed: boolean) => void;

    /**
     * Function trigger on click
     */
    onClick?: React.MouseEventHandler;
};

type ControlledProps = {
    /**
     * Is button pressed
     */
    isPressed: boolean;
};

type UncontrolledProps = {
    /**
     * Is button pressed by default
     */
    defaultPressed?: boolean;
};

export type ButtonToggleProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledButtonToggleProps = BasicProps & ControlledProps;
export type UncontrolledButtonToggleProps = BasicProps & UncontrolledProps;
