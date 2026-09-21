import {Pill} from '~/components/Pill/Pill';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';

export const dropdownDataTreePill: TreeViewData[] = [
    {
        id: 'fr',
        label: 'French',
        value: 'fr',
        iconEnd: <Pill>FR</Pill>,
        children: [
            {
                id: 'fr_ca',
                label: 'French (Canadian)',
                value: 'fr_ca',
                iconEnd: <Pill>FR_CA</Pill>
            }
        ]
    },
    {
        id: 'es',
        label: 'Label with very long long label label label label label label label name (country name)',
        value: 'es',
        iconEnd: <Pill>ES</Pill>
    },
    {
        id: 'en',
        label: 'English (disabled)',
        value: 'en',
        isDisabled: true,
        iconEnd: <Pill>EN</Pill>
    }
];
