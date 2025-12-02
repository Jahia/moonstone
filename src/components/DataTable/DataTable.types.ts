import React from 'react';

export type SubRowKey = 'subRows';

export type ColumnType =
    | 'tags'
    | 'text'
    | 'number'
    | 'date'
    | 'badge'
    | 'actions'
    | 'hover-actions'
    | 'status-bar';

export type CellContent = {
    label: string;
    subLabel?: string;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
};

export type TableProps = Omit<React.ComponentPropsWithoutRef<'table'>, 'children' | 'className'> & {
    /**
     * Which html element to render the table as
     */
    component?: string;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * The content of the table
     */
    children: React.ReactNode;
};

export type DataTableColumn<T extends NonNullable<unknown>> = {
    /**
     * The key of the data property to display in this column
     */
    key: Exclude<keyof T, SubRowKey>;

    /**
     * The label to display in the column header
     */
    label: string;

    /**
     * The type of the column
     */
    type?: ColumnType;

    /**
     * Optional custom render function for the cell content
     * @param value - The value of the cell
     * @param row - The entire row data
     */
    render?: (value: Omit<T, SubRowKey>, row: T) => React.ReactNode;

    /**
     * Whether this column can be sorted
     */
    isSortable?: boolean;

    /**
     * The alignment of the column
     */
    align?: 'left' | 'center' | 'right';
}

export type DataTableBaseProps<T extends NonNullable<unknown>> = {
    /**
     * Define which key is used as primary key for each row
     */
    primaryKey: Exclude<keyof T, SubRowKey>;

    /**
     * The array of data to display in the table
     */
    data: T[];

    /**
     * The column definitions for the table
     */
    columns: ReadonlyArray<DataTableColumn<T>>;

    /**
     * Whether the table data has a hierarchical structure with subRows
     */
    isStructured?: boolean;

    /**
     * Callback fired when a table header cell is clicked
     * @param columnId - The ID of the clicked column
     */
    onClickTableHeadCell?: (columnId: string) => void;
};

type SortingProps<T extends NonNullable<unknown>> =
    | {
        /**
         * Enable sorting functionality
         */
        enableSorting: true;

        /**
         * The key of the column to sort by
         */
        sortBy: Exclude<keyof T, 'subRows'>;

        /**
         * The direction of the sort
         */
        sortDirection?: 'ascending' | 'descending';
    }
    | {
        /**
         * Disable sorting functionality
         */
        enableSorting?: false;
        sortBy?: never;
        sortDirection?: never;
    };

type SelectionProps =
    | {
        /**
         * Enable row selection functionality
         */
        enableSelection: true;

        /**
         * Array of row IDs that should be selected by default
         */
        defaultSelection?: string[];

        /**
         * Callback fired when the selection changes
         * @param selection - Array of selected row IDs
         */
        onChangeSelection?: (selection: string[]) => void;
    }
    | {
        /**
         * Disable row selection functionality
         */
        enableSelection?: false;
        defaultSelection?: never;
        onChangeSelection?: never;
    };

export type DataTableProps<T extends NonNullable<unknown>> = TableProps & DataTableBaseProps<T> & SortingProps<T> & SelectionProps;
