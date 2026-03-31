import React from 'react';
import type {TimeInputProps} from './TimeInput.types';
import {ControlledTimeInput} from './ControlledTimeInput';
import {UncontrolledTimeInput} from './UncontrolledTimeInput';

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>(({value, defaultValue, ...props}, ref) => {
    if (typeof value === 'undefined') {
        return <UncontrolledTimeInput ref={ref} defaultValue={defaultValue} {...props}/>;
    }

    return <ControlledTimeInput ref={ref} value={value} {...props}/>;
});

TimeInput.displayName = 'TimeInput';
