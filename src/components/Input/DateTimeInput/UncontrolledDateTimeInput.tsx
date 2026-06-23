import React, {useState} from 'react';
import {ControlledDateTimeInput} from './ControlledDateTimeInput';
import {parseValue, type DateTimeValue} from './dateTimeValue';
import type {UncontrolledDateTimeInputProps} from './DateTimeInput.types';

export const UncontrolledDateTimeInput = React.forwardRef<HTMLInputElement, UncontrolledDateTimeInputProps>(({
    defaultValue,
    onChange,
    type,
    ...props
}, ref) => {
    const [value, setValue] = useState<DateTimeValue | null>(() => parseValue(defaultValue, type));

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
