import React from 'react';
import clsx from 'clsx';
import {Cancel, Search} from '~/icons';
import './Input.scss';
import {InputProps, InputSizes, InputVariants} from './Input.types';

export const Input: React.FC<InputProps> = ({
    variant = 'text',
    value = '',
    id,
    placeholder,
    isDisabled = false,
    isReadOnly = false,
    className,
    size = InputSizes.Default,
    icon,
    onClear,
    onChange,
    onBlur,
    onFocus,
    ...props
}) => {
    const classNameProps = clsx(
        'moonstone-input',
        {'moonstone-size_big': size === InputSizes.Big},
        {'moonstone-disabled': isDisabled},
        className
    );
    const inputFilled = value !== '';
    const inputEmpty = value === '';

    return (
        <div className={classNameProps}>
            <input
                className={
                    clsx(
                        'moonstone-input-element',
                        {'start-icon-padding': icon || variant === InputVariants.Search},
                        {'end-icon-padding': onClear}
                    )
                }
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
            {(icon || variant === InputVariants.Search) && (
                <div
                    className={clsx(
                        'start-icon-wrap',
                        'flexRow_nowrap',
                        'alignCenter',
                        {'icon_input-filled': inputFilled},
                        {'icon_input-empty': inputEmpty}
                    )}
                >
                    {variant === InputVariants.Search
                        ? <Search focusable="false" />
                        : <icon.type {...icon.props} focusable="false"/>
                    }
                </div>
            )}
            {onClear && inputFilled && !isDisabled && !isReadOnly && (
                <div className="end-icon-wrap flexRow_center alignCenter" onClick={onClear}>
                    <Cancel />
                </div>
            )}
        </div>
    );
};

Input.displayName = 'Input';
