import React from 'react';

type BasicProps = Omit<React.ComponentPropsWithRef<'input'>, 'onChange' | 'value' | 'className'> & {
    /**
     * The value of the input element, used when submitting an HTML form
     */
    value?: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Whether the component should be disabled
     */
    isDisabled?: boolean;

    /**
     * Function triggered on change
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void;
}

type ControlledProps = {
    /**
     * Whether the component should be checked (controlled)
     */
    checked?: boolean;
}

type UncontrolledProps = {
    /**
     * Whether the component should be checked - default value (uncontrolled)
     */
    defaultChecked?: boolean;
}

export type SwitchProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledSwitchProps = BasicProps & ControlledProps;
export type UncontrolledSwitchProps = BasicProps & UncontrolledProps;
