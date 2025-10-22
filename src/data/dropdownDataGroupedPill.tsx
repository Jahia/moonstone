import type {DropdownDataGrouped} from '~/components/Dropdown/Dropdown.types';
import {Pill} from '~/components/Pill/Pill';

export const dropdownDataGroupedLanguagesPill: DropdownDataGrouped[] = [
    {
        groupLabel: 'Langues principales',
        options: [
            {
                label: 'French',
                value: 'fr',
                iconEnd: <Pill label="FR"/>
            },
            {
                label: '[translate:French (Canadian)]',
                value: 'fr_ca',
                iconEnd: <Pill label="FR_CA"/>
            }
        ]
    },
    {
        groupLabel: 'Autres langues',
        options: [
            {
                label: '[translate:Language with very long long label label label label label label label name (country name)]',
                value: 'es',
                iconEnd: <Pill label="ES"/>
            },
            {
                label: 'English (disabled)',
                value: 'en',
                iconEnd: <Pill label="EN"/>,
                isDisabled: true
            }
        ]
    }
];
