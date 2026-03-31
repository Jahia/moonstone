import React from 'react';
import type {Row} from '@tanstack/react-table';
import type {PaginationProps as ComponentPaginationProps} from '~/components/Pagination';
import type {TableCellProps} from '~/components/DataTable/cells/TableCell.types';

export type SubRowKey = 'subRows';

/**
 * Custom meta properties for TanStack Table columns.
 * Used to pass additional configuration through columnDef.meta
 */
export type CustomColumnMeta = {
    isSortable?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: string;
    isScrollable?: boolean;
    cellProps?: React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>;
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

    /**
     * Whether the cell content is scrollable on hover
     * @default false
     */
    isScrollable?: boolean;

    /**
     * Custom HTML attributes added to TableCell or TableStructuredCell
     */
    cellProps?: React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>;
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
          /** Custom HTML attributes added to the selection TableCell */
          selectionCellProps?: Omit<TableCellProps, 'children' | 'width' | 'component'>;
      }
    | {
          enableSelection: true;
          /** Uncontrolled: initial selected row IDs */
          defaultSelection?: string[];
          /** Optional callback to observe selection changes */
          onChangeSelection?: (selection: string[]) => void;
          selection?: never;
          /** Custom HTML attributes added to the selection TableCell */
          selectionCellProps?: Omit<TableCellProps, 'children' | 'width' | 'component'>;
      }
    | {
          enableSelection?: false;
          selection?: never;
          defaultSelection?: never;
          onChangeSelection?: never;
          selectionCellProps?: never;
      };

export type DefaultRenderOptions = {
    /**
     * Custom cells to render before the data cells (selection + columns).
     * Each direct child becomes its own column with automatic header alignment.
     * Pass a single element or a Fragment with multiple children:
     * `before={<MyCell />}` or `before={<><CellA /><CellB /></>}`
     */
    before?: React.ReactNode;

    /**
     * Custom cells to render after the data cells.
     * Each direct child becomes its own column with automatic header alignment.
     * Pass a single element or a Fragment with multiple children:
     * `after={<MyCell />}` or `after={<><CellA /><CellB /></>}`
     */
    after?: React.ReactNode;
};

// Custom column metadata type
export type CustomColumnType = 'before' | 'after';

type RenderRowProps<T extends NonNullable<unknown>> = {
    /**
     * Custom render function for rows (e.g. styling, wrapper).
     * @param row - The row object from TanStack Table. Use row.original to access the raw row data.
     * @param defaultRender - Function to render the default row content. Accepts options to inject actions per row.
     */
    renderRow?: (
        row: Row<T>,
        defaultRender: (options?: DefaultRenderOptions) => React.ReactNode
    ) => React.ReactNode;
};

type PaginationBaseProps = {
    /** Choices for items per page value */
    itemsPerPageOptions?: ComponentPaginationProps['itemsPerPageOptions'];
    /** Pagination labels */
    paginationLabel?: ComponentPaginationProps['label'];
    /** Custom attributes for the Pagination element */
    paginationProps?: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & Record<string, unknown>;
};

type PaginationControlledProps = {
    /** Controlled: current page (1-indexed) */
    currentPage: number;
    /** Controlled (optional): items per page */
    itemsPerPage?: number;
    /** Controlled: total number of items across all pages */
    totalItems: number;
    /** Controlled: callback when page changes (1-indexed) */
    onPageChange: (page: number) => void;
    /** Optional callback when items per page changes */
    onItemsPerPageChange?: (itemsPerPage: number) => void;
    defaultCurrentPage?: never;
    defaultItemsPerPage?: never;
};

export type PaginationUncontrolledProps = {
    currentPage?: never;
    /** Uncontrolled: initial page (1-indexed) */
    defaultCurrentPage?: number;
    /** Uncontrolled: initial items per page */
    defaultItemsPerPage?: number;
    itemsPerPage?: never;
    totalItems?: never;
    /** Optional callback when page changes (1-indexed) */
    onPageChange?: (page: number) => void;
    /** Optional callback when items per page changes */
    onItemsPerPageChange?: (itemsPerPage: number) => void;
};

type TablePaginationProps =
    | ({
          enablePagination: true;
      } & PaginationBaseProps & (PaginationControlledProps | PaginationUncontrolledProps))
    | {
          enablePagination?: false;
          currentPage?: never;
          itemsPerPage?: never;
          onPageChange?: never;
          onItemsPerPageChange?: never;
          totalItems?: never;
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
    RenderRowProps<T> &
    TablePaginationProps;
