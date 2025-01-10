import React, {useState} from 'react';
import type {UncontrolledDynamicFieldsetProps} from './DynamicFieldset.types';
import {ControlledDynamicFieldset} from './ControlledDynamicFieldset';

export const UncontrolledDynamicFieldset: React.FC<UncontrolledDynamicFieldsetProps> = ({defaultOpen, onChange, ...props}) => {
    const [open, setOpen] = useState(defaultOpen);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpen(event.currentTarget.checked);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return <ControlledDynamicFieldset isOpen={open} onChange={handleOnChange} {...props}/>;
};

UncontrolledDynamicFieldset.displayName = 'UncontrolledDynamicFieldset';
