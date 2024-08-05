import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Cancel, ChevronDown} from '~/icons';
import {Button} from '~/components';
import './BaseInput.scss';
import type {ControlledBaseInputProps} from './BaseInput.types';

export const ControlledBaseInput: React.FC<ControlledBaseInputProps> = ({
    value = '',
    id,
    role,
    placeholder,
    isDisabled = false,
    isReadOnly = false,
    className,
    size = 'default',
    icon,
    variant = 'outlined',
    isShowClearButton,
    isShowTriggerButton,
    triggerButtonIcon = <ChevronDown/>,
    prefixComponents,
    onClick,
    onKeyPress,
    onTrigger,
    onClear,
    onChange,
    onBlur,
    onFocus,
    focusOnField = false,
    ...props
}) => {
    const isFilled = value !== '';
    const inputRef = useRef(null);
    const classNameProps = clsx('moonstone-baseInput', `moonstone-${size}`, `moonstone-${variant}`, className);

    useEffect(() => {
        if (focusOnField) {
            inputRef.current.focus({preventScroll: true});
        }
    }, [focusOnField]);

    if (isShowClearButton && !onClear) {
        onClear = () => {
            inputRef.current.value = '';
            const inputEvent: unknown = new Event('change');
            inputRef.current.dispatchEvent(inputEvent);
            onChange(inputEvent as React.ChangeEvent<HTMLInputElement>);
        };
    }

    return (
        <div className={classNameProps} onClick={onClick}>
            {icon && (
                <div
                    className={clsx(
                        'moonstone-baseInput_icon',
                        'flexRow_nowrap',
                        'alignCenter'
                    )}
                >
                    <icon.type {...icon.props} focusable="false"/>
                </div>
            )}
            <div className="flexRow alignCenter flexFluid moonstone-baseInput_elementsWrapper">
                {prefixComponents}
                <input
                    ref={inputRef}
                    className={clsx('moonstone-baseInput-element', `moonstone-${size}`)}
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
                    onKeyPress={onKeyPress}
                    {...props}
                />
            </div>
            {onClear && isFilled && !isDisabled && !isReadOnly && (
                <Button
                    className="moonstone-baseInput_clearButton flexRow_center alignCenter"
                    variant="ghost"
                    icon={<Cancel/>}
                    aria-label="Reset"
                    onClick={onClear}
                />
            )}
            {isShowTriggerButton && (
                <Button
                    className="moonstone-baseInput_clearButton flexRow_center alignCenter"
                    variant="ghost"
                    icon={triggerButtonIcon}
                    aria-label="Open"
                    onClick={onTrigger}
                />
            )}
        </div>
    );
};

ControlledBaseInput.displayName = 'ControlledBaseInput';
