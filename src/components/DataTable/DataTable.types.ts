import React from 'react';
import type {Row} from '@tanstack/react-table';

export type SubRowKey = 'subRows';

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
     * Optional custom render function for the cell content
     * @param value - The value of the cell
     * @param row - The entire row data
     */
    render?: (value: T[Exclude<keyof T, SubRowKey>], row: T) => React.ReactNode;

    /**
     * Whether this column can be sorted
     */
    isSortable?: boolean;

    /**
     * Custom sort function for the column
     */
    sortFn?: (a: T, b: T) => number;

    /**
     * Content alignment for the column
     */
    align?: 'left' | 'center' | 'right';
};

export type DataTableBaseProps<T extends NonNullable<unknown>> = {
    /**
     * Define which key is used as primary key for each row
     * @todo Will be required in a future version
     */
    primaryKey?: Exclude<keyof T, SubRowKey>;

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

type SortingProps<T extends NonNullable<unknown>> = {
    /**
     * Enable sorting functionality
     */
    enableSorting?: boolean;

    /**
     * The key of the column to sort by initially
     */
    defaultSortBy?: Exclude<keyof T, SubRowKey>;

    /**
     * The direction of the initial sort
     */
    defaultSortDirection?: 'ascending' | 'descending';
};

type SelectionProps = {
    /**
     * Enable row selection functionality
     */
    enableSelection?: boolean;

    /**
     * Array of row IDs that should be selected by default
     */
    defaultSelection?: string[];

    /**
     * Callback fired when the selection changes
     * @param selection - Array of selected row IDs
     */
    onChangeSelection?: (selection: string[]) => void;
};

// Actions column props
type ActionsProps<T> = {
    /**
     * Function to render action buttons for each row
     * @param row - The row data
     */
    actions?: (row: T) => React.ReactNode;

    /**
     * The label for the actions column header
     */
    actionsHeaderLabel?: string;
};

// Custom row render props
type RenderProps<T> = {
    /**
     * Custom render function for rows
     * @param row - The row object from TanStack Table
     * @param defaultRender - Function to render the default row content
     */
    renderRow?: (row: Row<T>, defaultRender: () => React.ReactNode) => React.ReactNode;
};

// Props passed to TableBodyCell for structured view support
export type CellBodyProps = {
    /**
     * Row object with expansion methods
     */
    row?: unknown;

    /**
     * Cell object from TanStack Table
     */
    cell?: unknown;

    /**
     * Whether this column shows expand/collapse controls
     */
    isExpandableColumn?: boolean;

    /**
     * Icon to display before content
     */
    iconStart?: React.ReactElement;

    /**
     * Content alignment
     */
    textAlign?: 'left' | 'center' | 'right';
};

export type DataTableProps<T extends NonNullable<unknown>> = Omit<TableProps, 'children'> &
    DataTableBaseProps<T> &
    SortingProps<T> &
    SelectionProps &
    ActionsProps<T> &
    RenderProps<T>;
