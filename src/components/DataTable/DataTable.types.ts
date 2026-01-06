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

    /**
     * Custom HTML attributes to add to the cell element
     */
    cellProps?: React.HTMLAttributes<HTMLTableCellElement> & Record<string, unknown>;
};

export type DataTableBaseProps<T extends NonNullable<unknown>> = {
    /**
     * Define which key is used as primary key for each row.
     * This is used as the unique identifier for row selection and other operations.
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

    /**
     * Custom HTML attributes to add to each row element
     */
    rowProps?: React.HTMLAttributes<HTMLTableRowElement> & Record<string, unknown>;
};

type SortingProps<T extends NonNullable<unknown>> =
    | {
          /**
           * Enable sorting functionality
           */
          enableSorting: true;

          /**
           * The key of the column to sort by initially
           */
          defaultSortBy?: Extract<Exclude<keyof T, SubRowKey>, string>;

          /**
           * The direction of the initial sort
           */
          defaultSortDirection?: 'ascending' | 'descending';
      }
    | {
          /**
           * Enable sorting functionality
           */
          enableSorting?: false;

          /**
           * The key of the column to sort by initially
           */
          defaultSortBy?: never;

          /**
           * The direction of the initial sort
           */
          defaultSortDirection?: never;
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
           * Enable row selection functionality
           */
          enableSelection?: false;

          /**
           * Array of row IDs that should be selected by default
           */
          defaultSelection?: never;

          /**
           * Callback fired when the selection changes
           */
          onChangeSelection?: never;
      };

// Actions column props
type ActionsProps<T extends NonNullable<unknown>> = {
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
type RenderRowProps<T extends NonNullable<unknown>> = {
    /**
     * Custom render function for rows
     * @param row - The row object from TanStack Table
     * @param defaultRender - Function to render the default row content
     */
    renderRow?: (row: Row<T>, defaultRender: () => React.ReactNode) => React.ReactNode;
};

// Pagination props - TanStack Table handles pagination state internally
type PaginationProps =
    | {
          /**
           * Enable pagination functionality
           */
          enablePagination: true;

          /**
           * Initial number of items per page
           */
          itemsPerPage?: number;

          /**
           * Available options for items per page dropdown
           */
          itemsPerPageOptions?: number[];

          /**
           * Labels for the pagination component
           */
          paginationLabel?: {
              itemsPerPage: string;
              of: string;
          };
      }
    | {
          /**
           * Enable pagination functionality
           */
          enablePagination?: false;

          /**
           * Initial number of items per page
           */
          itemsPerPage?: never;

          /**
           * Available options for items per page dropdown
           */
          itemsPerPageOptions?: never;

          /**
           * Labels for the pagination component
           */
          paginationLabel?: never;
      };

export type DataTableProps<T extends NonNullable<unknown>> = Omit<TableProps, 'children'> &
    DataTableBaseProps<T> &
    SortingProps<T> &
    SelectionProps &
    ActionsProps<T> &
    RenderRowProps<T> &
    PaginationProps;

