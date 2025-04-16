import React from 'react';

export type BasicCheckboxProps = Omit<React.ComponentPropsWithRef<'input'>, 'value' | 'onChange' | 'onFocus' | 'onBlur' | 'checked' | 'className' | 'size'> & {
    /**
     * The value of the input element, used when submitting an HTML form
     */
    value?: string;

    /**
     * Size of the Checkbox
     */
    size?: 'default' | 'big';

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Whether the component should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the checkbox can be selected but not changed by the user
     */
    isReadOnly?: boolean;

    /**
     * Function triggered on focus of the checkbox value
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the checkbox value loses focus
     */
    onBlur?: React.FocusEventHandler;
}

type ControlledProps = {
    /**
     * Whether the checkbox should be checked. Must be used in conjunction with onChange. Define the component as controlled when it set (controlled)
     */
    checked: boolean;

    /**
     * Function triggered on change of the checkbox value
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void;

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

    /**
     * Function triggered on change of the checkbox value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void;
};

export type CheckboxProps = BasicCheckboxProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledCheckboxProps = BasicCheckboxProps & ControlledProps;
export type UncontrolledCheckboxProps = BasicCheckboxProps & UncontrolledProps;
