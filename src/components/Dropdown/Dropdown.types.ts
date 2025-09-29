import React from 'react';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';

type DropdownVariant = 'ghost' | 'outlined';

export type DropdownSize = 'small' | 'medium';

type DropdownImageSize = 'small' | 'big';

export type DataLanguageType = {
    label: React.ReactElement | string;
    value: string;
    iconEnd: React.ReactElement;
}

export type DropdownDataOption = {
    label: string;
    description?: string;
    value?: string;
    isDisabled?: boolean;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    attributes?: React.HTMLAttributes<HTMLElement>;
    image?: React.ReactElement;
    imageSize?: DropdownImageSize;
}

export type DropdownDataGrouped = {
    groupLabel: string;
    options: DropdownDataOption[];
}

export type DropdownPill = DataLanguageType[]
export type DropdownData = DropdownDataOption[] | DropdownDataGrouped[];
export type DropdownDataTree = TreeViewData[]

export type HandleSelect = (e: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;

export type DropdownProps = {

    /**
   * Enables multiple selection mode in the dropdown
   */
  multiple?: boolean;

  /**
   * Specifies if the dropdown data should be displayed as a hierarchical tree
   */
  isTree?: boolean;

  /**
   * Enables a clear action to reset/drop the current selection
   */
  withClear?: boolean;

    /**
   * Whether the dropdown is reversed
   */
  isReversed?: boolean;
    /**
     * Content of the dropdown
     */
    data?: DropdownData;

    /**
     * Content of the dropdown, if tree
     */
    treeData?: DropdownDataTree;

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
     * Whether the component should be disabled
     */
    isDisabled?: boolean;

    /**
     * Whether the dropdown is loading
     */
     isLoading?: boolean;

    /**
     * Whether the Menu within the Dropdown has a search input
     * Autosearch is enabled if undefined
     * Autosearch is when search input is automatically added in the dropdown when autoAddSearchLimit is reached
     * @see autoAddSearchLimit
     */
    hasSearch?: boolean;

    /**
     * Autosearch is triggered when data items exceed this limit
     * Applies only when autosearch is enabled (i.e. hasSearch is undefined)
     * Defaults to 7 if undefined or < 0
     * Autosearch is when search input is automatically added in the dropdown
     */
    autoAddSearchLimit?: number;

    /**
     * The text to display if the Dropdown Menu has a search input and the search doesn't have any results
     */
    searchEmptyText?: string;

    /**
     * Additional classname
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
