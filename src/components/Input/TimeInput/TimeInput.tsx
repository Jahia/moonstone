import React from 'react';
import {ControlledTimeInput} from './ControlledTimeInput';
import {UncontrolledTimeInput} from './UncontrolledTimeInput';
import type {ControlledTimeInputProps, TimeInputProps, UncontrolledTimeInputProps} from './TimeInput.types';

export const TimeInput = React.forwardRef<HTMLInputElement, TimeInputProps>((props, ref) => {
    if (typeof props.value === 'undefined') {
        return <UncontrolledTimeInput ref={ref} {...props as UncontrolledTimeInputProps}/>;
    }

    return <ControlledTimeInput ref={ref} {...props as ControlledTimeInputProps}/>;
});

TimeInput.displayName = 'TimeInput';
