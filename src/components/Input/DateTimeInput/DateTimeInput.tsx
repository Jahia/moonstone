import React from 'react';
import type {DateTimeInputProps} from './DateTimeInput.types';
import {ControlledDateTimeInput} from './ControlledDateTimeInput';
import {UncontrolledDateTimeInput} from './UncontrolledDateTimeInput';

export const DateTimeInput = React.forwardRef<HTMLInputElement, DateTimeInputProps>(({value, defaultValue, ...props}, ref) => {
    if (typeof value === 'undefined') {
        return <UncontrolledDateTimeInput ref={ref} defaultValue={defaultValue} {...props}/>;
    }

    return <ControlledDateTimeInput ref={ref} value={value} {...props}/>;
});

DateTimeInput.displayName = 'DateTimeInput';
