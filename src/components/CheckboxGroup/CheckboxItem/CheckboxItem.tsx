import React from 'react';

import { ControlledCheckboxItem } from './ControlledCheckboxItem';
import { UncontrolledCheckboxItem } from './UncontrolledCheckboxItem';

import type { CheckboxItemProps } from './CheckboxItem.types';

export const CheckboxItem: React.FC<CheckboxItemProps> = ({ checked, ...props }) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledCheckboxItem {...props}/>;
    }

    return <ControlledCheckboxItem checked={checked} onChange={props.onChange} {...props}/>;
};

CheckboxItem.displayName = 'CheckboxItem';
