/**
 * A column that the user shows, hides, or moves
 */
export type ColumnChooserColumn = {
    /**
     * Unique key of the column, such as the key of a DataTable column
     */
    key: string;

    /**
     * Name of the column in the list
     */
    label: string;

    /**
     * Whether the column always stays visible, even when `value` leaves it out: its checkbox is disabled
     * @default false
     */
    isLocked?: boolean;

    /**
     * Whether the column is hidden after Reset, and at first when you pass no `value`
     * @default false
     */
    isHiddenByDefault?: boolean;
};

export type ColumnChooserProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'children' | 'className' | 'onChange' | 'value' | 'defaultValue' | 'color'> & {
    /**
     * Every column the user can show or hide, in their default order
     */
    columns: ReadonlyArray<ColumnChooserColumn>;

    /**
     * Keys of the visible columns, in display order (controlled). Without it, the component starts from the columns that are not hidden by default
     */
    value?: ReadonlyArray<string>;

    /**
     * Called when the user shows, hides, moves the columns, or resets them
     * @param value - The keys of the visible columns, in display order.
     */
    onChange?: (value: string[]) => void;

    /**
     * Whether the button is disabled
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * Accessible name and tooltip of the button, and title of its popup
         * @default 'Choose the columns'
         */
        button?: string;
        /**
         * Accessible name of the search field
         * @default 'Search columns'
         */
        search?: string;
        /**
         * Title of the visible columns
         * @default 'Visible columns'
         */
        visibleColumns?: string;
        /**
         * Title of the hidden columns
         * @default 'Hidden columns'
         */
        hiddenColumns?: string;
        /**
         * Text shown when the search matches no column
         * @default 'No column matches the search'
         */
        noMatch?: string;
        /**
         * Label of the button that restores the default columns
         * @default 'Reset'
         */
        reset?: string;
        /**
         * Accessible name of the button that moves a column up, followed by the column name
         * @default 'Move up'
         */
        moveUp?: string;
        /**
         * Accessible name of the button that moves a column down, followed by the column name
         * @default 'Move down'
         */
        moveDown?: string;
    };

    /**
     * Additional class name
     */
    className?: string;
};
