import React, {useState} from 'react';
import type {DateTimeInputProps} from './DateTimeInput.types';
import {ControlledDateTimeInput} from './ControlledDateTimeInput';
import {
    createDateTimeInputValue,
    getCurrentDateString,
    getCurrentTimeString
} from '../shared';

export const DateTimeInput = React.forwardRef<HTMLInputElement, DateTimeInputProps>(({value, defaultValue, onChange, type, ...props}, ref) => {
    const isControlled = typeof value !== 'undefined';
    const [dateTimeValue, setDateTimeValue] = useState(
        defaultValue ?
            createDateTimeInputValue(defaultValue) :
            type === 'date' ?
                {date: getCurrentDateString(), time: null, timezone: null} :
                {date: getCurrentDateString(), time: getCurrentTimeString(), timezone: null}
    );

    return (
        <ControlledDateTimeInput
            ref={ref}
            {...props}
            type={type as 'datetime'}
            value={isControlled ? value : dateTimeValue}
            onChange={(event, selectedDateTimeValue) => {
                if (!isControlled) {
                    setDateTimeValue(selectedDateTimeValue);
                }

                onChange?.(event, selectedDateTimeValue);
            }}
        />
    );
});

DateTimeInput.displayName = 'DateTimeInput';
