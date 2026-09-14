import type {DropdownDataGrouped} from '~/components/Dropdown/Dropdown.types';
import {Pill} from '~/components/Pill/Pill';

export const dropdownDataGroupedPill: DropdownDataGrouped[] = [
    {
        groupLabel: 'Langues principales',
        options: [
            {
                label: 'French',
                value: 'fr',
                iconEnd: <Pill content="FR"/>
            },
            {
                label: '[translate:French (Canadian)]',
                value: 'fr_ca',
                iconEnd: <Pill content="FR_CA"/>
            }
        ]
    },
    {
        groupLabel: 'Autres langues',
        options: [
            {
                label: '[translate:Language with very long long label label label label label label label name (country name)]',
                value: 'es',
                iconEnd: <Pill content="ES"/>
            },
            {
                label: 'English (disabled)',
                value: 'en',
                iconEnd: <Pill content="EN"/>,
                isDisabled: true
            }
        ]
    }
];
