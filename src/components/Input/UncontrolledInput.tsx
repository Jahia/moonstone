import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Cancel, Search} from '~/icons';
import './Input.scss';
import {InputProps, InputSizes, InputVariants} from './Input.types';

export const UncontrolledInput: React.FC<InputProps> = ({
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
                                                focusOnField = false,
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
    const searchRef = useRef(null);

    useEffect(() => {
        if (focusOnField) {
            searchRef.current.focus({preventScroll: true});
        }
    }, [focusOnField]);

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
                role={variant === 'search' ? 'search' : null}
                value={value}
                id={id}
                placeholder={placeholder}
                disabled={isDisabled}
                readOnly={isReadOnly}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                ref={searchRef}

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
                        ? <Search focusable="false"/>
                        : <icon.type {...icon.props} focusable="false"/>
                    }
                </div>
            )}
            {onClear && inputFilled && !isDisabled && !isReadOnly && (
                <div className="end-icon-wrap flexRow_center alignCenter" onClick={onClear}>
                    <Cancel/>
                </div>
            )}
        </div>
    );
};

UncontrolledInput.displayName = 'UncontrolledInput';
