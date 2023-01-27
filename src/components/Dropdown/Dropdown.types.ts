import React from 'react';
import {TreeViewData} from '~/components/TreeView/TreeView.types';

export type DropdownVariant = 'ghost' | 'outlined';
export enum DropdownVariants {
    Ghost = 'ghost',
    Outlined = 'outlined'
}

export type DropdownSize = 'small' | 'medium';
export enum DropdownSizes {
    Small = 'small',
    Medium = 'medium'
}

export type DropdownImageSize = 'small' | 'big';
export enum DropdownImageSizes {
    Small = 'small',
    Big = 'big'
}

export type DropdownDataOption = {
    label?: string;
    description?: string;
    value?: string;
    isDisabled?: boolean;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    attributes?: unknown;
    image?: React.ReactElement;
    imageSize?: DropdownImageSize;
}

export type DropdownData = {
    groupLabel?: string;
    options?: [DropdownDataOption];
}

export type HandleSelect = (e: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOption) => void;

export type DropdownProps = {
    /**
     * Content of the dropdown
     */
    data: [DropdownDataOption & DropdownData & TreeViewData];

    isTree?: boolean,

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
    onChange?: (event: React.MouseEvent, item :DropdownDataOption) => void;
}
