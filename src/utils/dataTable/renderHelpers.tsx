import React, {useCallback, useRef} from 'react';

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

const OVERFLOWING_CLASS = 'moonstone-cellText--overflowing';

/**
 * Private component — overflow-aware cell text wrapper.
 * On hover: checks if content is truncated, enables scrolling only when needed.
 * On leave: resets scroll position so the beginning of the text is always visible.
 */
export const CellText = ({children}: { readonly children: React.ReactNode }) => {
    const ref = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = useCallback(() => {
        const el = ref.current;
        if (el && el.scrollWidth > el.clientWidth) {
            el.classList.add(OVERFLOWING_CLASS);
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        const el = ref.current;
        if (el) {
            el.classList.remove(OVERFLOWING_CLASS);
            el.scrollLeft = 0;
        }
    }, []);

    return (
        <span
            ref={ref}
            className="moonstone-cellText"
            // Make the cell focusable to allow keyboard navigation for overflowing content
            tabIndex={0}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
        >
            {children}
        </span>
    );
};

export const renderString = (value: string): React.ReactNode => (
    <CellText>{value}</CellText>
);

export const renderNumber = (
    {value, locale, localeOptions}: Extract<LocaleOptions, { value: number | null | undefined }>
): React.ReactNode => (value === null || value === undefined) ? null : (
    <CellText>{value.toLocaleString(locale, localeOptions)}</CellText>
);

export const renderDate = (
    {value, locale, localeOptions}: Extract<LocaleOptions, { value: Date | null | undefined }>
): React.ReactNode => (value === null || value === undefined) ? null : (
    <CellText>{value.toLocaleDateString(locale, localeOptions)}</CellText>
);

