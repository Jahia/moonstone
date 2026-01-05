
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
    },
    {
        firstName: 'Alice',
        lastName: 'Martin',
        age: 28,
        status: 'Accept',
        progress: 65,
        date: new Date('2024-01-20')
    },
    {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 34,
        status: 'Busy',
        progress: 45,
        date: new Date('2024-02-10')
    },
    {
        firstName: 'Charlie',
        lastName: 'Brown',
        age: 42,
        status: 'Offline',
        chips: ['Manager'],
        progress: 90,
        date: new Date('2024-04-05')
    },
    {
        firstName: 'Diana',
        lastName: 'Prince',
        age: 30,
        status: 'Accept',
        progress: 75,
        date: new Date('2024-05-15')
    },
    {
        firstName: 'Edward',
        lastName: 'Norton',
        age: 45,
        status: 'Busy',
        chips: ['Developer', 'Lead'],
        progress: 88,
        date: new Date('2024-06-20')
    },
    {
        firstName: 'Fiona',
        lastName: 'Green',
        age: 29,
        status: 'Accept',
        progress: 55,
        date: new Date('2024-07-01')
    },
    {
        firstName: 'George',
        lastName: 'Wilson',
        age: 38,
        status: 'Offline',
        progress: 30,
        date: new Date('2024-08-12')
    },
    {
        firstName: 'Hannah',
        lastName: 'Davis',
        age: 25,
        status: 'Accept',
        chips: ['Intern'],
        progress: 20,
        date: new Date('2024-09-25')
    },
    {
        firstName: 'Ivan',
        lastName: 'Petrov',
        age: 33,
        status: 'Busy',
        progress: 70,
        date: new Date('2024-10-08')
    },
    {
        firstName: 'Julia',
        lastName: 'Roberts',
        age: 31,
        status: 'Accept',
        chips: ['Designer'],
        progress: 85,
        date: new Date('2024-11-18')
    }
];

