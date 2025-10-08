import React from 'react';
import {BaseInputProps} from './BaseInput.types';
import {UncontrolledBaseInput} from './UncontrolledBaseInput';
import {ControlledBaseInput} from './ControlledBaseInput';

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(({value, filterFunction, allowNegative, allowDecimal, separator, ...props}, ref) => {
    if (typeof value === 'undefined') {
        return <UncontrolledBaseInput ref={ref} filterFunction={filterFunction} allowNegative={allowNegative} allowDecimal={allowDecimal} separator={separator} {...props}/>;
    }

    return <ControlledBaseInput ref={ref} value={value} {...props}/>;
});

BaseInput.displayName = 'BaseInput';
