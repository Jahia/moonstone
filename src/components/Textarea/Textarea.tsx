import React from 'react';

import { ControlledTextarea } from './ControlledTextarea';
import { UncontrolledTextarea } from './UncontrolledTextarea';

import type { TextareaProps } from './Textarea.types';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ value, onChange, ...props }, ref) => {
    if (typeof value === 'undefined') {
        return <UncontrolledTextarea ref={ref} onChange={onChange} {...props}/>;
    }

    return <ControlledTextarea ref={ref} value={value} onChange={onChange} {...props}/>;
});

Textarea.displayName = 'Textarea';
