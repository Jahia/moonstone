import React from 'react';
import type {DropdownData, DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import type {MenuProps} from '~/components/Menu/Menu.types';

export type DropdownMenuProps = Omit<MenuProps, 'children'> & {
    searchInput?: string;
    searchEmptyText?: string;
    data: DropdownData;
    value?: string;
    values?: string[];
    imageSize?: 'small' | 'big';
    handleSelect: (e?: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;
    handleKeyPress: (e?: React.KeyboardEvent, item?:DropdownDataOption) => void;
}
