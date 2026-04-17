import React from 'react';
import type {Row} from '@tanstack/react-table';
import type {TableCellProps} from '~/components/DataTable/cells/TableCell/TableCell.types';
import type {DataTablePaginationProps} from './Pagination/dataTablePagination.types';
export type {PaginationUncontrolledProps} from './Pagination/dataTablePagination.types';

export type SubRowKey = 'subRows';

export type TableProps = Omit<React.ComponentPropsWithoutRef<'table'>, 'children' | 'className'> & {
    /**
     * Define HTML tag used to render the table
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
     * Alignment of the column content
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
     * Define which key is used as unique identifier for each row.
     */
    primaryKey: Extract<Exclude<keyof T, SubRowKey>, string>;

    /**
     * The array of data to display
     */
    data: T[];

    /**
     * The column definitions
     */
    columns: ReadonlyArray<DataTableColumn<T>>;

    /**
     * Whether the table data has a hierarchical structure with subRows
     */
    isStructured?: boolean;

    /**
     * Callback fired when a table header cell is clicked
     * @param columnKey - The key of the clicked column
     */
    onClickTableHeadCell?: (columnKey: string) => void;

    /**
     * Custom HTML attributes to add to each row element
     */
    rowProps?: React.HTMLAttributes<HTMLTableRowElement> & Record<string, unknown>;
};

export type SortDirection = 'ascending' | 'descending';

type SortingProps<T extends NonNullable<unknown>> =
    | {
          /** Enable sorting for the table */
          enableSorting: true;
          /** Current sort column (controlled) */
          sortBy: Extract<Exclude<keyof T, SubRowKey>, string>;
          /** Current sort direction (controlled) */
          sortDirection: SortDirection;
          /** Callback when sort changes */
          onSortChange: (sortBy: Extract<Exclude<keyof T, SubRowKey>, string>, sortDirection: SortDirection) => void;
          defaultSortBy?: never;
          defaultSortDirection?: never;
      }
    | {
          /** Enable sorting for the table */
          enableSorting: true;
          sortBy?: never;
          sortDirection?: never;
          /** Callback when sort changes */
          onSortChange?: (sortBy: Extract<Exclude<keyof T, SubRowKey>, string>, sortDirection: SortDirection) => void;
          /** Initial sort column (uncontrolled) */
          defaultSortBy?: Extract<Exclude<keyof T, SubRowKey>, string>;
          /** Initial sort direction (uncontrolled) */
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
          /** Enable selection for the table */
          enableSelection: true;
          /** Selected row primaryKey values (controlled) */
          selection: string[];
          /** Callback when selection changes */
          onChangeSelection: (selection: string[]) => void;
          defaultSelection?: never;
          /** Custom HTML attributes added to the TableCell selection */
          selectionCellProps?: Omit<TableCellProps, 'children' | 'width' | 'component'>;
      }
    | {
          enableSelection: true;
          /** Initial selected rows primaryKey values (uncontrolled) */
          defaultSelection?: string[];
          /** Optional callback to observe selection changes */
          onChangeSelection?: (selection: string[]) => void;
          selection?: never;
          /** Custom HTML attributes added to the TableCell selection */
          selectionCellProps?: Omit<TableCellProps, 'children' | 'width' | 'component'>;
      }
    | {
          enableSelection?: false;
          selection?: never;
          defaultSelection?: never;
          onChangeSelection?: never;
          selectionCellProps?: never;
      };

export type RenderOptions = {
    /**
     * Custom cells to render before the data cells (selection + columns).
     * Each direct child becomes its own column with automatic header alignment.
     */
    before?: React.ReactNode;

    /**
     * Custom cells to render after the data cells.
     * Each direct child becomes its own column with automatic header alignment.
     */
    after?: React.ReactNode;
};

type RenderRowProps<T extends NonNullable<unknown>> = {
    /**
     * Custom render function for rows (e.g. styling, wrapper).
     * @param row - The row object from TanStack Table. Use row.original to access the raw row data.
     * @param render - Function to render the default row content. Accepts options to inject actions per row.
     */
    renderRow?: (
        row: Row<T>,
        render: (options?: RenderOptions) => React.ReactNode
    ) => React.ReactNode;
};

export type DataTableProps<T extends NonNullable<unknown>> = Omit<TableProps, 'children'> &
    DataTableBaseProps<T> &
    SortingProps<T> &
    SelectionProps &
    RenderRowProps<T> &
    DataTablePaginationProps;
