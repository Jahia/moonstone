import type {dataUser} from './dataColumnsUser';

export const dataTable: dataUser[] = [
    {
        firstName: 'User 1',
        lastName: 'Demo',
        age: 26,
        status: 'Active',
        progress: 80,
        date: new Date('2024-01-15'),
        subRows: [
            {
                firstName: 'User 1.1',
                lastName: 'Demo',
                age: 5,
                status: 'Offline',
                progress: 0,
                date: new Date('2024-06-10')
            }
        ]
    },
    {
        firstName: 'User 2',
        lastName: 'Demo',
        age: 36,
        status: 'Busy',
        chips: ['Contractor', 'Admin'],
        progress: 95,
        date: new Date('2024-03-15')
    },
    {
        firstName: 'User 3',
        lastName: 'Demo',
        age: 28,
        status: 'Active',
        progress: 65,
        date: new Date('2024-01-20')
    },
    {
        firstName: 'User 4',
        lastName: 'Demo',
        age: 34,
        status: 'Busy',
        progress: 45,
        date: new Date('2024-02-10')
    },
    {
        firstName: 'User 5',
        lastName: 'Demo',
        age: 42,
        status: 'Offline',
        chips: ['Manager'],
        progress: 90,
        date: new Date('2024-04-05')
    },
    {
        firstName: 'User 6',
        lastName: 'Demo',
        age: 30,
        status: 'Active',
        progress: 75,
        date: new Date('2024-05-15')
    },
    {
        firstName: 'User 7',
        lastName: 'Demo',
        age: 45,
        status: 'Busy',
        chips: ['Developer', 'Lead'],
        progress: 88,
        date: new Date('2024-06-20')
    },
    {
        firstName: 'User 8',
        lastName: 'Demo',
        age: 29,
        status: 'Active',
        progress: 55,
        date: new Date('2024-07-01')
    },
    {
        firstName: 'User 9',
        lastName: 'Demo',
        age: 38,
        status: 'Offline',
        progress: 30,
        date: new Date('2024-08-12')
    },
    {
        firstName: 'User 10',
        lastName: 'Demo',
        age: 25,
        status: 'Active',
        chips: ['Intern'],
        progress: 20,
        date: new Date('2024-09-25')
    },
    {
        firstName: 'User 11',
        lastName: 'Demo',
        age: 33,
        status: 'Busy',
        progress: 70,
        date: new Date('2024-10-08')
    },
    {
        firstName: 'User 12',
        lastName: 'Demo',
        age: 31,
        status: 'Active',
        chips: ['Designer'],
        progress: 85,
        date: new Date('2024-11-18')
    }
];
