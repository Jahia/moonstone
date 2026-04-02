import {Temporal} from 'temporal-polyfill';
import type {DropdownDataGrouped, DropdownDataOption} from '~/components/Dropdown/Dropdown.types';

const intlWithSupportedValues = Intl as typeof Intl & {
    supportedValuesOf?: (key: string) => string[];
};

const preferredTimezoneGroups: Array<{groupLabel: string; timezones: string[]}> = [
    {
        groupLabel: 'UTC',
        timezones: ['UTC']
    },
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

const timezoneGroupOrder = preferredTimezoneGroups.map(group => group.groupLabel);

const getUniqueTimezones = (timezones: string[]) => Array.from(new Set(timezones));

const isValidTimezone = (timezone: string) => {
    if (timezone === 'UTC') {
        return true;
    }

    try {
        // Intl.DateTimeFormat throws a RangeError for unknown IANA timezone identifiers.
        return Boolean(
            new Intl.DateTimeFormat(undefined, {timeZone: timezone}).resolvedOptions().timeZone
        );
    } catch {
        return false;
    }
};

const getTimezoneRegion = (timezone: string) => timezone === 'UTC' ?
    'UTC' :
    timezone.split('/')[0] || 'Other';

const getTimezoneCityLabel = (timezone: string) => {
    if (timezone === 'UTC') {
        return 'UTC';
    }

    const parts = timezone.split('/');
    return (parts[parts.length - 1] || timezone).replace(/_/g, ' ');
};

const formatTimezoneOffsetLabel = (timezone: string, referenceDate: Date) => {
    const zdt = Temporal.Instant.fromEpochMilliseconds(referenceDate.getTime())
        .toZonedDateTimeISO(timezone);
    return `UTC ${zdt.offset}`;
};

const getRegionSortIndex = (region: string) => {
    const index = timezoneGroupOrder.indexOf(region);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

const compareRegions = (left: string, right: string) => {
    const diff = getRegionSortIndex(left) - getRegionSortIndex(right);
    return diff === 0 ? left.localeCompare(right) : diff;
};

const getTimezoneOption = (timezone: string, referenceDate: Date): DropdownDataOption => {
    const offsetLabel = formatTimezoneOffsetLabel(timezone, referenceDate);

    return {
        label: timezone === 'UTC' ? 'UTC' : `${getTimezoneCityLabel(timezone)} (${offsetLabel})`,
        value: timezone
    };
};

const getSanitizedTimezones = (timezones: string[]) => getUniqueTimezones(
    timezones
        .map(timezone => timezone.trim())
        .filter(Boolean)
).filter(isValidTimezone);

export const getDefaultTimezones = () => {
    const supportedValuesOf = intlWithSupportedValues.supportedValuesOf;

    if (typeof supportedValuesOf === 'function') {
        return getSanitizedTimezones(['UTC', ...supportedValuesOf('timeZone')]);
    }

    return [...fallbackTimezones];
};

export const getTimezoneDisplayLabel = (timezone?: string | null, referenceDate?: Date | null) => {
    if (!timezone) {
        return '';
    }

    if (!isValidTimezone(timezone)) {
        return timezone;
    }

    return getTimezoneOption(timezone, referenceDate ?? new Date()).label;
};

export const getTimezoneDropdownData = (
    selectedTimezone?: string | null,
    referenceDate?: Date | null
): DropdownDataGrouped[] => {
    const resolvedReferenceDate = referenceDate ?? new Date();
    const timezones = getDefaultTimezones().filter(timezone => timezone !== 'UTC');

    if (selectedTimezone && !timezones.includes(selectedTimezone)) {
        timezones.push(selectedTimezone);
    }

    return Array.from(
        getSanitizedTimezones(timezones).reduce((groups, timezone) => {
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
