import type {ReactElement, ReactNode} from 'react';

export type ColumnType =
      'tags'
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
    iconStart?: ReactElement;
    iconEnd?: ReactElement;
};

export type DataTableColumn<T> = {
    key: Extract<keyof T, string>;
    label: string;
    type?: ColumnType;
    align?: 'left' | 'center' | 'right';
    isSortable?: boolean;
    render?: (value: T[keyof T], row: T) => ReactNode;
};
export type DataTableProps<T> = {
    data: T[];
    columns: DataTableColumn<T>[];
    isStructured?: boolean;
    enableSelection?: boolean;
    onChangeSelection?: (selection: string[]) => void;
    enableSorting?: boolean;
    sortBy?: keyof T;
    sortDirection?: 'ascending' | 'descending';
    onClickTableHeadCell?: (columnId: string) => void;
    defaultSelection?: string[];
};
