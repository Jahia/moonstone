import React, { useId } from 'react';

import { Menu, MenuItem, Separator } from '~/components';
import { mergeHandlers, onAccessibleClick } from '~/hooks';
import { CheckboxChecked, CheckboxUnchecked } from '~/icons';

import type { DropdownDataOption } from '~/components/Dropdown/Dropdown.types';
import type { DropdownMenuProps } from '~/components/Dropdown/DropdownMenu.types';
import type { MenuItemProps } from '~/components/Menu/MenuItem.types';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    'aria-labelledby': ariaLabelledBy,
    isDisplayed,
    anchorPosition,
    minWidth,
    maxWidth,
    maxHeight,
    anchorEl,
    hasSearch,
    autoAddSearchLimit,
    searchEmptyText,
    i18n,
    data,
    value,
    values,
    imageSize,
    handleSelect,
    onClose,
}) => {
    const groupId = useId();
    const getIcon = (item: DropdownDataOption) => values?.indexOf(item.value) > -1 ? <CheckboxChecked color="blue" role="checkbox"/> : <CheckboxUnchecked role="checkbox"/>;

    // ---
    // Generate options
    // ---
    const dropdownOption = (item: DropdownDataOption) => {
        const accessibleClick = onAccessibleClick({
            onClick: e => handleSelect(e, item),
            disabled: item.isDisabled,
            role: 'option',
        });

        return (
            <MenuItem
                isDisabled={item.isDisabled}
                isSelected={value === item.value}
                description={item.description}
                iconEnd={item.iconEnd}
                iconSize="default"
                iconStart={values ? getIcon(item) : item.iconStart}
                image={item.image}
                imageSize={imageSize}
                key={item.value}
                label={item.label}
                {...mergeHandlers({ ...item.attributes }, accessibleClick) as MenuItemProps}
            />
        );
    };

    const dropdownGrouped = (options: DropdownDataOption[], groupLabel: string, index: number) => {
        const titleId = `${groupId}-${index}`;
        return (
            <div aria-labelledby={titleId} data-option-type="group" key={`${groupLabel}-${index}`} role="group">
                {index > 0 && (
                    // A listbox holds no separator: the groups already split the options
                    <Separator role="presentation"/>
                )}

                <MenuItem id={titleId} label={groupLabel} variant="title"/>

                {options.map((option) => {
                    return dropdownOption(option);
                })}
            </div>
        );
    };

    if (data.length === 0) {
        return null;
    }

    return (
        <Menu
            hasSearch={hasSearch}
            isDisplayed={isDisplayed}
            anchorEl={anchorEl}
            anchorPosition={anchorPosition}
            aria-labelledby={ariaLabelledBy}
            autoAddSearchLimit={autoAddSearchLimit}
            i18n={i18n}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            minWidth={minWidth}
            position="fixed"
            role="listbox"
            searchEmptyText={searchEmptyText}
            onClose={onClose}
        >
            {
                data.map((item, index) => {
                    if ('options' in item && 'groupLabel' in item) {
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
