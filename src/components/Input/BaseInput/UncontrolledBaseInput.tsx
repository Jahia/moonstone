import React, { useState } from 'react';

import { ControlledBaseInput } from './ControlledBaseInput';

import type { UncontrolledBaseInputProps } from './BaseInput.types';
import type { ChangeEvent } from 'react';

export const UncontrolledBaseInput = React.forwardRef<HTMLInputElement, UncontrolledBaseInputProps>(({
    defaultValue, onChange, filterFunction, allowNegative, allowDecimal, separator, ...props
}, ref) => {
    const [inputValue, setBaseInputValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        if (filterFunction) {
            value = filterFunction(event.target.value, allowNegative, allowDecimal, separator);
        }

        setBaseInputValue(value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return <ControlledBaseInput ref={ref} value={inputValue} onChange={handleOnChange} {...props}/>;
});

UncontrolledBaseInput.displayName = 'UncontrolledBaseInput';
