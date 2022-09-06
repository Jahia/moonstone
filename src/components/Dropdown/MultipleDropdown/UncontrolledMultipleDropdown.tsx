import React, {useState} from 'react';

import type {MultipleDropdownProps} from './MultipleDropdown.types';
import type {DropdownDataOption, DropdownDataTree} from '../BaseDropdown/BaseDropdown.types';

import {BaseDropdown} from '../index';

export const UncontrolledMultipleDropdown: React.FC<MultipleDropdownProps> = ({
    defaultValues = [],
    onChange,
    ...props
}) => {
    const [selectedValues, setSelectedValues] = useState(defaultValues);

    const handleOnChange = (e: React.MouseEvent, item: DropdownDataOption | DropdownDataTree) => {
        setSelectedValues(previousValues => {
            if (defaultValues.includes(item.value)) {
                return previousValues.filter(v => v !== item.value);
            }

            return [...previousValues, item.value];
        });

        if (onChange) {
            onChange(e, item);
        }
    };

    return <BaseDropdown {...props} isMultiple selectedValues={selectedValues} size="medium" variant="outlined" onChange={handleOnChange}/>;
};

UncontrolledMultipleDropdown.displayName = 'UncontrolledMultipleDropdown';
