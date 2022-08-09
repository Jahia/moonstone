import React from 'react';
import {DropdownDataOption, DropdownData} from '~/components/Dropdown/Dropdown.types';
import {MenuItem, Separator} from '~/components';
import {DropdownMenuListProps} from './DropdownMenuList.types';

type Data = DropdownDataOption[] | DropdownData[] | [];

const isGrouped = (data: Data): data is DropdownData[] => {
    if (data.length > 0) {
        return Object.prototype.hasOwnProperty.call(data[0], 'options');
    }

    return false;
};

export const DropdownMenuList: React.FC<DropdownMenuListProps> = ({
    data,
    value,
    imageSize,
    handleSelect,
    handleKeyPress
}) => {
    const dropdownOption = (option: DropdownDataOption) => {
        return (
            <MenuItem
                key={option.value}
                role="option"
                iconStart={option.iconStart}
                label={option.label}
                iconEnd={option.iconEnd}
                isDisabled={option.isDisabled}
                isSelected={value === option.value}
                image={option.image}
                imageSize={imageSize}
                onClick={e => handleSelect(e, option)}
                onKeyPress={e => handleKeyPress(e, option)}
                {...option.attributes}
            />
        );
    };

    const dropdownOptionsGrouped = (groupLabel: string, options: DropdownDataOption[], index: number) => {
        if (options.length > 0) {
            return (
                <div key={`${groupLabel}-${index}`} data-option-type="group">
                    {index > 0 && (
                        <Separator/>
                    )}

                    <MenuItem variant="title" label={groupLabel}/>

                    {options.map(option => {
                        return dropdownOption(option);
                    })}
                </div>
            );
        }
    };

    // ---
    // Build grouped options
    // ---
    if (isGrouped(data)) {
        return <>{data.map((item, index) => dropdownOptionsGrouped(item.groupLabel, item.options, index))}</>;
    }

    // ---
    // Build options
    // ---
    return <>{data.map(option => dropdownOption(option))}</>;
};
