import React from 'react';

import type {MultipleDropdownProps} from './MultipleDropdown.types';

import {BaseDropdown} from '../BaseDropdown';

export const ControlledMultipleDropdown: React.FC<MultipleDropdownProps> = ({
    values,
    ...props
}) => {
    return <BaseDropdown isMultiple selectedValues={values ? values : []} size="medium" variant="outlined" {...props}/>;
};

ControlledMultipleDropdown.displayName = 'ControlledMultipleDropdown';
