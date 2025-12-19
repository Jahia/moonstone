import {
    renderString,
    renderNumber,
    renderDate,
    renderChips
} from './renderHelpers';

type ColumnOptions = {
    locale?: string | string[];
    numberOptions?: Intl.NumberFormatOptions;
    dateOptions?: Intl.DateTimeFormatOptions;
    align?: 'left' | 'center' | 'right';
};

export const stringColumn = <T, >(
    get: (row: T) => string,
    options?: ColumnOptions
) => ({
        render: (value: string) => renderString(value),
        isSortable: true,
        sortFn: (a: T, b: T) => get(a).localeCompare(get(b)),
        align: options?.align
    });

export const numberColumn = <T, >(get: (row: T) => number, options?: ColumnOptions) => ({
    render: (value: number) => renderNumber(value, options?.locale, options?.numberOptions),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a) - get(b),
    align: options?.align ?? 'right'
});

export const dateColumn = <T, >(get: (row: T) => Date, options?: ColumnOptions) => ({
    render: (value: Date) => renderDate(value, options?.locale, options?.dateOptions),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a).getTime() - get(b).getTime(),
    align: options?.align
});

export const chipsColumn = <T, >(get: (row: T) => string[], options?: ColumnOptions) => ({
    render: (value: string[]) => renderChips(value),
    isSortable: false,
    align: options?.align
});

