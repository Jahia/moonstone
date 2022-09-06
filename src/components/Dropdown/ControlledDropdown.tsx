import React from 'react';

import type {DropdownProps} from './Dropdown.types';

import {BaseDropdown} from './index';

export const Dropdown: React.FC<DropdownProps> = ({
    value,
    ...props
}) => {
    return <BaseDropdown selectedValues={value ? [value] : []} {...props}/>;
};

Dropdown.displayName = 'Dropdown';
