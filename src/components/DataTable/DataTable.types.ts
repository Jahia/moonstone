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
          /** Controlled: sort state */
          sortBy: Extract<Exclude<keyof T, SubRowKey>, string>;
          sortDirection: SortDirection;
          onSortChange: (sortBy: Extract<Exclude<keyof T, SubRowKey>, string>, sortDirection: SortDirection) => void;
          defaultSortBy?: never;
          defaultSortDirection?: never;
          manualSorting?: boolean;
      }
    | {
          enableSorting: true;
          sortBy?: never;
          sortDirection?: never;
          onSortChange?: never;
          /** Uncontrolled: initial sort column */
          defaultSortBy?: Extract<Exclude<keyof T, SubRowKey>, string>;
          /** Uncontrolled: initial sort direction */
          defaultSortDirection?: SortDirection;
          /** Server-side: table does not sort data, parent provides sorted data */
          manualSorting?: boolean;
      }
    | {
          enableSorting?: false;
          sortBy?: never;
          sortDirection?: never;
          onSortChange?: never;
          defaultSortBy?: never;
          defaultSortDirection?: never;
          manualSorting?: never;
      };

type SelectionProps =
    | {
          enableSelection: true;
          /** Controlled: selected row IDs */
          selection: string[];
          /** Controlled: callback when selection changes */
          onChangeSelection: (selection: string[]) => void;
          defaultSelection?: never;
      }
    | {
          enableSelection: true;
          /** Uncontrolled: initial selected row IDs */
          defaultSelection?: string[];
          /** Uncontrolled: callback when selection changes */
          onChangeSelection?: (selection: string[]) => void;
          selection?: never;
      }
    | {
          enableSelection?: false;
          selection?: never;
          defaultSelection?: never;
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

type PaginationUncontrolledProps = {
    pageIndex?: never;
    pageSize?: never;
    onPageChange?: never;
    onItemsPerPageChange?: never;
    /** Server-side: total rows when manualPagination (for Pagination display) */
    totalRowCount?: number;
    /** Initial items per page */
    itemsPerPage?: ComponentPaginationProps['itemsPerPage'];
    itemsPerPageOptions?: ComponentPaginationProps['itemsPerPageOptions'];
    paginationLabel?: ComponentPaginationProps['label'];
    /** Custom attributes spread on Pagination root (data-*, aria-*, etc.) */
    paginationProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & Record<string, unknown>;
};

type PaginationControlledProps = {
    /** Controlled: current page (0-indexed) */
    pageIndex: number;
    /** Controlled: items per page */
    pageSize: number;
    /** Controlled: callback when page changes (1-indexed) */
    onPageChange: (page: number) => void;
    /** Controlled: callback when page size changes */
    onItemsPerPageChange: (pageSize: number) => void;
    /** Server-side: total rows for Pagination and TanStack rowCount */
    totalRowCount?: number;
    itemsPerPage?: never;
    itemsPerPageOptions?: ComponentPaginationProps['itemsPerPageOptions'];
    paginationLabel?: ComponentPaginationProps['label'];
    paginationProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & Record<string, unknown>;
};

type TablePaginationProps =
    | ({
          enablePagination: true;
          /** Server-side: disable client-side pagination, data is pre-paginated */
          manualPagination?: boolean;
      } & (PaginationControlledProps | PaginationUncontrolledProps))
    | {
          enablePagination?: false;
          manualPagination?: never;
          pageIndex?: never;
          pageSize?: never;
          onPageChange?: never;
          onItemsPerPageChange?: never;
          totalRowCount?: never;
          itemsPerPage?: never;
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

