import type {UserDataRowProps} from '../types/UserDataRow.types';

export const TableData: UserDataRowProps[] = [
    {
        firstName: {
            label: 'Yacine',
            subLabel: 'Lead Developer', 
        },
        lastName: 'Bouklif', 
        age: 26,
        status: 'Online', 
        tags: ['Admin'], 
        progress: 1540.50, 
        date: new Date('2024-12-01'),
        subRows: [
            {
                firstName: {
                    label: 'Sub-Yacine',
                },
                lastName: 'Bouklif Jr',
                age: 5,
                status: 'Offline',
                progress: 0,
                date: new Date('2024-06-10')
            }
        ]
    },
    {
        firstName: {
            label: 'Yacinator'
        },
        lastName: 'Bouklifator',
        age: 36,
        status: 'Busy',
        tags: ['Contractor'], 
        progress: 9000,
        date: new Date('2024-03-15')
    }
];
