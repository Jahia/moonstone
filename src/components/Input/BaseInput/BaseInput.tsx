import React from 'react';
import {BaseInputProps} from './BaseInput.types';
import {UncontrolledBaseInput} from './UncontrolledBaseInput';
import {ControlledBaseInput} from './ControlledBaseInput';

export const BaseInput: React.FC<BaseInputProps> = ({value, ...props}) => {
    if (typeof value === 'undefined') {
        return <UncontrolledBaseInput {...props}/>;
    }

    return <ControlledBaseInput value={value} {...props}/>;
};

BaseInput.displayName = 'BaseInput';
