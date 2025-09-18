import React, {useCallback, useEffect, useRef} from 'react';
import clsx from 'clsx';
import {Cancel} from '~/icons';
import {Button} from '~/components';
import './BaseInput.scss';
import type {ControlledBaseInputProps} from './BaseInput.types';

const ControlledBaseInput = React.forwardRef<HTMLInputElement, ControlledBaseInputProps>(({
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
    postfixComponents,
    onClick,
    onKeyPress,
    onKeyUp,
    onClear,
    onChange,
    onBlur,
    onFocus,
    focusOnField = false,
    ...props
}, ref) => {
    const isFilled = value !== '';
    const inputRef = useRef<HTMLInputElement>(null);
    const classNameProps = clsx('moonstone-baseInput', `moonstone-${size}`, `moonstone-${variant}`, className);
    let handleClear = onClear || null;

    useEffect(() => {
        if (focusOnField && !isDisabled && !isReadOnly) {
            inputRef.current.focus({preventScroll: true});
        }
    }, [focusOnField, isDisabled, isReadOnly]);

    // Merging refs because SearchInput needs inputRef but NumberInput needs ref
    const finalRef = useCallback((el: HTMLInputElement | null) => {
        inputRef.current = el;

        if (ref) {
            (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
        }
    }, [ref]);

    if (isShowClearButton && !onClear) {
        handleClear = () => {
            inputRef.current.value = '';
            const inputEvent: unknown = new Event('change');
            inputRef.current.dispatchEvent(inputEvent as Event);
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
                    ref={finalRef}
                    className={clsx('moonstone-baseInput-element', `moonstone-${size}`)}
                    type="text"
                    value={value}
                    role={role === 'search' ? 'searchbox' : undefined}
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
                {postfixComponents}
            </div>
            { handleClear && isFilled && !isDisabled && !isReadOnly && (
                <Button
                    className="moonstone-baseInput_clearButton flexRow_center alignCenter"
                    variant="ghost"
                    icon={<Cancel/>}
                    aria-label="Reset"
                    onClick={e => handleClear(e)}
                />
            )}
        </div>
    );
});

ControlledBaseInput.displayName = 'ControlledBaseInput';
export {ControlledBaseInput};
