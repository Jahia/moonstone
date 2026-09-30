import { Pill } from '~/components/Pill/Pill';

import type { DropdownDataGrouped } from '~/components/Dropdown/Dropdown.types';

export const dropdownDataGroupedPill: DropdownDataGrouped[] = [
    {
        groupLabel: 'Langues principales',
        options: [
            {
                label: 'French',
                value: 'fr',
                iconEnd: <Pill>FR</Pill>,
            },
            {
                label: '[translate:French (Canadian)]',
                value: 'fr_ca',
                iconEnd: <Pill>FR_CA</Pill>,
            },
        ],
    },
    {
        groupLabel: 'Autres langues',
        options: [
            {
                label: '[translate:Language with very long long label label label label label label label name (country name)]',
                value: 'es',
                iconEnd: <Pill>ES</Pill>,
            },
            {
                label: 'English (disabled)',
                value: 'en',
                iconEnd: <Pill>EN</Pill>,
                isDisabled: true,
            },
        ],
    },
];
