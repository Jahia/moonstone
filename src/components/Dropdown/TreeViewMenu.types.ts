import React from 'react';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';
import type {DropdownDataOption} from './Dropdown.types';
import type {MenuProps} from '~/components/Menu/Menu.types';

export type TreeViewMenuProps = Omit<MenuProps, 'children'> & {
    /**
     * Data to generate the tree
     */
    treeData: TreeViewData[];
    searchInput?: string;
    searchEmptyText?: string;
    value?: string;
    values?: string[];
    imageSize?: 'small' | 'big';
    handleSelect: (e?: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;
    handleKeyPress?: (e?: React.KeyboardEvent, item?: DropdownDataOption) => void;
}
