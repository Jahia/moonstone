import type {DataUser} from './dataColumnsUser';

export const dataTable: DataUser[] = [
    {
        firstName: 'Walter',
        lastName: 'White',
        age: 52,
        status: 'Active',
        progress: 99,
        date: new Date('2024-01-15'),
        chips: ['Chemist', 'Teacher'],
        subRows: [
            {
                firstName: 'Jesse',
                lastName: 'Pinkman',
                age: 27,
                status: 'Busy',
                progress: 75,
                date: new Date('2024-06-10')
            }
        ]
    },
    {
        firstName: 'Jon',
        lastName: 'Snow',
        age: 24,
        status: 'Active',
        chips: ['Commander'],
        progress: 85,
        date: new Date('2024-03-15')
    },
    {
        firstName: 'Eleven',
        lastName: 'Hopper',
        age: 15,
        status: 'Active',
        chips: ['Telekinetic'],
        progress: 100,
        date: new Date('2024-01-20')
    },
    {
        firstName: 'Thomas',
        lastName: 'Shelby',
        age: 34,
        status: 'Busy',
        chips: ['Boss', 'MP'],
        progress: 95,
        date: new Date('2024-02-10')
    },
    {
        firstName: 'Rick',
        lastName: 'Grimes',
        age: 42,
        status: 'Offline',
        chips: ['Sheriff'],
        progress: 70,
        date: new Date('2024-04-05')
    },
    {
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        age: 23,
        status: 'Active',
        chips: ['Queen', 'Dragon'],
        progress: 90,
        date: new Date('2024-05-15')
    },
    {
        firstName: 'Geralt',
        lastName: 'of Rivia',
        age: 100,
        status: 'Active',
        chips: ['Witcher'],
        progress: 88,
        date: new Date('2024-06-20')
    },
    {
        firstName: 'Michael',
        lastName: 'Scott',
        age: 46,
        status: 'Active',
        chips: ['Manager'],
        progress: 15,
        date: new Date('2024-07-01')
    },
    {
        firstName: 'Tyrion',
        lastName: 'Lannister',
        age: 38,
        status: 'Active',
        chips: ['Hand'],
        progress: 92,
        date: new Date('2024-08-12')
    },
    {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        age: 35,
        status: 'Busy',
        chips: ['Detective'],
        progress: 100,
        date: new Date('2024-09-25')
    },
    {
        firstName: 'Saul',
        lastName: 'Goodman',
        age: 48,
        status: 'Active',
        chips: ['Lawyer'],
        progress: 80,
        date: new Date('2024-10-08')
    },
    {
        firstName: 'Arya',
        lastName: 'Stark',
        age: 18,
        status: 'Active',
        chips: ['Assassin'],
        progress: 95,
        date: new Date('2024-11-18')
    }
];
