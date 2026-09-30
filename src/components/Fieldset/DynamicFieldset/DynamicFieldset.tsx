import React from 'react';

import { ControlledDynamicFieldset } from './ControlledDynamicFieldset';
import { UncontrolledDynamicFieldset } from './UncontrolledDynamicFieldset';

import type { DynamicFieldsetProps } from './DynamicFieldset.types';

export const DynamicFieldset: React.FC<DynamicFieldsetProps> = ({ checked, onChange, ...props }) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledDynamicFieldset onChange={onChange} {...props}/>;
    }

    return <ControlledDynamicFieldset checked={checked} onChange={onChange} {...props}/>;
};

DynamicFieldset.displayName = 'DynamicFieldset';
