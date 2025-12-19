
import type {dataUser} from './dataColumnsUser';

export const dataTable: dataUser[] = [
    {
        firstName: 'Yacine',
        lastName: 'Bouklif',
        age: 26,
        status: 'Accept',
        progress: 80,
        date: new Date(),
        subRows: [
            {
                firstName: 'Sub-Yacine',
                lastName: 'Bouklif Jr',
                age: 5,
                status: 'Offline',
                progress: 0,
                date: new Date('2024-06-10')
            }
        ]
    },
    {
        firstName: 'Yacinator',
        lastName: 'Bouklifator',
        age: 36,
        status: 'Busy',
        chips: ['Contractor', 'Admin'],
        progress: 9000,
        date: new Date('2024-03-15')
    }
];
