import React from 'react';

export type BaseTextareaProps = Omit<React.ComponentPropsWithRef<'textarea'>, 'id' | 'value' | 'defaultValue' | 'onChange' | 'onFocus' | 'onBlur' | 'className'> & {
    /**
     * Required id
     */
    id?: string
    /**
     * Textarea's function onFocus
     */
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Textarea's function onBlur
     */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Textarea's placeholder
     */
    placeholder?: string
    /**
     * Whether the textarea should be disabled
     */
    isDisabled?: boolean
    /**
     * Whether the textarea should be read-only
     */
    isReadOnly?: boolean
    /**
     * Whether the textarea should be resizable
     */
    isResizable?: boolean
    /**
     * Additional classname
     */
    className?: string
}

export type ControlledProps = {
    /**
     * Textarea's value
     */
    value: string
    /**
     * Textarea's function onChange
     */
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type UncontrolledProps = {
    /**
     * Textarea's default value
     */
    defaultValue?: string
    /**
     * Textarea's function onChange
     */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type TextareaProps = BaseTextareaProps & Partial<ControlledProps> & Partial<UncontrolledProps>;
export type ControlledTextareaProps = BaseTextareaProps & ControlledProps;
export type UncontrolledTextareaProps = BaseTextareaProps & UncontrolledProps;
