import type {DropdownDataGrouped} from '~/components/Dropdown/Dropdown.types';

export const dropdownDataGrouped: DropdownDataGrouped[] = [
    {
        groupLabel: 'Group one',
        options: [
            {
                label: 'option 1',
                value: '1'
            },
            {
                label: 'option 2',
                value: '2'
            }
        ]
    },
    {
        groupLabel: 'Group Two',
        options: [
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: '3'
            },
            {
                label: 'option 4 (disabled)',
                value: '4',
                isDisabled: true
            }

        ]
    }
];
