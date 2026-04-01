import React, {useState} from 'react';
import {ControlledDateTimeInput} from './ControlledDateTimeInput';
import {
    createDateTimeInputValue,
    getCurrentDateString,
    getCurrentTimeString
} from '../shared/dateTime.utils';
import type {DateTimeInputValue} from '../shared/dateTime.types';
import type {UncontrolledDateTimeInputProps} from './DateTimeInput.types';

/**
 * Builds a sensible default value when `defaultValue` is not provided,
 * pre-filling the relevant fields based on `type` so the component
 * starts in a usable state.
 */
const getDefaultDateTimeInputValue = (type: UncontrolledDateTimeInputProps['type']): DateTimeInputValue => {
    if (type === 'date') {
        return {
            date: getCurrentDateString(),
            time: null,
            timezone: null
        };
    }

    return {
        date: getCurrentDateString(),
        time: getCurrentTimeString(),
        timezone: null
    };
};

/**
 * Uncontrolled wrapper around `ControlledDateTimeInput`.
 * Manages its own internal `value` state, initialised once from `defaultValue`
 * (or from the current date/time if omitted).
 * The `onChange` prop is still forwarded so callers can observe changes
 * without taking ownership of the state.
 */
export const UncontrolledDateTimeInput = React.forwardRef<HTMLInputElement, UncontrolledDateTimeInputProps>(({
    type,
    defaultValue,
    onChange,
    ...props
}, ref) => {
    const [value, setValue] = useState(
        defaultValue ? createDateTimeInputValue(defaultValue) : getDefaultDateTimeInputValue(type)
    );

    return (
        <ControlledDateTimeInput
            ref={ref}
            {...props}
            type={type}
            value={value}
            onChange={(event, change) => {
                setValue(change.value);

                if (typeof onChange === 'function') {
                    onChange(event, change);
                }
            }}
        />
    );
});

UncontrolledDateTimeInput.displayName = 'UncontrolledDateTimeInput';
