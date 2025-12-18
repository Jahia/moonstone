import React from 'react';
import {Chip} from '~/index';

export type LocaleOptions = {
    locale?: string | string[];
    numberOptions?: Intl.NumberFormatOptions;
    dateOptions?: Intl.DateTimeFormatOptions;
};

export const renderString = () =>
    (value: string | { value: string }): React.ReactNode =>
        typeof value === 'string' ? value : value.value;

export const renderNumber = (options?: LocaleOptions) =>
    (value: number): React.ReactNode =>
        value?.toLocaleString(options?.locale, options?.numberOptions);

export const renderDate = (options?: LocaleOptions) =>
    (value: Date): React.ReactNode =>
        value?.toLocaleDateString(options?.locale, options?.dateOptions);

export const renderChips = () =>
    (value: string[]): React.ReactNode =>
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
