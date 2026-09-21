import React, { useState } from 'react';

import { toPlainTime } from '../utils/temporal';
import { ControlledTimeInput } from './ControlledTimeInput';

import type { UncontrolledTimeInputProps } from './TimeInput.types';
import type { Temporal } from 'temporal-polyfill';

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
