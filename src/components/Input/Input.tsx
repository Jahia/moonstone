import React from 'react';
import {InputProps} from './Input.types';
import {UncontrolledInput} from './UncontrolledInput';
import {ControlledInput} from './ControlledInput';

export const Input: React.FC<InputProps> = ({defaultValue, value, ...props}) => {
    if (typeof value === 'undefined') {
        return <UncontrolledInput defaultValue={defaultValue} {...props}/>;
    }

    return <ControlledInput value={value} {...props}/>;
};

Input.displayName = 'Input';
