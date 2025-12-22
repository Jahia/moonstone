import React from 'react';
import {Chip} from '~/index';

type localeProp = string | string[];

export type LocaleOptions = {
    value: Date | null | undefined;
    locale?: localeProp;
    localeOptions?: Intl.DateTimeFormatOptions;
} | {
    value: number | null | undefined;
    locale?: localeProp;
    localeOptions?: Intl.NumberFormatOptions;
};

export const renderString = (value: string): React.ReactNode => value;

export const renderNumber = (
    {value, locale, localeOptions}: Extract<LocaleOptions, { value: number | null | undefined }>
): React.ReactNode => (value === null || value === undefined) ? null : value.toLocaleString(locale, localeOptions);

export const renderDate = (
    {value, locale, localeOptions}: Extract<LocaleOptions, { value: Date | null | undefined }>
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

