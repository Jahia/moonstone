
import type {dataUser} from './dataColumnsUser';

export const dataTable: dataUser[] = [
    {
        firstName: {
            value: 'Yacine'
        },
        lastName: 'Bouklif',
        age: 26,
        status: 'Accept',
        progress: 80,
        date: new Date(),
        actions: '',
        subRows: [
            {
                firstName: {
                    value: 'Sub-Yacine'
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
            value: 'Yacinator'
        },
        lastName: 'Bouklifator',
        age: 36,
        status: 'Busy',
        tags: 'Contractor',
        progress: 9000,
        date: new Date('2024-03-15')
    }
];
