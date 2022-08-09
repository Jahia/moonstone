import React from 'react';
import {TreeViewData} from '~/components/TreeView/TreeView.types';

export type DropdownDataTree = TreeViewData;

export type DropdownDataOption = {
    label: string;
    value: string;
    isDisabled?: boolean;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    attributes?: unknown;
    image?: React.ReactElement<HTMLImageElement>;
    imageSize?: 'small' | 'big';
}

export type DropdownData = {
    groupLabel: string;
    options: DropdownDataOption[];
}

export type HandleSelect = (e: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption | DropdownDataTree) => void;

export type DropdownProps = {
    /**
     * Content of the dropdown
     */
    data: DropdownDataOption[] | DropdownData[] | DropdownDataTree[] | [];

    /**
     * When the dropdown has a tree structure it must be set to true
     */
    isTree?: boolean,

    /**
     * Label of the dropdown
     */
    label?: string;

    /**
     * Value of the dropdown
     */
    value?: string;

    /**
     * Icon displays before the dropdown's label
     */
    icon?: React.ReactElement;

    /**
     * Dropdown's variants
     */
    variant?: 'ghost' | 'outlined';

    /**
     * Dropdown's sizes
     */
    size?: 'small' | 'medium';

    /**
     * Size of images to show in the Dropdown
     */
    imageSize?: 'small' | 'big';

    /**
     * Max width of the dropdown
     */
    maxWidth?: string;

    /**
     * Dropdown is disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the Menu within the Dropdown has a search input
     */
    hasSearch?: boolean;

    /**
     * The text to display if the Dropdown Menu has a search input and the search doesn't have any results
     */
    searchEmptyText?: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Function trigger on change with the current option as param
     * @param {object} event - Mouse event
     * @param {object} item - The current item selected
     */
    onChange?: (event: React.MouseEvent, item: DropdownDataOption | DropdownDataTree) => void;
}
