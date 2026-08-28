import React, {useState} from 'react';
import {ControlledDateTimeInput} from './ControlledDateTimeInput';
import {getCurrentValue, parseValue, type DateTimeValue} from './dateTimeValue';
import type {UncontrolledDateTimeInputProps} from './DateTimeInput.types';

export const UncontrolledDateTimeInput = React.forwardRef<HTMLInputElement, UncontrolledDateTimeInputProps>(({
    type,
    defaultValue,
    onChange,
    ...props
}, ref) => {
    // `getCurrentValue` only inside the lazy initializer: as a default parameter it ran every render.
    // Only `undefined` falls back to "now" — an explicit `null` means an empty field.
    const [value, setValue] = useState<DateTimeValue | null>(
        () => parseValue(defaultValue === undefined ? getCurrentValue(type) : defaultValue, type)
    );

    return (
        <ControlledDateTimeInput
            ref={ref}
            {...props}
            type={type}
            value={value}
            onChange={(event, nextValue) => {
                setValue(nextValue);
                onChange?.(event, nextValue);
            }}
        />
    );
});

UncontrolledDateTimeInput.displayName = 'UncontrolledDateTimeInput';
