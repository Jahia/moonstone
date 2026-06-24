import {Temporal} from 'temporal-polyfill';
import type {DropdownDataGrouped, DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {getTodayPlainDate} from '../Input/utils/temporal';

/** Reference time of day for offset computation — noon avoids DST midnight edge cases. */
const NOON = Temporal.PlainTime.from('12:00');

const intlWithSupportedValues = Intl as typeof Intl & {
    supportedValuesOf?: (key: string) => string[];
};

const preferredTimezoneGroups: Array<{groupLabel: string; timezones: string[]}> = [
    {
        groupLabel: 'Europe',
        timezones: [
            'Europe/Paris',
            'Europe/London',
            'Europe/Amsterdam',
            'Europe/Berlin',
            'Europe/Madrid',
            'Europe/Rome',
            'Europe/Athens'
        ]
    },
    {
        groupLabel: 'America',
        timezones: [
            'America/New_York',
            'America/Toronto',
            'America/Chicago',
            'America/Los_Angeles',
            'America/Mexico_City',
            'America/Sao_Paulo'
        ]
    },
    {
        groupLabel: 'Asia',
        timezones: [
            'Asia/Dubai',
            'Asia/Singapore',
            'Asia/Tokyo',
            'Asia/Hong_Kong'
        ]
    },
    {
        groupLabel: 'Africa',
        timezones: [
            'Africa/Cairo',
            'Africa/Johannesburg',
            'Africa/Lagos',
            'Africa/Nairobi',
            'Africa/Casablanca'
        ]
    },
    {
        groupLabel: 'Australia',
        timezones: [
            'Australia/Sydney',
            'Australia/Melbourne',
            'Australia/Brisbane',
            'Australia/Perth'
        ]
    },
    {
        groupLabel: 'Pacific',
        timezones: [
            'Pacific/Auckland',
            'Pacific/Fiji',
            'Pacific/Guam',
            'Pacific/Tahiti'
        ]
    }
];

const fallbackTimezones = preferredTimezoneGroups.reduce<string[]>(
    (acc, group) => acc.concat(group.timezones),
    []
);

let defaultTimezonesCache: string[] | null = null;

const isValidTimezone = (timezone: string) => {
    try {
        // Intl.DateTimeFormat throws a RangeError for unknown IANA timezone identifiers.
        return Boolean(
            new Intl.DateTimeFormat(undefined, {timeZone: timezone}).resolvedOptions().timeZone
        );
    } catch {
        return false;
    }
};

const getTimezoneRegion = (timezone: string) => timezone.split('/')[0] || 'Other';

const getTimezoneCityLabel = (timezone: string) => {
    const parts = timezone.split('/');
    return (parts[parts.length - 1] || timezone).replace(/_/g, ' ');
};

const formatTimezoneOffsetLabel = (timezone: string, referenceDate: Temporal.PlainDate) =>
    `UTC ${referenceDate.toZonedDateTime({timeZone: timezone, plainTime: NOON}).offset}`;

const getRegionSortIndex = (region: string) => {
    const index = preferredTimezoneGroups.findIndex(group => group.groupLabel === region);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

const compareRegions = (left: string, right: string) => {
    const diff = getRegionSortIndex(left) - getRegionSortIndex(right);
    return diff === 0 ? left.localeCompare(right) : diff;
};

const getTimezoneOption = (timezone: string, referenceDate: Temporal.PlainDate): DropdownDataOption => {
    const offsetLabel = formatTimezoneOffsetLabel(timezone, referenceDate);

    return {
        label: `${getTimezoneCityLabel(timezone)} (${offsetLabel})`,
        value: timezone
    };
};

const getDefaultTimezones = () => {
    if (defaultTimezonesCache) {
        return defaultTimezonesCache;
    }

    const supportedValuesOf = intlWithSupportedValues.supportedValuesOf;

    if (typeof supportedValuesOf === 'function') {
        defaultTimezonesCache = supportedValuesOf('timeZone');
        return defaultTimezonesCache;
    }

    defaultTimezonesCache = [...fallbackTimezones];
    return defaultTimezonesCache;
};

export const getTimezoneDropdownData = (
    selectedTimezone?: string | null,
    referenceDate?: Temporal.PlainDate | null
): DropdownDataGrouped[] => {
    const resolvedReferenceDate = referenceDate ?? getTodayPlainDate();

    const timezones = Array.from(new Set(
        getDefaultTimezones().filter(tz => tz !== 'UTC').map(tz => tz.trim()).filter(Boolean)
    ));

    if (selectedTimezone && isValidTimezone(selectedTimezone) && !timezones.includes(selectedTimezone)) {
        timezones.push(selectedTimezone);
    }

    return Array.from(
        timezones.reduce((groups, timezone) => {
            const groupLabel = getTimezoneRegion(timezone);
            const nextGroup = groups.get(groupLabel) ?? [];

            nextGroup.push(getTimezoneOption(timezone, resolvedReferenceDate));
            groups.set(groupLabel, nextGroup);

            return groups;
        }, new Map<string, DropdownDataOption[]>()).entries()
    )
        .sort(([left], [right]) => compareRegions(left, right))
        .map(([groupLabel, options]) => ({
            groupLabel,
            options: options.sort((left, right) => left.label.localeCompare(right.label))
        }));
};
