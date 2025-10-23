import {DropdownDataOption} from '~/components/Dropdown/Dropdown.types';
import {Pill} from '~/components/Pill/Pill';

export const dropdownDataPill : DropdownDataOption[] = [
    {
        label: 'French',
        value: 'fr',
        iconEnd: <Pill label="FR"/>
    },
    {
        label: 'French (Canadian)',
        value: 'fr_ca',
        iconEnd: <Pill label="FR_CA"/>
    },
    {
        label: 'Language with very long long label label label label label label label name (country name)',
        value: 'es',
        iconEnd: <Pill label="ES"/>
    },
    {
        label: 'English (disabled)',
        value: 'en',
        iconEnd: <Pill label="EN"/>,
        isDisabled: true
    }
];
