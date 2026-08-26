import React, {useState} from 'react';
import {ControlledDateTimeInput} from './ControlledDateTimeInput';
import {getCurrentValue, parseValue, type DateTimeValue} from './dateTimeValue';
import type {UncontrolledDateTimeInputProps} from './DateTimeInput.types';

export const UncontrolledDateTimeInput = React.forwardRef<HTMLInputElement, UncontrolledDateTimeInputProps>(({
    type,
    defaultValue = getCurrentValue(type),
    onChange,
    fallbackTimeZone,
    ...props
}, ref) => {
    const [value, setValue] = useState<DateTimeValue | null>(() => parseValue(defaultValue, type, fallbackTimeZone));

    return (
        <ControlledDateTimeInput
            ref={ref}
            {...props}
            type={type}
            fallbackTimeZone={fallbackTimeZone}
            value={value}
            onChange={(event, nextValue) => {
                setValue(nextValue);
                onChange?.(event, nextValue);
            }}
        />
    );
});

UncontrolledDateTimeInput.displayName = 'UncontrolledDateTimeInput';
