import React from 'react';
import {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Menu, MenuItem, Separator} from '~/components';
import {DropdownMenuProps} from '~/components/Dropdown/DropdownMenu.types';
import {CheckboxChecked, CheckboxUnchecked} from '~/icons';

const flattenData = (groupedData: DropdownDataOption[]): DropdownDataOption[] => {
    return Array.prototype.concat.apply([], groupedData.map(d => d.options || []))
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    isDisplayed,
    anchorPosition,
    minWidth,
    maxWidth,
    maxHeight,
    anchorEl,
    autoSearch,
    searchEmptyText,
    data,
    value,
    values,
    imageSize,
    handleSelect,
    handleKeyPress,
    onClose
}) => {
    const isEmpty = data.length < 1;
    const isGrouped = !isEmpty && typeof data[0].options !== 'undefined';

    if (data.length === 0) {
        return null;
    }

    const getIcon = (item: DropdownDataOption) => values?.indexOf(item.value) > -1 ? <CheckboxChecked role="checkbox" color="blue"/> : <CheckboxUnchecked role="checkbox"/>;

    // ---
    // Generate options
    // ---
    const dropdownOption = (item: DropdownDataOption) => (
        <MenuItem
            key={item.value}
            role="option"
            iconStart={values ? getIcon(item) : item.iconStart}
            iconSize="default"
            label={item.label}
            description={item.description}
            iconEnd={item.iconEnd}
            isDisabled={item.isDisabled}
            isSelected={value === item.value}
            image={item.image}
            imageSize={imageSize}
            onClick={e => handleSelect(e, item)}
            onKeyPress={e => handleKeyPress(e, item)}
            {...item.attributes}
        />
    );

    const dropdownGrouped = (children: [DropdownDataOption], groupLabel: string, index: number) => {
        return (
            <div key={`${groupLabel}-${index}`} data-option-type="group">
                {index > 0 && (
                    <Separator/>
                )}

                <MenuItem variant="title" label={groupLabel}/>

                {children.map(item => {
                    return dropdownOption(item);
                })}
            </div>
        );
    };

    const flatData = (isGrouped) ? flattenData(data) : data
    return (
        <Menu
            isDisplayed={isDisplayed}
            position="fixed"
            anchorPosition={anchorPosition}
            minWidth={minWidth}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            anchorEl={anchorEl}
            hasSearch={autoSearch(flatData.length)}
            searchEmptyText={searchEmptyText}
            onClose={onClose}
        >
            {
                data.map((item, index) => {
                    if (isGrouped) {
                        item.options.map((o: DropdownDataOption) => {
                            return dropdownOption(o);
                        });
                        return dropdownGrouped(item.options, item.groupLabel, index);
                    }

                    return dropdownOption(item);
                })
            }
        </Menu>
    );
};

