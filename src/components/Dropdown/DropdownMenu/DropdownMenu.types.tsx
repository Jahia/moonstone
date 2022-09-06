import React from 'react';
import {AnchorPosition} from '~/components/Menu/Menu.types';
import type {DropdownData, DropdownDataOption, DropdownDataTree} from '~/components/Dropdown/BaseDropdown.types';

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
    selectedNodesId: string[];
    data: DropdownDataOption[] | DropdownData[] | DropdownDataTree[];
    selectedValues?: string[];
    isTree?: boolean;
    imageSize?: 'small' | 'big';
    handleSelect: (e?: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;
    handleKeyPress: (e?: React.KeyboardEvent, item?: DropdownDataOption) => void;
    onClose: () => void;
}
