import React from 'react';
import {InputProps} from './Input.types';
import {UncontrolledInput} from './UncontrolledInput';
import {ControlledInput} from './ControlledInput';

export const Input: React.FC<InputProps> = ({defaultValue, value, ...props}) => {
    if (defaultValue) {
        return <ControlledInput defaultValue={defaultValue} {...props}/>;
    }

    return <UncontrolledInput value={value} {...props}/>;
};

Input.displayName = 'Input';
