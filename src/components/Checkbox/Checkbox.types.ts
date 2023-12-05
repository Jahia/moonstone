import React from 'react';

export type CheckboxProps = {
    /**
     * Identifier added to the input element
     */
    id?: string;

    /**
     * Whether the checkbox should be checked (controlled)
     */
    checked?: boolean;

    /**
     * Whether the checkbox should be indeterminate (controlled)
     */
    indeterminate?: boolean;

    /**
     * Whether the checkbox should be checked - default value (uncontrolled)
     */
    defaultChecked?: boolean;

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
     * Additional classname(s)
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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string, checked: boolean) => void;

    /**
     * Function triggered on focus of the checkbox value
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the checkbox value loses focus
     */
    onBlur?: React.FocusEventHandler;
}
