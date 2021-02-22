import React from 'react';

export type TDropdownVariant = 'ghost' | 'outlined';
export enum DropdownVariants {
    Ghost = 'ghost',
    Outlined = 'outlined'
}

export type TDropdownSize = 'small' | 'medium';
export enum DropdownSizes {
    Small = 'small',
    Medium = 'medium'
}

export type TDropdownImageSize = 'small' | 'big';
export enum DropdownImageSizes {
    Small = 'small',
    Big = 'big'
}

export type DropdownDataOptions = {
    label?: string;
    value?: string;
    isDisabled?: boolean;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
    attributes?: {};
    image?: HTMLImageElement;
    imageSize?: TDropdownImageSize;
}

export type DropdownData = {
    groupLabel?: string;
    options?: [DropdownDataOptions];
}

export type HandleSelect = (e: React.MouseEvent | React.KeyboardEvent, item?: DropdownDataOptions) => void;

export type DropdownProps = {
    /**
     * Content of the dropdown
     */
    data: [DropdownDataOptions & DropdownData];

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
    variant?: TDropdownVariant;

    /**
     * Dropdown's sizes
     */
    size?: TDropdownSize;

    /**
     * Size of images to show in the Dropdown
     */
    imageSize?: TDropdownImageSize;

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
    onChange?: () => {};
}
