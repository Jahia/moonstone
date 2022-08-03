import React from 'react';
import {AnchorPosition} from '~/components/Menu/Menu.types';
import {DropdownData, DropdownDataOptions} from '~/components/Dropdown/Dropdown.types';

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
    data: [DropdownDataOptions & DropdownData];
    value?: string;
    children?: React.ReactNode;
    imageSize?: 'small' | 'big';
    handleSelect: (e?: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOptions) => void;
    handleKeyPress: (e?: React.KeyboardEvent, item?:DropdownDataOptions) => void;
    onClose: () => void;
}
