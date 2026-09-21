import React, { useState } from 'react';

import { ControlledDateTimeInput } from './ControlledDateTimeInput';
import { type DateTimeValue, getCurrentValue, parseValue } from './dateTimeValue';

import type { UncontrolledDateTimeInputProps } from './DateTimeInput.types';

export const UncontrolledDateTimeInput = React.forwardRef<HTMLInputElement, UncontrolledDateTimeInputProps>(({
    type,
    defaultValue,
    onChange,
    ...props
}, ref) => {
    // Only `undefined` falls back to "now" — an explicit `null` means an empty field.
    const [value, setValue] = useState<DateTimeValue | null>(
        () => parseValue(defaultValue === undefined ? getCurrentValue(type) : defaultValue, type),
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
