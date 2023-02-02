import React from 'react';
import type {DropdownDataOption, DropdownDataTree} from './Dropdown.types';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';
// Import type {DropdownDataOption} from './Dropdown.types';
import type {
    AnchorElOrigin,
    AnchorPosition,
    PositioningType,
    TransformElOrigin
} from '~/components/Menu/Menu.types';

export type TreeViewMenuProps = {
    /**
     * Data to generate the tree
     */
    treeData: TreeViewData[];

    maxHeight?: string;
    maxWidth?: string;
    minWidth?: string;
    isDisplayed: boolean;
    anchorEl?: React.MutableRefObject<HTMLDivElement>;
    anchorPosition?: AnchorPosition;
    anchorElOrigin?: AnchorElOrigin;
    transformElOrigin?: TransformElOrigin;
    position?: PositioningType;
    hasSearch?: boolean;
    searchInput?: string;
    searchEmptyText?: string;
    hasOverlay?: boolean;
    value?: string;
    values?: string[];
    children?: React.ReactNode;
    imageSize?: 'small' | 'big';
    handleSelect: (e?: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;
    handleKeyPress: (e?: React.KeyboardEvent, item?: DropdownDataOption) => void;
    onClose: () => void;
}
