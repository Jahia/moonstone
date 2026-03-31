import React, {useState} from 'react';
import {ControlledTimeInput} from './ControlledTimeInput';
import {getCurrentTimeString} from '../shared/dateTime.utils';
import type {UncontrolledTimeInputProps} from './TimeInput.types';

/**
 * Uncontrolled wrapper around `ControlledTimeInput`.
 * Manages its own internal `value` state, initialised once from `defaultValue`
 * (or from the current time if omitted).
 * The `onChange` prop is still forwarded so callers can observe changes
 * without taking ownership of the state.
 */
export const UncontrolledTimeInput = React.forwardRef<HTMLInputElement, UncontrolledTimeInputProps>(({
    defaultValue,
    onChange,
    ...props
}, ref) => {
    const [value, setValue] = useState<string | null>(defaultValue ?? getCurrentTimeString());

    return (
        <ControlledTimeInput
            ref={ref}
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
});

UncontrolledTimeInput.displayName = 'UncontrolledTimeInput';
