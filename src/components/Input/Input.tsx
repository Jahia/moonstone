import React, {FunctionComponent} from 'react';
import classnames from "clsx";

type TInputVariant = 'text' | 'number' | 'search';

export enum InputVariant {
    TEXT = 'text',
    SEARCH = 'search'
}

type TInputHeight = 'default' | 'dense';

export enum InputHeight {
    DEFAULT = 'default',
    DENSE = 'dense'
}

interface IInputProps {
    variant?: TInputVariant;
    value?: string;
    id?: string,
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    className?: string;
    height?: TInputHeight;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    width?: number;
    fullWidth?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input: FunctionComponent<IInputProps> =
    ({
        variant = 'text',
        value = '',
        id,
        placeholder,
        disabled = false,
        readOnly = false,
        className,
        height = InputHeight.DEFAULT,
        iconStart,
        iconEnd,
        width,
        fullWidth = true,
        onChange,
        onBlur,
        onFocus,
    }) => {
    const classNameProps = classnames(className);

    return (
        <input
            type={variant}
            value={value}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            className={classNameProps}
            height={height}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

Input.displayName = 'Input';
