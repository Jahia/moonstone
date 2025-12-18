import {
    renderString,
    renderNumber,
    renderDate,
    renderChips
} from './renderHelpers';
import type {LocaleOptions} from './renderHelpers';
import {getCellValue} from './tableHelpers';

type ColumnOptions = LocaleOptions & {
    align?: 'left' | 'center' | 'right';
};

export const stringColumn = <T, >(
    get: (row: T) => string | { value: string },
    options?: ColumnOptions
) => ({
        render: renderString(),
        isSortable: true,
        sortFn: (a: T, b: T) => getCellValue(get(a)).localeCompare(getCellValue(get(b))),
        align: options?.align
    });

export const numberColumn = <T, >(get: (row: T) => number, options?: ColumnOptions) => ({
    render: renderNumber(options),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a) - get(b),
    align: options?.align ?? 'right'
});

export const dateColumn = <T, >(get: (row: T) => Date, options?: ColumnOptions) => ({
    render: renderDate(options),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a).getTime() - get(b).getTime(),
    align: options?.align
});

export const chipsColumn = <T, >(get: (row: T) => string[], options?: ColumnOptions) => ({
    render: renderChips(),
    isSortable: false,
    align: options?.align
});
