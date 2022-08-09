import React from 'react';
import {AnchorPosition} from '~/components/Menu/Menu.types';
import {DropdownData, DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';

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
    selectedNodes: TreeViewData[];
    data: DropdownDataOption[] | DropdownData[] | TreeViewData[];
    value?: string;
    isTree?: boolean;
    imageSize?: 'small' | 'big';
    handleSelect: (e?: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;
    handleKeyPress: (e?: React.KeyboardEvent, item?: DropdownDataOption) => void;
    onClose: () => void;
}
