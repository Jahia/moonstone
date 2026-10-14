import React from 'react';

export type RadioItemProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'className' | 'id' | 'value' | 'onFocus' | 'onBlur'> & {
    /**
     * Id of the radio input. It also links the input to its label and description.
     */
    id: string;

    /**
     * Text of the option.
     */
    label: string;

    /**
     * Value of the option, passed to the RadioGroup's `onChange` and submitted with a form.
     */
    value: string;

    /**
     * Short explanation shown under the label.
     */
    description?: string;

    /**
     * Additional class name.
     */
    className?: string;

    /**
     * Whether the option is disabled. Ignored when the RadioGroup sets `isDisabled`.
     */
    isDisabled?: boolean;

    /**
     * Whether the option is read-only. Ignored when the RadioGroup sets `isReadOnly`.
     */
    isReadOnly?: boolean;

    /**
     * Called when the radio input gets the focus.
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Called when the radio input loses the focus.
     */
    onBlur?: React.FocusEventHandler;
};
