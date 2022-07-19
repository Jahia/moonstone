import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Cancel, Search} from '~/icons';
import {Button} from '~/components';
import './Input.scss';
import {InputProps, InputSizes, InputVariants} from './Input.types';

export const ControlledInput: React.FC<InputProps> = ({
    variant = InputVariants.Text,
    value = '',
    id,
    role,
    placeholder,
    isDisabled = false,
    isReadOnly = false,
    className,
    size = InputSizes.Default,
    icon,
    isShowClearButton,
    searchContext,
    onClear,
    onChange,
    onBlur,
    onFocus,
    focusOnField = false,
    ...props
}) => {
    const hasSearchContext = typeof searchContext !== 'undefined';
    const isSearch = variant === 'search' || hasSearchContext;
    const classNameProps = clsx(
        'moonstone-input',
        {'moonstone-size_big': size === InputSizes.Big || hasSearchContext},
        {'moonstone-disabled': isDisabled},
        className
    );
    const inputFilled = value !== '';
    const inputEmpty = value === '';
    const inputRef = useRef(null);


    useEffect(() => {
        if (focusOnField) {
            inputRef.current.focus({preventScroll: true});
        }
    }, [focusOnField]);

    if (isSearch) {
        icon = hasSearchContext ? null : <Search/>
        isShowClearButton = true
        role = 'search'
    }

    if (isShowClearButton && !onClear) {
        onClear = () => {
            inputRef.current.value = ""
            const inputEvent: unknown = new Event('change');
            inputRef.current.dispatchEvent(inputEvent);
            onChange(inputEvent as React.ChangeEvent<HTMLInputElement>);
        }
    }

    return (
        <div className={classNameProps}>
            {hasSearchContext &&
                (
                    <>
                        <searchContext.type
                            {...searchContext.props}
                            variant="ghost"
                            size="small"
                            className={clsx(searchContext.props.className, 'moonstone-input_search-context')}
                        />
                    </>
                )
            }
            <input
                className={
                    clsx(
                        'moonstone-input-element',
                        {'start-icon-padding': icon},
                        {'moonstone-input-element_has-search-context': hasSearchContext},
                        {'end-icon-padding': onClear}
                    )
                }
                type="text"
                role={role}
                value={value}
                id={id}
                placeholder={placeholder}
                disabled={isDisabled}
                readOnly={isReadOnly}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                ref={inputRef}
                {...props}
            />
            {icon && (
                <div
                    className={clsx(
                        'start-icon-wrap',
                        'flexRow_nowrap',
                        'alignCenter',
                        {'icon_input-filled': inputFilled},
                        {'icon_input-empty': inputEmpty}
                    )}
                >
                    <icon.type {...icon.props} focusable="false"/>
                </div>
            )}
            {onClear && inputFilled && !isDisabled && !isReadOnly && (
                <Button
                    className="end-icon-wrap flexRow_center alignCenter"
                    onClick={onClear}
                    variant="ghost"
                    icon={<Cancel/>}
                    aria-label="Reset"
                />
            )}
        </div>
    );
};

ControlledInput.displayName = 'ControlledInput';
