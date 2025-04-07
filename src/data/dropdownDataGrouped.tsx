import type {DropdownDataGrouped} from '~/components/Dropdown/Dropdown.types';

export const dropdownDataGrouped: DropdownDataGrouped[] = [
    {
        groupLabel: 'test',
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
        groupLabel: 'test 2',
        options: [
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: '3'
            },
            {
                label: 'option 4',
                value: '4',
                isDisabled: true
            }

        ]
    }
];
