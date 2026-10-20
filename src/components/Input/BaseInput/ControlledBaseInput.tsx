import { useMergeRefs } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

import { Button } from '~/components';
import { layout } from '~/globals/css-utils.js';
import { Cancel } from '~/icons';

import type { ControlledBaseInputProps } from './BaseInput.types';

import styles from './BaseInput.module.scss';

const ControlledBaseInput = React.forwardRef<HTMLInputElement, ControlledBaseInputProps>(({
    value,
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
    i18n,
    prefixComponents,
    postfixComponents,
    onClick,
    onKeyPress,
    onKeyDown,
    onKeyUp,
    onClear,
    onChange,
    onBlur,
    onFocus,
    focusOnField = false,
    ...props
}, ref) => {
    const isFilled = value !== '';
    const classNameProps = clsx(
        ['moonstone-baseInput', styles['moonstone-baseInput']],
        [`moonstone-${size}`, size === 'big' && styles[`moonstone-${size}`]],
        [`moonstone-${variant}`, variant === 'outlined' && styles[`moonstone-${variant}`]],
        className,
    );

    useEffect(() => {
        if (focusOnField && !isDisabled && !isReadOnly && ref && typeof ref === 'object') {
            ref.current.focus({ preventScroll: true });
        }
    }, [focusOnField, isDisabled, isReadOnly, ref]);

    if (isShowClearButton && !onClear && ref && typeof ref === 'object') {
        onClear = () => {
            ref.current.value = '';
            const inputEvent: unknown = new Event('change');
            ref.current.dispatchEvent(inputEvent as Event);
            onChange(inputEvent as React.ChangeEvent<HTMLInputElement>);
        };
    }

    // DateTimeInput forwards a callback ref, so the input is reached through an inner one
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs([inputRef, ref]);
    const pressedKeys = useRef(new Set<string>());

    const handleClear: React.MouseEventHandler = (e) => {
        onClear(e);
        // Unless onClear moved it, focus goes back to the field
        if (document.activeElement === e.currentTarget) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={classNameProps} role={role} onClick={onClick}>
            {icon && (
                <div
                    className={clsx(
                        ['moonstone-baseInput_icon', styles['moonstone-baseInput_icon']],
                        ['flexRow_nowrap', layout.flexRow_nowrap],
                        ['alignCenter', layout.alignCenter],
                    )}
                >
                    <icon.type {...icon.props} focusable="false"/>
                </div>
            )}
            <div
                className={clsx(
                    ['flexRow', layout.flexRow],
                    ['alignCenter', layout.alignCenter],
                    ['flexFluid', layout.flexFluid],
                    ['moonstone-baseInput_elementsWrapper', styles['moonstone-baseInput_elementsWrapper']],
                )}
            >
                {prefixComponents}
                <input
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    className={clsx(
                        ['moonstone-baseInput-element', styles['moonstone-baseInput-element']],
                        [`moonstone-${size}`, size === 'big' && styles[`moonstone-${size}`]],
                    )}
                    id={id}
                    placeholder={placeholder}
                    ref={mergedRef}
                    role={role === 'search' ? 'searchbox' : undefined}
                    type="text"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFocus={onFocus}
                    onKeyDown={(e) => {
                        pressedKeys.current.add(e.key);
                        onKeyDown?.(e);
                    }}
                    onKeyUp={(e) => {
                        // Pressed elsewhere, e.g. Enter on the clear button, which moves focus here on keydown
                        if (!pressedKeys.current.delete(e.key)) {
                            return;
                        }

                        if (onKeyPress) {
                            console.warn('onKeyPress is deprecated and will be removed in a future release. You should use onKeyUp instead.');
                            onKeyPress(e);
                        }

                        onKeyUp?.(e);
                    }}
                    {...props}
                />
                {postfixComponents}
            </div>
            { onClear && isFilled && !isDisabled && !isReadOnly && (
                <Button
                    aria-label={i18n?.clearButton || 'Reset'}
                    className={clsx(
                        ['moonstone-baseInput_clearButton', styles['moonstone-baseInput_clearButton']],
                        ['flexRow_center', layout.flexRow_center],
                        ['alignCenter', layout.alignCenter],
                    )}
                    icon={<Cancel/>}
                    variant="ghost"
                    onClick={handleClear}
                />
            )}
        </div>
    );
});

ControlledBaseInput.displayName = 'ControlledBaseInput';
export { ControlledBaseInput };
