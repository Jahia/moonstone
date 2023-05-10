import React from 'react';

type ControlledProps = {
    /**
     * Value to exist in the input field. Define the component as controlled when it set. (Controlled)
     */
    value: string;
}

type UncontrolledProps = {
    /**
     * Default value when the component is rendered (Uncontrolled)
     */
    defaultValue?: string;
}

type BasicProps = Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'value' | 'role' | 'placeholder' | 'className'> & {
    /**
     * ID of the input
     */
    // id?: string,

    /**
     * Role of the input
     */
    role?: string,

    /**
     * Placeholder text when there is no value
     */
    placeholder?: string;

    /**
     * Whether the input should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the input should be read-only. It's still submittable.
     */
    isReadOnly?: boolean;

    /**
     * Whether the input should be focused when displayed.
     */
    focusOnField?: boolean;

    /**
     * Additional classnames
     */
    className?: string;

    /**
     * Size of the input
     */
    size?: 'default' | 'big';

    /**
     * Which icon to use at the beginning of the input
     */
    icon?: React.ReactElement;

    /**
     * Which icon to use at the beginning of the input
     * @deprecatedValues 'text' and 'search' use specific component instead
     */
    variant?: 'text' | 'search' | 'outlined' | 'ghost';

    /**
     * Whether the input should have a clear button. If onClear is not specified, clear button will set the value to empty value
     */
    isShowClearButton?: boolean;

    /**
     * Whether the input should have a trigger button.
     */
    isShowTriggerButton?: boolean;

    /**
     * Trigger button icon
     */
    triggerButtonIcon?: React.ReactElement;

    /**
     * Component
     */
    prefixComponents?: React.ReactElement[];

    /**
     * Function
     */
    onClick?: React.MouseEventHandler;

    /**
     * Function
     */
    onKeyPress?: React.KeyboardEventHandler;

    /**
     * Function - when passed in, the Cancel icon appears at the end of the input and its click event is passed back when the Cancel icon is clicked
     */
    onClear?: React.MouseEventHandler;

    /**
     * Function
     */
    onTrigger?: React.MouseEventHandler;

    /**
     * Function triggered on change of the input value
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Function triggered on blur of the input (i.e., focussing away from the input)
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    /**
     * Function triggered on focus of the input
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export type BaseInputProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;

export type ControlledBaseInputProps = BasicProps & ControlledProps;

export type UncontrolledBaseInputProps = BasicProps & UncontrolledProps;
