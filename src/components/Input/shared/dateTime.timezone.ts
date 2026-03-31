import {formatInTimeZone, getTimezoneOffset} from 'date-fns-tz';

// `Intl.supportedValuesOf` is not yet in the standard TS lib types,
// so we extend the global Intl type to avoid a compile error.
const intlWithSupportedValues = Intl as typeof Intl & {
    supportedValuesOf?: (key: string) => string[];
};

/**
 * Static list of well-known timezones grouped by region.
 * Used in two ways:
 * 1. As the fallback list when `Intl.supportedValuesOf` is not available.
 * 2. To define the preferred display order of region groups in the selector.
 */
const majorTimezoneGroups: Array<{groupLabel: string; timezones: string[]}> = [
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

const fallbackTimezones: string[] = majorTimezoneGroups.reduce<string[]>((acc, group) => acc.concat(group.timezones), []);

// Derived from majorTimezoneGroups to preserve the declared region order.
const timezoneGroupOrder = majorTimezoneGroups.map(group => group.groupLabel);

export type TimezoneMenuOption = {
    value: string;
    cityLabel: string;
    region: string;
    displayLabel: string;
    offsetLabel: string;
    searchText: string;
};

export type TimezoneMenuGroup = {
    groupLabel: string;
    options: TimezoneMenuOption[];
};

const getUniqueTimezones = (timezones: string[]) => Array.from(new Set(timezones));

/**
 * Validates a timezone identifier.
 * Uses `getTimezoneOffset` which throws for unrecognised identifiers,
 * so we wrap it in a try/catch. 'UTC' is always valid but may not be
 * accepted by all implementations, so it's short-circuited explicitly.
 */
const isValidTimezone = (timezone: string) => {
    if (timezone === 'UTC') {
        return true;
    }

    try {
        getTimezoneOffset(timezone, new Date());
        return true;
    } catch {
        return false;
    }
};

/**
 * Normalises a search string for fuzzy matching: lowercases, replaces common
 * separators (`()/_-`) with spaces, and collapses whitespace runs.
 * This lets users search for e.g. "new york", "new_york", or "America/New_York".
 */
const normalizeSearchText = (value: string) => value
    .toLowerCase()
    .replace(/[()/_-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const getSanitizedTimezones = (timezones: string[]) => getUniqueTimezones(
    timezones
        .map(timezone => timezone.trim())
        .filter(Boolean)
).filter(isValidTimezone);

/** Extracts the region prefix from an IANA identifier (e.g. `'Europe'` from `'Europe/Paris'`). */
const getTimezoneRegion = (timezone: string) => timezone === 'UTC' ?
    'UTC' :
    timezone.split('/')[0] || 'Other';

/** Extracts the city name from an IANA identifier, replacing underscores with spaces. */
const getTimezoneCityLabel = (timezone: string) => {
    if (timezone === 'UTC') {
        return 'UTC';
    }

    const parts = timezone.split('/');
    return (parts[parts.length - 1] || timezone).replace(/_/g, ' ');
};

/** Formats the UTC offset for a given timezone at a specific reference date (e.g. `'UTC +02:00'`). */
const formatTimezoneOffsetLabel = (timezone: string, referenceDate: Date) =>
    formatInTimeZone(referenceDate, timezone, '\'UTC \'xxx');

const buildTimezoneMenuOption = (timezone: string, referenceDate: Date): TimezoneMenuOption => {
    const region = getTimezoneRegion(timezone);
    const cityLabel = getTimezoneCityLabel(timezone);
    const offsetLabel = formatTimezoneOffsetLabel(timezone, referenceDate);
    const displayLabel = `${cityLabel} (${offsetLabel})`;

    return {
        value: timezone,
        cityLabel,
        region,
        displayLabel,
        offsetLabel,
        // Pre-compute a normalised search string combining all searchable text.
        searchText: normalizeSearchText(`${timezone} ${region} ${cityLabel} ${displayLabel}`)
    };
};

/**
 * Returns the sort index of a region based on the preferred order declared in
 * `timezoneGroupOrder`. Unknown regions sort to the end (MAX_SAFE_INTEGER).
 */
const getRegionSortIndex = (region: string) => {
    const index = timezoneGroupOrder.indexOf(region);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

const compareRegions = (a: string, b: string) => {
    const diff = getRegionSortIndex(a) - getRegionSortIndex(b);
    // Same priority index → fall back to alphabetical order.
    return diff === 0 ? a.localeCompare(b) : diff;
};

const sortTimezoneOptions = (left: TimezoneMenuOption, right: TimezoneMenuOption) => {
    const regionCompare = compareRegions(left.region, right.region);
    return regionCompare === 0 ? left.cityLabel.localeCompare(right.cityLabel) : regionCompare;
};

/** Groups a flat list of options into `TimezoneMenuGroup[]`, sorted by region then city. */
const groupTimezoneOptions = (options: TimezoneMenuOption[]) => {
    const groupMap = new Map<string, TimezoneMenuOption[]>();

    options
        .slice()
        .sort(sortTimezoneOptions)
        .forEach(option => {
            const currentOptions = groupMap.get(option.region) ?? [];
            currentOptions.push(option);
            groupMap.set(option.region, currentOptions);
        });

    return Array.from(groupMap.entries())
        .sort(([a], [b]) => compareRegions(a, b))
        .map(([groupLabel, groupedOptions]) => ({
            groupLabel,
            options: groupedOptions
        }));
};

const getAvailableTimezones = (allowedTimezones?: string[]) => getSanitizedTimezones(
    allowedTimezones?.length ? allowedTimezones : getDefaultTimezones()
);

/**
 * Builds grouped timezone options using the static `majorTimezoneGroups` structure,
 * preserving the declared group order and only including timezones that are in the
 * available set.
 *
 * Special case: if the currently selected timezone is valid but not part of any
 * known group, it is injected into the matching region group (or a new group is
 * created) so it remains visible and selectable.
 */
const getDefaultTimezoneGroups = (
    timezones: string[],
    selectedTimezone: string | null | undefined,
    referenceDate: Date
) => {
    const timezoneSet = new Set(timezones);
    const groups = majorTimezoneGroups
        .map(group => ({
            groupLabel: group.groupLabel,
            timezones: group.timezones.filter(timezone => timezoneSet.has(timezone))
        }))
        .filter(group => group.timezones.length > 0);

    const isSelectedTimezoneGrouped = selectedTimezone ?
        groups.some(group => group.timezones.includes(selectedTimezone)) :
        false;

    // If the selected value is in the available list but not in any declared group,
    // inject it so it stays visible when the dropdown opens.
    if (selectedTimezone && timezoneSet.has(selectedTimezone) && isSelectedTimezoneGrouped === false) {
        const selectedRegion = getTimezoneRegion(selectedTimezone);
        const matchingGroup = groups.find(group => group.groupLabel === selectedRegion);

        if (matchingGroup) {
            matchingGroup.timezones.push(selectedTimezone);
        } else {
            groups.push({
                groupLabel: selectedRegion,
                timezones: [selectedTimezone]
            });
        }
    }

    return groups.map(group => ({
        groupLabel: group.groupLabel,
        options: getUniqueTimezones(group.timezones).map(timezone => buildTimezoneMenuOption(timezone, referenceDate))
    }));
};

/**
 * Returns the full list of available IANA timezone identifiers.
 * Prefers `Intl.supportedValuesOf('timeZone')` (browser-native and aligned with the current runtime)
 * and falls back to the static `fallbackTimezones` list for older environments.
 */
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

    return buildTimezoneMenuOption(timezone, referenceDate ?? new Date()).displayLabel;
};

/**
 * Main entry point for building the timezone menu content.
 *
 * When `searchValue` is empty, returns the structured group list (preserving
 * the `majorTimezoneGroups` order). When a search is active, returns a flat
 * set of matching options re-grouped dynamically.
 */
export const getTimezoneMenuGroups = ({
    allowedTimezones,
    selectedTimezone,
    searchValue,
    referenceDate
}: {
    allowedTimezones?: string[];
    selectedTimezone?: string | null;
    searchValue?: string;
    referenceDate?: Date | null;
}) => {
    const resolvedReferenceDate = referenceDate ?? new Date();
    const availableTimezones = getAvailableTimezones(allowedTimezones);
    const normalizedSearchValue = normalizeSearchText(searchValue ?? '');

    if (normalizedSearchValue === '') {
        return getDefaultTimezoneGroups(availableTimezones, selectedTimezone, resolvedReferenceDate);
    }

    const matchingOptions = availableTimezones
        .map(timezone => buildTimezoneMenuOption(timezone, resolvedReferenceDate))
        .filter(option => option.searchText.includes(normalizedSearchValue));

    return groupTimezoneOptions(matchingOptions);
};
