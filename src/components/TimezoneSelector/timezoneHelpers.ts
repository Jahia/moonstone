import {Temporal} from 'temporal-polyfill';
import type {DropdownDataGrouped, DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {getTodayPlainDate} from '../Input/utils/temporal';

/** Reference time of day for offset computation — noon avoids DST midnight edge cases. */
const NOON = Temporal.PlainTime.from('12:00');

const intlWithSupportedValues = Intl as typeof Intl & {
    supportedValuesOf?: (key: string) => string[];
};

/** Used only if the runtime lacks `Intl.supportedValuesOf` (all current targets have it). */
const FALLBACK_TIMEZONES = [
    'Europe/Paris',
    'Europe/London',
    'America/New_York',
    'America/Los_Angeles',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney'
];

const UTC = 'UTC';

// The full IANA list (computed once) with UTC pinned first; some runtimes list it, others don't.
const DEFAULT_TIMEZONES = [
    UTC,
    ...(intlWithSupportedValues.supportedValuesOf?.('timeZone') ?? FALLBACK_TIMEZONES).filter(timezone => timezone !== UTC)
];

const getTimezoneRegion = (timezone: string) => timezone.split('/')[0] || 'Other';

const getTimezoneCityLabel = (timezone: string) =>
    (timezone.split('/').pop() ?? timezone).replace(/_/g, ' ');

const getTimezoneOption = (timezone: string, referenceDate: Temporal.PlainDate): DropdownDataOption => ({
    label: `${getTimezoneCityLabel(timezone)} (UTC ${referenceDate.toZonedDateTime({timeZone: timezone, plainTime: NOON}).offset})`,
    value: timezone
});

// UTC sits in its own group, ahead of the alphabetical regions.
const compareRegions = (left: string, right: string) => {
    if (left === right) {
        return 0;
    }

    if (left === UTC || right === UTC) {
        return left === UTC ? -1 : 1;
    }

    return left.localeCompare(right);
};

export const getTimezoneDropdownData = (
    selectedTimezone?: string | null,
    referenceDate?: Temporal.PlainDate | null
): DropdownDataGrouped[] => {
    const resolvedReferenceDate = referenceDate ?? getTodayPlainDate();
    const timezones = [...DEFAULT_TIMEZONES];

    // A selected zone outside the catalog (e.g. UTC, or a valid alias) is added — verified by
    // the same offset computation used below, so an invalid string is simply ignored.
    if (selectedTimezone && !timezones.includes(selectedTimezone)) {
        try {
            resolvedReferenceDate.toZonedDateTime({timeZone: selectedTimezone, plainTime: NOON});
            timezones.push(selectedTimezone);
        } catch {
            // Not a valid IANA timezone — ignore it.
        }
    }

    const groups = timezones.reduce((acc, timezone) => {
        const region = getTimezoneRegion(timezone);
        acc.set(region, [...(acc.get(region) ?? []), getTimezoneOption(timezone, resolvedReferenceDate)]);
        return acc;
    }, new Map<string, DropdownDataOption[]>());

    return [...groups.entries()]
        .sort(([left], [right]) => compareRegions(left, right))
        .map(([groupLabel, options]) => ({
            groupLabel,
            options: options.sort((left, right) => left.label.localeCompare(right.label))
        }));
};
