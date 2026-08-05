import type {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Pill} from '~/components/Pill/Pill';

export const dropdownDataPill : DropdownDataOption[] = [
    {
        label: 'French',
        value: 'fr',
        iconEnd: <Pill content="FR"/>
    },
    {
        label: 'French (Canadian)',
        value: 'fr_ca',
        iconEnd: <Pill content="FR_CA"/>
    },
    {
        label: 'Language with very long long label label label label label label label name (country name)',
        value: 'es',
        iconEnd: <Pill content="ES"/>
    },
    {
        label: 'English (disabled)',
        value: 'en',
        iconEnd: <Pill content="EN"/>,
        isDisabled: true
    }
];
