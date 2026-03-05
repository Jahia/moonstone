import React from 'react';
import type {Row} from '@tanstack/react-table';
import type {PaginationProps as ComponentPaginationProps} from '~/components/Pagination';

export type SubRowKey = 'subRows';

/**
 * Custom meta properties for TanStack Table columns.
 * Used to pass additional configuration through columnDef.meta
 */
export type CustomColumnMeta = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
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
     * Column width as a CSS string (e.g., '250px', '20%').
     * When undefined, the column takes all available space.
     */
    width?: string;
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

export type SortDirection = 'ascending' | 'descending';

type SortingProps<T extends NonNullable<unknown>> =
    | {
          enableSorting: true;
          /** Controlled: current sort column */
          sortBy: Extract<Exclude<keyof T, SubRowKey>, string>;
          /** Controlled: current sort direction */
          sortDirection: SortDirection;
          /** Callback when sort changes */
          onSortChange: (sortBy: Extract<Exclude<keyof T, SubRowKey>, string>, sortDirection: SortDirection) => void;
          defaultSortBy?: never;
          defaultSortDirection?: never;
      }
    | {
          enableSorting: true;
          sortBy?: never;
          sortDirection?: never;
          /** Optional callback to observe sort changes in uncontrolled mode */
          onSortChange?: (sortBy: Extract<Exclude<keyof T, SubRowKey>, string>, sortDirection: SortDirection) => void;
          /** Uncontrolled: initial sort column */
          defaultSortBy?: Extract<Exclude<keyof T, SubRowKey>, string>;
          /** Uncontrolled: initial sort direction */
          defaultSortDirection?: SortDirection;
      }
    | {
          enableSorting?: false;
          sortBy?: never;
          sortDirection?: never;
          onSortChange?: never;
          defaultSortBy?: never;
          defaultSortDirection?: never;
      };

export type SelectionProps =
    | {
          enableSelection: true;
          /** Controlled: selected row IDs */
          selection: string[];
          /** Callback when selection changes */
          onChangeSelection: (selection: string[]) => void;
          defaultSelection?: never;
      }
    | {
          enableSelection: true;
          /** Uncontrolled: initial selected row IDs */
          defaultSelection?: string[];
          /** Optional callback to observe selection changes */
          onChangeSelection?: (selection: string[]) => void;
          selection?: never;
      }
    | {
          enableSelection?: false;
          selection?: never;
          defaultSelection?: never;
          onChangeSelection?: never;
      };

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

type RenderRowProps<T extends NonNullable<unknown>> = {
    /**
     * Custom render function for rows
     * @param row - The row object from TanStack Table
     * @param defaultRender - Function to render the default row content
     */
    renderRow?: (row: Row<T>, defaultRender: () => React.ReactNode) => React.ReactNode;
};

type PaginationBaseProps = {
    /** Total number of rows across all pages (for server-side pagination display) */
    totalRowCount?: number;
    /** Choices for items per page value */
    itemsPerPageOptions?: ComponentPaginationProps['itemsPerPageOptions'];
    /** Pagination labels */
    paginationLabel?: ComponentPaginationProps['label'];
    /** Custom attributes spread on Pagination root (data-*, aria-*, etc.) */
    paginationProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & Record<string, unknown>;
    /** Callback when page changes (1-indexed) — available in both controlled and uncontrolled modes */
    onPageChange?: (page: number) => void;
    /** Callback when items per page changes — available in both controlled and uncontrolled modes */
    onItemsPerPageChange?: (itemsPerPage: number) => void;
};

type PaginationControlledProps = PaginationBaseProps & {
    /** Controlled: current page (1-indexed) */
    currentPage: number;
    /** Controlled: items per page */
    itemsPerPage: number;
    /** Required in controlled mode: total number of rows across all pages */
    totalRowCount: number;
    /** Required in controlled mode */
    onPageChange: (page: number) => void;
    /** Required in controlled mode */
    onItemsPerPageChange: (itemsPerPage: number) => void;
    defaultCurrentPage?: never;
    defaultItemsPerPage?: never;
};

type PaginationUncontrolledProps = PaginationBaseProps & {
    currentPage?: never;
    /** Uncontrolled: initial page (1-indexed) */
    defaultCurrentPage?: number;
    /** Uncontrolled: initial items per page */
    defaultItemsPerPage?: number;
    itemsPerPage?: never;
};

type TablePaginationProps =
    | ({
          enablePagination: true;
      } & (PaginationControlledProps | PaginationUncontrolledProps))
    | {
          enablePagination?: false;
          currentPage?: never;
          itemsPerPage?: never;
          onPageChange?: never;
          onItemsPerPageChange?: never;
          totalRowCount?: never;
          defaultCurrentPage?: never;
          defaultItemsPerPage?: never;
          itemsPerPageOptions?: never;
          paginationLabel?: never;
          paginationProps?: never;
      };

export type DataTableProps<T extends NonNullable<unknown>> = Omit<TableProps, 'children'> &
    DataTableBaseProps<T> &
    SortingProps<T> &
    SelectionProps &
    ActionsProps<T> &
    RenderRowProps<T> &
    TablePaginationProps;
