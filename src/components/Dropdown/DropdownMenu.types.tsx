import React from 'react';
import {AnchorPosition} from '~/components/Menu/Menu.types';
import {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';

export type DropdownMenuProps = {
    maxHeight?: string;
    maxWidth?: string;
    minWidth?: string;
    isDisplayed: boolean;
    anchorEl?: React.MutableRefObject<HTMLDivElement>;
    anchorPosition?: AnchorPosition;
    hasSearch?: boolean;
    /* Function that returns whether this dropdown menu has search input based on data length */
    autoSearch: (dataLength: number) => boolean
    searchInput?: string;
    searchEmptyText?: string;
    hasOverlay?: boolean;
    data: DropdownDataOption[];
    value?: string;
    values?: string[];
    children?: React.ReactNode;
    imageSize?: 'small' | 'big';
    handleSelect: (e?: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;
    handleKeyPress: (e?: React.KeyboardEvent, item?:DropdownDataOption) => void;
    onClose: () => void;
}
