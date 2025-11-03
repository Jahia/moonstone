import React from 'react';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';

type DropdownVariant = 'ghost' | 'outlined';

type DropdownSize = 'small' | 'medium';

type DropdownImageSize = 'small' | 'big';

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

export type DropdownData = DropdownDataOption[] | DropdownDataGrouped[];
export type DropdownDataTree = TreeViewData[]

export type HandleSelect = (e: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;

/**
 * Common props shared by all dropdown variants
 */
export type BaseDropdownProps = {
    /**
     * Text for dropdown, when no value is selected
     */
    placeholder?: string;

    /**
     * Label of the dropdown
     * @deprecated Label Props is deprecated and will be removed in a future release
     */
    label?: string;

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
     * Function triggered on focus of the checkbox value
     */
    onFocus?: React.FocusEventHandler;

    /**
     * Function triggered when the checkbox value loses focus
     */
    onBlur?: React.FocusEventHandler;

 /**
     * Function trigger on change with the current option as param
     * @param {object} event - Mouse event
     * @param {object} item - The current item selected
     */
    onChange?: (event: React.MouseEvent, item: DropdownDataOption) => void;
};

/**
 * Props when using regular data (not tree)
 */
type WithDataProps = {
    /**
     * Content of the dropdown
     */
    data: DropdownData;

    /**
     * Not allowed when using regular data
     */
    treeData?: never;
}

/**
 * Props when using tree data
 */
type WithTreeDataProps = {
    /**
     * Not allowed when using tree data
     */
    data?: never;

    /**
     * Content of the dropdown, if tree
     */
    treeData: DropdownDataTree;
}

/**
 * Props for single value dropdown
 */
type SingleValueProps = {
    /**
     * Value of the dropdown (single selection)
     */
    value: string;

    /**
     * Not allowed in single selection mode
     */
    values?: never;

};

/**
 * Props for multiple values dropdown
 */
type MultipleValuesProps = {
    /**
     * Not allowed in multiple selection mode
     */
    value?: never;

    /**
     * Values of the dropdown (multiple selection)
     */
    values: string[];
};

/**
 * Dropdown component props
 * - Use either `value` for single selection OR `values` for multiple selection
 * - Use either `data` for regular dropdown OR `treeData` for tree dropdown
 * Using both will result in a TypeScript error
 */
export type DropdownProps = BaseDropdownProps & (
     (SingleValueProps | MultipleValuesProps) &
     (WithTreeDataProps | WithDataProps)
);
