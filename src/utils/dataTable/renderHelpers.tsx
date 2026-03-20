import React from 'react';
import {Typography} from '~/components';

type LocaleProp = string | string[];

export type LocaleOptions = {
    value: Date | null | undefined;
    locale?: LocaleProp;
    localeOptions?: Intl.DateTimeFormatOptions;
} | {
    value: number | null | undefined;
    locale?: LocaleProp;
    localeOptions?: Intl.NumberFormatOptions;
};

export const renderString = (value: string): React.ReactNode => <Typography isNowrap component="span">{value}</Typography>;

export const renderNumber = (
    {value, locale, localeOptions}: Extract<LocaleOptions, { value: number | null | undefined }>
): React.ReactNode => (value === null || value === undefined) ? null : <Typography isNowrap component="span">{value.toLocaleString(locale, localeOptions)}</Typography>;

export const renderDate = (
    {value, locale, localeOptions}: Extract<LocaleOptions, { value: Date | null | undefined }>
): React.ReactNode => (value === null || value === undefined) ? null : <Typography isNowrap component="time" dateTime={value.toISOString()}>{value.toLocaleDateString(locale, localeOptions)}</Typography>;
