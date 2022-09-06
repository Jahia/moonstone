import React from 'react';

import type {MultipleDropdownProps} from './MultipleDropdown.types';

import {ControlledMultipleDropdown, UncontrolledMultipleDropdown} from './index';

export const MultipleDropdown: React.FC<MultipleDropdownProps> = ({
    values,
    ...props
}) => {
    if (typeof values === 'undefined') {
        return <UncontrolledMultipleDropdown {...props}/>;
    }

    return <ControlledMultipleDropdown values={values} {...props}/>;
};

MultipleDropdown.displayName = 'MultipleDropdown';
