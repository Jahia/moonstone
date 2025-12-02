import {Person, FolderUser} from '~/icons';

export const dataTable = [
    {
        firstName: {
            value: 'Yacine',
            icon: <Person/>
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
                    value: 'Sub-Yacine 1',
                    icon: <Person/>
                },
                lastName: 'Bouklif Jr',
                age: 5,
                status: 'In progress',
                progress: 50,
                date: new Date('2024-06-10')
            },
            {
                firstName: {
                    value: 'Sub-Yacine 2',
                    icon: <Person/>
                },
                lastName: 'Bouklif III',
                age: 3,
                status: 'Accept',
                progress: 100,
                date: new Date('2024-07-20')
            }
        ]
    },
    {
        firstName: {
            value: 'Yacinator',
            icon: <FolderUser/>
        },
        lastName: 'Bouklifator',
        age: 36,
        status: 'Accept',
        progress: 90,
        date: new Date('2024-03-15'),
        subRows: [
            {
                firstName: {
                    value: 'Mini Yacinator',
                    icon: <Person/>
                },
                lastName: 'Bouklifator Jr',
                age: 8,
                status: 'Refuse',
                progress: 30,
                date: new Date('2024-08-01')
            }
        ]
    },
    {
        firstName: {
            value: 'YacineYacine',
            icon: <Person/>
        },
        lastName: 'BouklifBouklif',
        age: 46,
        status: 'Accept',
        progress: 100,
        date: new Date(2024, 2, 15)
    }
];
