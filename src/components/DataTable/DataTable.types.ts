import React, {ReactNode} from 'react';

export type SubRowKey = 'subRows';

export type CellContent = {
    label: string;
    iconStart?: React.ReactElement;
    iconEnd?: React.ReactElement;
};

export type CellValue =
    | string
    | number
    | Date
    | ReactNode
    | CellContent
    | null
    | undefined;

// Define the standard props that every Cell component receives
export interface CellProps<T = unknown> {
    value: T;
    locale?: string;
}

// ColumnType uses the union of all possible value types
export type ColumnType = React.ComponentType<CellProps<CellValue>>;

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
    render?: (value: T[Exclude<keyof T, SubRowKey>], row: T) => React.ReactNode;

    /**
     * Whether this column can be sorted
     * @default false
     */
    isSortable?: boolean;

    /**
     * Custom sort function for this column
     * If not provided but isSortable is true, TanStack will use automatic sorting
     * @param a - First row data
     * @param b - Second row data
     * @returns Negative if a < b, positive if a > b, 0 if equal
     */
    sortFn?: (a: T, b: T) => number;

    /**
     * The alignment of the column
     */
    align?: 'left' | 'center' | 'right';
};

export type DataTableBaseProps<T extends NonNullable<unknown>> = {
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
     * Enable sorting functionality
     * When enabled, clicking on sortable column headers will toggle sort direction
     * Sorting is handled internally by TanStack Table
     * @default false
     */
    enableSorting?: boolean;

    /**
     * Default column to sort by on initial render
     */
    defaultSortBy?: Exclude<keyof T, SubRowKey>;

    /**
     * Default sort direction on initial render
     * @default 'ascending'
     */
    defaultSortDirection?: 'ascending' | 'descending';
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

export type DataTableProps<T extends NonNullable<unknown>> = TableProps &
    DataTableBaseProps<T> &
    SelectionProps;
