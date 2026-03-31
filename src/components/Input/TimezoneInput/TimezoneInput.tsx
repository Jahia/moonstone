import React from 'react';
import type {TimezoneInputProps} from './TimezoneInput.types';
import {ControlledTimezoneInput} from './ControlledTimezoneInput';
import {UncontrolledTimezoneInput} from './UncontrolledTimezoneInput';

export const TimezoneInput: React.FC<TimezoneInputProps> = ({value, defaultValue, ...props}) => {
    if (typeof value === 'undefined') {
        return <UncontrolledTimezoneInput defaultValue={defaultValue} {...props}/>;
    }

    return <ControlledTimezoneInput value={value} {...props}/>;
};

TimezoneInput.displayName = 'TimezoneInput';
