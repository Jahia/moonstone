import React, {useState} from 'react';
import {ControlledTimezoneInput} from './ControlledTimezoneInput';
import type {UncontrolledTimezoneInputProps} from './TimezoneInput.types';

/**
 * Uncontrolled wrapper around `ControlledTimezoneInput`.
 * Manages its own internal `value` state, initialised once from `defaultValue`.
 * The `onChange` prop is still forwarded so callers can observe changes
 * without taking ownership of the state.
 */
export const UncontrolledTimezoneInput: React.FC<UncontrolledTimezoneInputProps> = ({
    defaultValue = null,
    onChange,
    ...props
}) => {
    const [value, setValue] = useState<string | null>(defaultValue);

    return (
        <ControlledTimezoneInput
            {...props}
            value={value}
            onChange={(event, nextValue) => {
                setValue(nextValue);

                if (typeof onChange === 'function') {
                    onChange(event, nextValue);
                }
            }}
        />
    );
};

UncontrolledTimezoneInput.displayName = 'UncontrolledTimezoneInput';
