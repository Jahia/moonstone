import type React from 'react';

/**
 * Context passed to the function form of a filter selector
 */
export type CollectionBarSelectorContext = {
    /**
     * Closes the selector and gives the focus back to the chip.
     * A selector that opens a dialog, such as a picker, calls it first: the dialog opens below the selector
     */
    close: () => void;
};

/**
 * A filter of the bar
 */
export type CollectionBarFilter = {
    /**
     * Unique key of the filter
     */
    key: string;

    /**
     * Name of the filter, on its chip and in the Add filter menu
     */
    label: string;

    /**
     * Text of the applied value, shown after the name. An empty text: the chip has no value
     */
    valueLabel?: string;

    /**
     * Icon of the filter in the Add filter menu
     */
    iconStart?: React.ReactElement;

    /**
     * Whether the chip is always in the bar. When false, the user adds the chip with Add filter,
     * and the chip stays in the bar while it has a value or while its selector is open
     * @default false
     */
    isDisplayedByDefault?: boolean;

    /**
     * Whether the chip and its clear button are disabled
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Controls that edit the value, such as an Input, a DateTimeInput or a CheckboxGroup.
     * The chip opens them in a dialog. The function form gets a close, for a selector that opens a dialog
     */
    selector: React.ReactNode | ((context: CollectionBarSelectorContext) => React.ReactNode);

    /**
     * Function triggered by the clear button of the chip, with its click event
     */
    onClear: (event: React.MouseEvent) => void;

    /**
     * Function triggered on every close of the selector: Escape, the Close button, a click outside, the chip,
     * or the close of the function form. A selector commits a typed draft value there
     */
    onClose?: () => void;
};

/**
 * A column of the column choice
 */
export type CollectionBarColumn = {
    /**
     * Unique key of the column, as the key of a DataTable column
     */
    key: string;

    /**
     * Name of the column in the menu of the column choice
     */
    label: string;
};

/**
 * Labels of the bar. A label that holds `{{name}}` gets the name of the filter there.
 * An empty label falls back to its default
 */
export type CollectionBarI18n = {
    /**
     * Accessible name of the bar, a toolbar from 3 controls on and a group below.
     * Name the collection that the bar filters, such as 'History filters'
     * @default 'Collection options'
     */
    toolbarLabel?: string;
    /**
     * Label of the Add filter button
     * @default 'Add filter'
     */
    addFilter?: string;
    /**
     * Name of a filter before its value, on a chip with a value
     * @default '{{name}}:'
     */
    filterName?: string;
    /**
     * Accessible name and tooltip of the clear button of a chip
     * @default 'Clear the {{name}} filter'
     */
    clearFilter?: string;
    /**
     * Label of the button that clears every filter
     * @default 'Clear all'
     */
    clearAll?: string;
    /**
     * Label of the button that closes a selector
     * @default 'Close'
     */
    closeButton?: string;
    /**
     * Accessible name and tooltip of the column button
     * @default 'Choose the columns'
     */
    columnButton?: string;
    /**
     * Title of the section of the visible columns
     * @default 'Visible columns'
     */
    visibleColumns?: string;
    /**
     * Title of the section of the hidden columns
     * @default 'Hidden columns'
     */
    hiddenColumns?: string;
    /**
     * Accessible name of the search field of the column menu
     * @default 'Search'
     */
    searchLabel?: string;
    /**
     * Text of the column menu when the search matches no column
     * @default 'No column matches the search'
     */
    searchEmptyText?: string;
};

type ColumnChoiceProps
    = | {
        /**
         * Columns that the user shows or hides. Leave them out above a list or thumbnails: the bar then shows no column button
         */
        columns: ReadonlyArray<CollectionBarColumn>;
        /**
         * Keys of the visible columns (controlled)
         */
        visibleColumns: ReadonlyArray<string>;
        /**
         * Callback when the user shows or hides a column, with the keys of the visible columns in the order of `columns`
         */
        onVisibleColumnsChange: (visibleColumns: string[]) => void;
    }
    | {
        columns?: never;
        visibleColumns?: never;
        onVisibleColumnsChange?: never;
    };

export type CollectionBarProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'children'> & {
    /**
     * Filters of the bar. The chips of the filters displayed by default come first, in this order,
     * then the added chips, in the order the user added them
     */
    filters: ReadonlyArray<CollectionBarFilter>;

    /**
     * Function triggered by the Clear all button, with its click event. The button shows when it is set and a filter has a value.
     * The bar calls no `onClear` then: this function clears every filter
     */
    onClearAll?: (event: React.MouseEvent) => void;

    /**
     * Whether every control of the bar is disabled
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Labels of the bar
     */
    i18n?: CollectionBarI18n;

    /**
     * Additional classname
     */
    className?: string;
} & ColumnChoiceProps;
