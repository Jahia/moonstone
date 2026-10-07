import React, { useState } from 'react';

import { ControlledTextarea } from './ControlledTextarea';

import type { UncontrolledTextareaProps } from './Textarea.types';
import type { ChangeEvent } from 'react';

export const UncontrolledTextarea = React.forwardRef<HTMLTextAreaElement, UncontrolledTextareaProps>(({ defaultValue, onChange, ...props }, ref) => {
    const [textareaValue, setTextareaValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return (
        <ControlledTextarea
            className="uncontrolled"
            ref={ref}
            value={textareaValue}
            onChange={handleOnChange}
            {...props}
        />
    );
});

UncontrolledTextarea.displayName = 'UncontrolledTextarea';
