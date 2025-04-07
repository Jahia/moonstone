import React from 'react';

import type {CheckboxItemProps} from './CheckboxItem.types';
import {UncontrolledCheckboxItem} from './UncontrolledCheckboxItem';
import {ControlledCheckboxItem} from './ControlledCheckboxItem';

export const CheckboxItem: React.FC<CheckboxItemProps> = ({checked, ...props}) => {
    if (typeof checked === 'undefined') {
        return <UncontrolledCheckboxItem {...props}/>;
    }

    return <ControlledCheckboxItem checked={checked} onChange={props.onChange} {...props}/>;
};

CheckboxItem.displayName = 'CheckboxItem';
