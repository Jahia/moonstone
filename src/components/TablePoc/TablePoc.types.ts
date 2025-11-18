import {ColumnDef} from '@tanstack/react-table';

// It's where we type the props of the TablePoc component especially how we type the data and columns props
// https://tanstack.com/table/v8/docs/api/core/column-def
// https://tanstack.com/table/v8/docs/api/core/table

export interface TablePocProps<T extends Record<string, unknown>> {
  data: T[];
  columns: ColumnDef<T>[];

}
