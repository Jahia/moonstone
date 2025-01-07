import React, {useState, ChangeEvent} from 'react';
import {UncontrolledTextareaProps} from './Textarea.types';
import {ControlledTextarea} from './ControlledTextarea';

export const UncontrolledTextarea: React.FC<UncontrolledTextareaProps> = ({defaultValue, onChange, ...props}) => {
    const [textareaValue, setTextareaValue] = useState(defaultValue);

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(event.target.value);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return <ControlledTextarea value={textareaValue} onChange={handleOnChange} {...props}/>;
};

UncontrolledTextarea.displayName = 'UncontrolledTextarea';
