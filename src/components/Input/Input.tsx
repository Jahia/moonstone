import React, {FunctionComponent, InputHTMLAttributes, useState} from 'react';
import classnames from "clsx";

import {Cancel, Search} from '~/icons';
import './Input.scss';

type TInputVariant = 'text' | 'search';

export enum InputVariant {
    TEXT = 'text',
    SEARCH = 'search'
}

type TInputSize = 'default' | 'big';

export enum InputSize {
    DEFAULT = 'default',
    BIG = 'big'
}

interface IInputProps {
    /**
     * Variant of the input to use
     */
    variant?: TInputVariant;
    /**
     * Value to exist in the input field
     */
    value?: string;
    /**
     * ID of the input
     */
    id?: string,
    /**
     * Initial placeholder text to appear in the input field
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
     * Any additional custom classes to apply to the component
     */
    className?: string;
    /**
     * Whether the size of the input should be default or big
     */
    size?: TInputSize;
    /**
     * Which icon to use at the beginning of the input
     */
    icon?: React.ReactElement;
    /**
     * Function - when passed in, the Cancel icon appears at the end of the input and its click event is passed back when the Cancel icon is clicked
     */
    onClear?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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

export const Input: FunctionComponent<IInputProps> =
    ({
        variant = 'text',
        value = '',
        id,
        placeholder,
        isDisabled = false,
        isReadOnly = false,
        className,
        size = InputSize.DEFAULT,
        icon,
        onClear,
        onChange,
        onBlur,
        onFocus,
        ...props
    }) => {
    const classNameProps = classnames(
        'moonstone-input',
        {'moonstone-size_big': size === 'big'},
        {'moonstone-readOnly': isReadOnly},
        {'moonstone-disabled': isDisabled},
        className
    );

    return (
        <div className={classNameProps}>
            {(icon && variant === "text") && (
                <div className="start-icon-wrap flexRow_nowrap alignCenter">
                    <icon.type {...icon.props} className="moonstone-input-icon_start" focusable="false"/>
                </div>
            )}
            {variant === "search" && (
                <div className="start-icon-wrap flexRow_nowrap alignCenter">
                    <Search focusable="false" />
                </div>
            )}
            {onClear && !isDisabled && (
                <div className="end-icon-wrap flexRow_center alignCenter" onClick={onClear}>
                    <Cancel />
                </div>
            )}
            <input
                className={classnames("moonstone-input-element")}
                type="text"
                value={value}
                id={id}
                placeholder={placeholder}
                disabled={isDisabled}
                readOnly={isReadOnly}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                {...props}
            />
        </div>
    );
};

Input.displayName = 'Input';
