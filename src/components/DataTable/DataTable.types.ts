import React, {ReactNode} from 'react';
import type {Row, Cell} from '@tanstack/react-table';

export type SubRowKey = 'subRows';

export type CellContent = {
    label: string; // Text content
    iconStart?: React.ReactElement; // Icon before text
    iconEnd?: React.ReactElement; // Icon after text
};

export type CellValue =
    | string
    | number
    | Date
    | ReactNode
    | CellContent
    | null
    | undefined;

// Props received by cell renderer components
export interface CellProps<T = unknown> {
    value: T; // Cell value
    locale?: string; // Locale for formatting
}

export type ColumnType = React.ComponentType<CellProps<CellValue>>;

export type TableProps = Omit<React.ComponentPropsWithoutRef<'table'>, 'children' | 'className'> & {
    component?: string; // HTML element to render as
    className?: string; // Additional CSS class
    children: React.ReactNode; // Table content
};

// Column definition for DataTable
export type DataTableColumn<T extends NonNullable<unknown>> = {
    key: Exclude<keyof T, SubRowKey>; // Data property key
    label: string; // Header label
    type?: ColumnType; // Cell renderer component
    render?: (value: T[Exclude<keyof T, SubRowKey>], row: T) => React.ReactNode; // Custom render function
    isSortable?: boolean; // Enable sorting
    sortFn?: (a: T, b: T) => number; // Custom sort function
    align?: 'left' | 'center' | 'right'; // Content alignment
};

// Base props for DataTable
export type DataTableBaseProps<T extends NonNullable<unknown>> = {
    data: T[]; // Table data
    columns: ReadonlyArray<DataTableColumn<T>>; // Column definitions
    isStructured?: boolean; // Enable tree view
    enableSorting?: boolean; // Enable sorting
    defaultSortBy?: Exclude<keyof T, SubRowKey>; // Initial sort column
    defaultSortDirection?: 'ascending' | 'descending'; // Initial sort direction
};

// Row selection props
type SelectionProps = {
    enableSelection?: boolean; // Enable row selection
    defaultSelection?: string[]; // Initially selected row IDs
    onChangeSelection?: (selection: string[]) => void; // Selection change callback
};

// Actions column props
type ActionsProps<T> =
    | {
          actions: (row: T) => React.ReactNode; // Render actions for row
          actionsHeaderLabel?: string; // Actions column header
      }
    | {
          actions?: never;
          actionsHeaderLabel?: never;
      };

// Props passed to TableBodyCell for structured view support
export type CellBodyProps = {
    row?: unknown; // Row object
    cell?: unknown; // Cell object
    isExpandableColumn?: boolean; // Show expand/collapse
    iconStart?: React.ReactElement; // Icon before content
    textAlign?: 'left' | 'center' | 'right'; // Content alignment
};

// Custom render function props
type RenderProps<T> = {
    renderRow?: (row: Row<T>, defaultRender: () => React.ReactNode) => React.ReactNode; // Custom row render
    renderCell?: (
        cell: Cell<T, unknown>,
        defaultRender: () => React.ReactNode,
        cellProps: CellBodyProps
    ) => React.ReactNode; // Custom cell render
};

export type DataTableProps<T extends NonNullable<unknown>> = Omit<TableProps, 'children'> &
    DataTableBaseProps<T> &
    SelectionProps &
    ActionsProps<T> &
    RenderProps<T>;
