import {
    renderString,
    renderNumber,
    renderDate,
    renderChips,
    type LocaleOptions
} from './renderHelpers';

type ColumnOptions = Omit<LocaleOptions, 'value'> & {
    align?: 'left' | 'center' | 'right';
};

export const stringColumn = <T, >(get: (row: T) => string, options?: ColumnOptions) => ({
    render: (value: string) => renderString(value),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a).localeCompare(get(b)),
    align: options?.align
});

export const numberColumn = <T, >(get: (row: T) => number, options?: ColumnOptions) => ({
    render: (value: number) => renderNumber({value, locale: options?.locale, localeOptions: options?.localeOptions}),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a) - get(b),
    align: options?.align ?? 'right'
});

export const dateColumn = <T, >(get: (row: T) => Date, options?: ColumnOptions) => ({
    render: (value: Date) => renderDate({value, locale: options?.locale, localeOptions: options?.localeOptions}),
    isSortable: true,
    sortFn: (a: T, b: T) => get(a).getTime() - get(b).getTime(),
    align: options?.align ?? 'right'
});

export const chipsColumn = <T, >(get: (row: T) => string[], options?: ColumnOptions) => ({
    render: (value: string[]) => renderChips(value),
    isSortable: false,
    align: options?.align
});

