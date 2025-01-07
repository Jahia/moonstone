import React from 'react';
import {TextareaProps} from './Textarea.types';
import {UncontrolledTextarea} from './UncontrolledTextarea';
import {ControlledTextarea} from './ControlledTextarea';

export const Textarea: React.FC<TextareaProps> = ({value, ...props}) => {
    if (typeof value === 'undefined') {
        return <UncontrolledTextarea {...props}/>;
    }

    return <ControlledTextarea value={value} {...props}/>;
};

Textarea.displayName = 'Textarea';
