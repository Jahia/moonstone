import React from 'react';
import {AnchorPosition} from '~/components/Menu/Menu.types';
import {DropdownDataGrouped, DropdownDataOptions, DropdownDataOption} from '~/components/Dropdown/Dropdown.types';

export type DropdownMenuData = DropdownDataOptions | DropdownDataGrouped

export type DropdownMenuProps = {
    maxHeight?: string;
    maxWidth?: string;
    minWidth?: string;
    isDisplayed: boolean;
    anchorEl?: React.MutableRefObject<HTMLDivElement>;
    anchorPosition?: AnchorPosition;
    hasSearch?: boolean;
    searchEmptyText?: string;
    hasOverlay?: boolean;
    data: DropdownMenuData;
    value?: string;
    children?: React.ReactNode;
    imageSize?: 'small' | 'big';
    handleSelect: (e?: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;
    handleKeyPress: (e?: React.KeyboardEvent, item?:DropdownDataOption) => void;
    onClose: () => void;
}
