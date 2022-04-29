import React from "react";
import {AnchorPosition} from "~/components/Menu/Menu.types";
import {DropdownData, DropdownDataOption} from "~/components/Dropdown/Dropdown.types";

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
    data: DropdownDataOption[] | DropdownData[];
    // data: [DropdownDataOption] | [DropdownData];
    value?: string;
    children?: any;
    imageSize?: 'small' | 'big';
    handleSelect: any;
    handleKeyPress: any;
    onClose: () => void;
}
