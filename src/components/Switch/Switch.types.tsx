import * as React from 'react';

export type SwitchProps = {
    /**
     * Whether the switch should be checked (controlled)
     */
    checked?: boolean;

    /**
     * Whether the switch should be checked - default value (uncontrolled)
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
     * Additional classname(s)
     */
    className?: string;

    /**
     * Whether the switch should be disabled
     */
    isDisabled?: boolean;

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
