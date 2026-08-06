import React from 'react';
import {ControlledDateTimeInput} from './ControlledDateTimeInput';
import {UncontrolledDateTimeInput} from './UncontrolledDateTimeInput';
import type {
    ControlledDateTimeInputProps,
    DateTimeInputProps,
    UncontrolledDateTimeInputProps
} from './DateTimeInput.types';

export const DateTimeInput = React.forwardRef<HTMLInputElement, DateTimeInputProps>((props, ref) => {
    // Same controlled/uncontrolled split as the rest of the library: pick on `value === undefined`
    // and forward the props. The one extra step vs BaseInput/Accordion is the cast — our public
    // props are a discriminated union (value type varies by `type`; `onChange` is required only
    // when controlled), while the impls share a single broadened shape, so the union won't spread
    // onto them without it. The runtime discriminants guarantee the values line up.
    if (typeof props.value === 'undefined') {
        return <UncontrolledDateTimeInput ref={ref} {...props as UncontrolledDateTimeInputProps}/>;
    }

    return <ControlledDateTimeInput ref={ref} {...props as ControlledDateTimeInputProps}/>;
});

DateTimeInput.displayName = 'DateTimeInput';
