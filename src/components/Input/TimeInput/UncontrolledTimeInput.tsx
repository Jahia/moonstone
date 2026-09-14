import React, {useState} from 'react';
import {Temporal} from 'temporal-polyfill';
import {ControlledTimeInput} from './ControlledTimeInput';
import {toPlainTime} from '../utils/temporal';
import type {UncontrolledTimeInputProps} from './TimeInput.types';

export const UncontrolledTimeInput = React.forwardRef<HTMLInputElement, UncontrolledTimeInputProps>(({
    defaultValue,
    onChange,
    ...props
}, ref) => {
    const [value, setValue] = useState<Temporal.PlainTime | null>(() => toPlainTime(defaultValue));

    return (
        <ControlledTimeInput
            ref={ref}
            {...props}
            value={value}
            onChange={(event, nextValue) => {
                setValue(nextValue);
                onChange?.(event, nextValue);
            }}
        />
    );
});

UncontrolledTimeInput.displayName = 'UncontrolledTimeInput';
