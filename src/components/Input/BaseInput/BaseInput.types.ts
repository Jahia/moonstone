import React from 'react';

type BasicBaseInputProps = Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'value' | 'role' | 'placeholder' | 'className'> & {
    /**
     * ID of the input
     */
    id?: string,

    /**
     * Role of the input
     */
    role?: string,

    /**
     * Initial placeholder text to appear in the input field
     */
    placeholder?: string;

    /**
     * Whether the component should be disabled
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
     * Additional classname
     */
    className?: string;

    /**
     * Whether the size of the input should be default or big
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
     * Component(s) to render before the input field.
     */
    prefixComponents?: React.ReactElement[];

    /**
     * Component(s) to render after the input field.
     */
    postfixComponents?: React.ReactElement[];

    /**
     * Function
     */
    onClick?: React.MouseEventHandler;

    /**
     * @deprecated onKeyPress is deprecated and will be removed in a future release. You should use onKeyUp instead.
     */
    onKeyPress?: React.KeyboardEventHandler;

    /**
     * Function
     */
    onKeyUp?: React.KeyboardEventHandler;

    /**
     * Function - when passed in, the Cancel icon appears at the end of the input and its click event is passed back when the Cancel icon is clicked
     */
    onClear?: React.MouseEventHandler;

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

    /**
     * Function to use to filter the value
     */
    filterFunction?: (...args: unknown[]) => string;

    /**
     * Allows input value to be negative
     */
    allowNegative?: boolean;

    /**
     * Allows input value to be decimal
     */
    allowDecimal?: boolean;

    /**
     * Character to use as a separator
     */
    separator?: '.' | ',';
}

export type BaseInputProps = BasicBaseInputProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledBaseInputProps = BasicBaseInputProps & ControlledProps;
export type UncontrolledBaseInputProps = BasicBaseInputProps & UncontrolledProps;
