import { Pill } from '~/components/Pill/Pill';

import type { DropdownDataOption } from '~/components/Dropdown/Dropdown.types';

export const dropdownDataPill: DropdownDataOption[] = [
    {
        label: 'French',
        value: 'fr',
        iconEnd: <Pill>FR</Pill>,
    },
    {
        label: 'French (Canadian)',
        value: 'fr_ca',
        iconEnd: <Pill>FR_CA</Pill>,
    },
    {
        label: 'Language with very long long label label label label label label label name (country name)',
        value: 'es',
        iconEnd: <Pill>ES</Pill>,
    },
    {
        label: 'English (disabled)',
        value: 'en',
        iconEnd: <Pill>EN</Pill>,
        isDisabled: true,
    },
];
