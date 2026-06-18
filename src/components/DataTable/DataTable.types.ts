import React from 'react';
import type {TableCellProps} from '~/components/DataTable/cells';
import type {DataTablePaginationProps} from './pagination';
export type {PaginationUncontrolledProps} from './pagination';

export type SubRowKey = 'subRows';

export type TableProps = Omit<React.ComponentPropsWithoutRef<'table'>, 'children' | 'className'> & {
    /** Define HTML tag used to render the table */
    component?: string;
    /** Additional classname */
    className?: string;
    /** The content of the table */
    children: React.ReactNode;
};

// ---------------------------------------------------------------------------
// Row context — shared base for all row-level callbacks
// ---------------------------------------------------------------------------

/**
 * Metadata about a row's current state in the table.
 * Includes position and interaction state.
 */
export type RenderMeta = {
    /** The zero-based index of this row in the current data set */
    index: number;
    /** Whether this row is currently selected */
    isSelected: boolean;
    /** Whether this row is currently expanded (for hierarchical tables) */
    isExpanded: boolean;
};

/**
 * Base context passed to all row-level callbacks (renderRow, cellProps, rowProps).
 * Provides direct access to the row data and its table state without exposing
 * any underlying library internals.
 */
export type RowContext<T extends NonNullable<unknown>> = {
    /** The unique identifier of this row (value of primaryKey) */
    id: string;
    /** The raw row data */
    data: T;
    /** Row metadata: position and interaction state */
    meta: RenderMeta;
};

/**
 * Context for column render functions.
 * Extends RowContext with the cell value.
 */
export type RenderCellContext<T extends NonNullable<unknown>, K extends Exclude<keyof T, SubRowKey> = Exclude<keyof T, SubRowKey>> = RowContext<T> & {
    /** The value of this specific cell */
    value: T[K];
};

// ---------------------------------------------------------------------------
// Column definition
// ---------------------------------------------------------------------------

export type DataTableColumn<T extends NonNullable<unknown>> = {
    /** The key of the data property to display in this column */
    key: Exclude<keyof T, SubRowKey>;
    /** The label to display in the column header */
    label: string;
    /**
     * Optional custom render function for the cell content.
     * @param context - Cell context with value, data, id, and meta.
     */
    render?: (context: RenderCellContext<T, Exclude<keyof T, SubRowKey>>) => React.ReactNode;
    /** Whether this column can be sorted */
    isSortable?: boolean;
    /** Custom sort function for the column */
    sortFn?: (a: T, b: T) => number;
    /** Alignment of the column content */
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
     * Custom HTML attributes added to the cell element.
     * Use the function form to compute props per row.
     */
    cellProps?:
        | (React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>)
        | ((context: RowContext<T>) => React.TdHTMLAttributes<HTMLTableCellElement> & Record<string, unknown>);
};

// ---------------------------------------------------------------------------
// Table props
// ---------------------------------------------------------------------------

export type DataTableBaseProps<T extends NonNullable<unknown>> = {
    /** Define which key is used as unique identifier for each row. */
    primaryKey: Extract<Exclude<keyof T, SubRowKey>, string>;
    /** The array of data to display */
    data: T[];
    /** The column definitions */
    columns: ReadonlyArray<DataTableColumn<T>>;
    /** Callback fired when a table header cell is clicked */
    onClickTableHeadCell?: (columnKey: string) => void;
    /**
     * Custom HTML attributes to add to each row element.
     * Use the function form to compute props per row.
     */
    rowProps?:
        | (React.HTMLAttributes<HTMLTableRowElement> & Record<string, unknown>)
        | ((context: RowContext<T>) => React.HTMLAttributes<HTMLTableRowElement> & Record<string, unknown>);
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

/**
 * Context passed to the renderRow callback.
 * Extends RowContext with a render function.
 */
export type RenderRowContext<T extends NonNullable<unknown>> = RowContext<T> & {
    /**
     * Function to render the default row content.
     * Accepts options to inject custom cells before or after the data cells.
     */
    render: (options?: RenderOptions) => React.ReactNode;
};

type RenderRowProps<T extends NonNullable<unknown>> = {
    /**
     * Custom render function for rows (e.g. custom styling, wrapper elements).
     * @param context - Row context with id, data, meta, and render function.
     */
    renderRow?: (context: RenderRowContext<T>) => React.ReactNode;
};

type StructuredProps =
    | {
          /** Whether the table data has a hierarchical structure with subRows */
          isStructured: true;
          /** IDs of currently expanded rows (controlled). */
          expandedRows: string[];
          /** Callback fired when expanded rows change (required in controlled mode). */
          onExpandChange: (expandedRows: string[]) => void;
          defaultExpandedRows?: never;
      }
    | {
          /** Whether the table data has a hierarchical structure with subRows */
          isStructured: true;
          expandedRows?: never;
          /** Callback fired when expanded rows change (uncontrolled). */
          onExpandChange?: (expandedRows: string[]) => void;
          /**
           * IDs of rows expanded at mount (uncontrolled).
           * Pass `true` to expand all rows (default when `isStructured` is set).
           */
          defaultExpandedRows?: true | string[];
      }
    | {
          isStructured?: false;
          expandedRows?: never;
          onExpandChange?: never;
          defaultExpandedRows?: never;
      };

export type DataTableProps<T extends NonNullable<unknown>> = Omit<TableProps, 'children'> &
    DataTableBaseProps<T> &
    SortingProps<T> &
    SelectionProps &
    StructuredProps &
    RenderRowProps<T> &
    DataTablePaginationProps;
