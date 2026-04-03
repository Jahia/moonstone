import React, {useState} from 'react';
import type {TimezoneInputProps} from './TimezoneInput.types';
import {ControlledTimezoneInput} from './ControlledTimezoneInput';

export const TimezoneInput: React.FC<TimezoneInputProps> = ({value, defaultValue, ...props}) => {
    const [timezone, setTimezone] = useState(defaultValue ?? null);

    if (typeof value !== 'undefined') {
        return <ControlledTimezoneInput value={value} {...props}/>;
    }

    return (
        <ControlledTimezoneInput
            {...props}
            value={timezone}
            onChange={(event, selectedTimezone) => {
                setTimezone(selectedTimezone);
                props.onChange?.(event, selectedTimezone);
            }}
        />
    );
};

TimezoneInput.displayName = 'TimezoneInput';
