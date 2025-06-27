import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Cancel} from '~/icons';
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
    prefixComponents,
    onClick,
    onKeyPress,
    onKeyUp,
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
        <div className={classNameProps} role={role} onClick={onClick}>
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
                    value={value}
                    role={role === 'search' && 'searchbox'}
                    id={id}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyPress={e => {
                        console.warn('onKeyPress is deprecated and will be removed in a future release. You should use onKeyUp instead.');
                        if (typeof onKeyPress === 'function') {
                            onKeyPress(e);
                        }
                    }}
                    onKeyUp={onKeyUp}
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
        </div>
    );
};

ControlledBaseInput.displayName = 'ControlledBaseInput';
