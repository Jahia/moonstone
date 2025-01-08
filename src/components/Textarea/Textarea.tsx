import React from 'react';
import type {TextareaProps} from './Textarea.types';
import {UncontrolledTextarea} from './UncontrolledTextarea';
import {ControlledTextarea} from './ControlledTextarea';

export const Textarea: React.FC<TextareaProps> = ({value, onChange, ...props}) => {
    if (typeof value === 'undefined') {
        return <UncontrolledTextarea onChange={onChange} {...props}/>;
    }

    return <ControlledTextarea value={value} onChange={onChange} {...props}/>;
};

Textarea.displayName = 'Textarea';
