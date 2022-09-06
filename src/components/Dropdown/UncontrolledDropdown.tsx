import React, {useState} from 'react';

import type {DropdownProps} from './Dropdown.types';
import type {DropdownDataOption} from './BaseDropdown/BaseDropdown.types';

import {BaseDropdown} from './index';

export const UncontrolledDropdown: React.FC<DropdownProps> = ({
    defaultSelectedItem,
    onChange,
    ...props
}) => {
    const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption) => {
        setSelectedItem(item);
        if (onChange) {
            onChange(e, item);
        }
    };

    return (
        <BaseDropdown
            selectedValues={selectedItem.value ? [selectedItem.value] : []}
            label={selectedItem.label}
            onChange={handleOnChange}
            {...props}
        />
    );
};

UncontrolledDropdown.displayName = 'UncontrolledDropdown';
