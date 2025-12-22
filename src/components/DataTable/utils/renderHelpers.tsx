import React from 'react';
import {Chip} from '~/index';

export type LocaleOptions = {
    locale?: string | string[];
    localeOptions?: Intl.NumberFormatOptions | Intl.DateTimeFormatOptions;
};

export const renderString = (value: string): React.ReactNode => value;

export const renderNumber = (
    value: number | null | undefined,
    locale?: string | string[],
    localeOptions?: Intl.NumberFormatOptions
): React.ReactNode => (value === null || value === undefined) ? null : value.toLocaleString(locale, localeOptions);

export const renderDate = (
    value: Date | null | undefined,
    locale?: string | string[],
    localeOptions?: Intl.DateTimeFormatOptions
): React.ReactNode => (value === null || value === undefined) ? null : value.toLocaleDateString(locale, localeOptions);

export const renderChips = (
    value: string[] | null | undefined
): React.ReactNode =>
    value?.length > 0 ? (
        <>
            {value.map((chip, index) => (
                <Chip
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${chip}-${index}`}
                    label={chip}
                    color="accent"
                />
            ))}
        </>
    ) : null;

