import {
    AnchorElOrigin,
    AnchorPosition,
    MenuProps,
    PositioningType,
    TransformElOrigin
} from "~/components/Menu/Menu.types";
import {TreeViewData} from "~/components/TreeView/TreeView.types";
import React from "react";
import {DropdownData, DropdownDataOptions} from "~/components/Dropdown/Dropdown.types";

export type TreeViewMenuProps = {
    /**
     * Data to generate the tree
     */
    data: TreeViewData[];

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
    searchEmptyText?: string;
    hasOverlay?: boolean;
    value?: string;
    children?: any;
    imageSize?: 'small' | 'big';
    handleSelect: any;
    handleKeyPress: any;
    onClose: () => void;
}
