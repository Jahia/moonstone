import React from 'react';

type ControlledProps = {
    /**
     * Whether the checkbox should be checked. Must be used in conjunction with onChange. Define the component as controlled when it set (controlled)
     */
    checked: boolean;

    /**
     * Whether the checkbox should be indeterminate (controlled)
     */
    indeterminate?: boolean;
};

type UncontrolledProps = {
    /**
     * Whether the checkbox should be checked - default value (uncontrolled)
     */
    defaultChecked?: boolean;
};

type BasicProps = React.ComponentPropsWithRef<'input'> & {
    /**
     * Identifier added to the input element
     */
    id?: string;

    /**
     * The value of the input element, used when submitting an HTML form
     */
    value?: string;

    /**
     * The name of the input element, used when submitting an HTML form
     */
    name?: string;

    /**
     * Checkbox size
     */
    size?: 'default' | 'big';

    /**
     * Additional classnames
     */
    className?: string;

    /**
     * Whether the checkbox should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the checkbox can be selected but not changed by the user
     */
    isReadOnly?: boolean;

    /**
     * Function triggered on change of the checkbox value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Function triggered on focus of the checkbox value
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the checkbox value loses focus
     */
    onBlur?: React.FocusEventHandler;
}

export type CheckboxProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;

export type ControlledCheckboxProps = BasicProps & ControlledProps;

export type UncontrolledCheckboxProps = BasicProps & UncontrolledProps;
