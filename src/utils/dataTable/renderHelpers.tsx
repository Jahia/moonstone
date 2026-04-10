import React from 'react';
import {Typography} from '~/components';

type LocaleProp = string | string[];

export type DateLocaleOptions = {
    value: Date | null | undefined;
    locale?: LocaleProp;
    localeOptions?: Intl.DateTimeFormatOptions;
};

export type NumberLocaleOptions = {
    value: number | bigint | null | undefined;
    locale?: LocaleProp;
    localeOptions?: Intl.NumberFormatOptions;
};

export type LocaleOptions = DateLocaleOptions | NumberLocaleOptions;

export const renderString = (value: string | null | undefined): React.ReactNode => {
    if (typeof value !== 'string') {
        console.warn('renderString expects a string, received:', typeof value, value);
        return null;
    }

    return <Typography isNowrap component="span">{value}</Typography>;
};

export const renderNumber = (
    {value, locale, localeOptions}: NumberLocaleOptions
): React.ReactNode => {
    if (value === null || value === undefined) {
        return null;
    }

    if (typeof value !== 'number' && typeof value !== 'bigint') {
        console.warn('renderNumber expects a number or bigint, received:', typeof value, value);
        return null;
    }

    return <Typography isNowrap component="span">{value.toLocaleString(locale, localeOptions)}</Typography>;
};

export const renderDate = (
    {value, locale, localeOptions}: DateLocaleOptions
): React.ReactNode => {
    if (value === null || value === undefined) {
        return null;
    }

    if (!(value instanceof Date)) {
        console.warn('renderDate expects a Date object, received:', typeof value, value);
        return null;
    }

    return (
        <Typography isNowrap component="time" dateTime={value.toISOString()}>
            {value.toLocaleDateString(locale, localeOptions)}
        </Typography>
    );
};
