import React from 'react';
import {TreeViewData} from '~/components/TreeView/TreeView.types';

export type DropdownVariant = 'ghost' | 'outlined';

export type DropdownSize = 'small' | 'medium';

export type DropdownImageSize = 'small' | 'big';

export type DropdownDataOption = {
    label: string;
    description?: string;
    value?: string;
    isDisabled?: boolean;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    attributes?: object;
    image?: React.ReactElement;
    imageSize?: DropdownImageSize;
    groupLabel?: string;
    options?: [DropdownDataOption];
}

export type DropdownDataOptions = DropdownDataOption[]

export type DropdownDataGrouped = {
    groupLabel?: string;
    options: DropdownDataOptions;
}[]

export type DropdownDataTree = TreeViewData[]

export type DropdownData = DropdownDataOptions | DropdownDataGrouped | DropdownDataTree

export type HandleSelect = (e: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;

export type DropdownProps = {
    /**
     * Content of the dropdown
     */
    data?: DropdownDataOption[];

    /**
     * Content of the dropdown, if tree
     */
    treeData?: TreeViewData[];

    /**
     * Text for dropdown, when no value is selected
     */
    placeholder?: string;

    /**
     * Label of the dropdown
     */
    label?: string;

    /**
     * Value of the dropdown
     */
    value?: string;

    /**
     * Value of the dropdown
     */
    values?: string[];

    /**
     * Icon displays before the dropdown's label
     */
    icon?: React.ReactElement;

    /**
     * Dropdown's variants
     */
    variant?: DropdownVariant;

    /**
     * Dropdown's sizes
     */
    size?: DropdownSize;

    /**
     * Size of images to show in the Dropdown
     */
    imageSize?: DropdownImageSize;

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
     * Additional classnames
     */
    className?: string;

    /**
     * Function - when passed in, the Clear icon appears at the end of the input and its click event is passed back when the Clear icon is clicked
     */
    onClear?: React.MouseEventHandler;

    /**
     * Function trigger on change with the current option as param
     * @param {object} event - Mouse event
     * @param {object} item - The current item selected
     */
    onChange?: (event: React.MouseEvent, item :DropdownDataOption) => void;

    /**
     * Function triggered on focus of the checkbox value
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the checkbox value loses focus
     */
    onBlur?: React.FocusEventHandler;
}
