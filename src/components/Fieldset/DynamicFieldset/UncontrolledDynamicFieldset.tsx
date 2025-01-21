import React, {useState} from 'react';
import type {UncontrolledDynamicFieldsetProps} from './DynamicFieldset.types';
import {ControlledDynamicFieldset} from './ControlledDynamicFieldset';

export const UncontrolledDynamicFieldset: React.FC<UncontrolledDynamicFieldsetProps> = ({defaultChecked, onChange, ...props}) => {
    const [checked, setChecked] = useState(defaultChecked);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.currentTarget.checked);

        if (typeof onChange !== 'undefined') {
            onChange(event);
        }
    };

    return <ControlledDynamicFieldset checked={checked} onChange={handleOnChange} {...props}/>;
};

UncontrolledDynamicFieldset.displayName = 'UncontrolledDynamicFieldset';
