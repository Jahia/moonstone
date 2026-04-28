import React, {useEffect} from 'react';
import clsx from 'clsx';
import {Cancel} from '~/icons';
import {Button} from '~/components';
import styles from './BaseInput.module.scss';
import type {ControlledBaseInputProps} from './BaseInput.types';
import {layout} from '~/globals/css-utils.js';

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
    const classNameProps = clsx(
        ['moonstone-baseInput', styles['moonstone-baseInput']],
        [`moonstone-${size}`, size === 'big' && styles[`moonstone-${size}`]],
        [`moonstone-${variant}`, variant === 'outlined' && styles[`moonstone-${variant}`]],
        className
    );

    useEffect(() => {
        if (focusOnField && !isDisabled && !isReadOnly && ref && typeof ref === 'object') {
            ref.current.focus({preventScroll: true});
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

    return (
        <div className={classNameProps} role={role} onClick={onClick}>
            {icon && (
                <div
                    className={clsx(
                        ['moonstone-baseInput_icon', styles['moonstone-baseInput_icon']],
                        ['flexRow_nowrap', layout.flexRow_nowrap],
                        ['alignCenter', layout.alignCenter]
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
                    ['moonstone-baseInput_elementsWrapper', styles['moonstone-baseInput_elementsWrapper']]
                )}
            >
                {prefixComponents}
                <input
                    ref={ref}
                    className={clsx(
                        ['moonstone-baseInput-element', styles['moonstone-baseInput-element']],
                        [`moonstone-${size}`, size === 'big' && styles[`moonstone-${size}`]]
                    )}
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
            { onClear && isFilled && !isDisabled && !isReadOnly && (
                <Button
                    className={clsx(
                        ['moonstone-baseInput_clearButton', styles['moonstone-baseInput_clearButton']],
                        ['flexRow_center', layout.flexRow_center],
                        ['alignCenter', layout.alignCenter]
                    )}
                    variant="ghost"
                    icon={<Cancel/>}
                    aria-label="Reset"
                    onClick={onClear}
                />
            )}
        </div>
    );
});

ControlledBaseInput.displayName = 'ControlledBaseInput';
export {ControlledBaseInput};
