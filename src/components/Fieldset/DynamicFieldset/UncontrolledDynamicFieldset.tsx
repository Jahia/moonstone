import React, { useState } from 'react';

import { ControlledDynamicFieldset } from './ControlledDynamicFieldset';

import type { UncontrolledDynamicFieldsetProps } from './DynamicFieldset.types';

export const UncontrolledDynamicFieldset: React.FC<UncontrolledDynamicFieldsetProps> = ({ defaultChecked = false, onChange, ...props }) => {
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
