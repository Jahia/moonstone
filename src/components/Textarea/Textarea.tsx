import React from 'react';

import { ControlledTextarea } from './ControlledTextarea';
import { UncontrolledTextarea } from './UncontrolledTextarea';

import type { TextareaProps } from './Textarea.types';

export const Textarea: React.FC<TextareaProps> = ({ value, onChange, ...props }) => {
    if (typeof value === 'undefined') {
        return <UncontrolledTextarea onChange={onChange} {...props}/>;
    }

    return <ControlledTextarea value={value} onChange={onChange} {...props}/>;
};

Textarea.displayName = 'Textarea';
