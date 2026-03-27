import type {DataUser} from './columnsUser';

export const dataTable: DataUser[] = [
    {
        firstName: 'Walter',
        lastName: 'White',
        age: 52,
        status: 'published',
        progress: 99,
        date: new Date('2024-01-15'),
        subRows: [
            {
                firstName: 'Jesse',
                lastName: 'Pinkman',
                age: 27,
                status: 'modified',
                progress: 75,
                date: new Date('2024-06-10'),
                subRows: [
                    {
                        firstName: 'Badger',
                        lastName: 'Unknown',
                        age: 35,
                        status: 'published',
                        progress: 60,
                        date: new Date('2024-07-01')
                    },
                    {
                        firstName: 'Skinny',
                        lastName: 'Pete',
                        age: 32,
                        status: 'unpublished',
                        progress: 45,
                        date: new Date('2024-07-15')
                    }
                ]
            },
            {
                firstName: 'Skyler',
                lastName: 'White',
                age: 40,
                status: 'published',
                progress: 85,
                date: new Date('2024-05-20')
            }
        ]
    },
    {
        firstName: 'Jon',
        lastName: 'Snow',
        age: 24,
        status: 'published',
        progress: 85,
        date: new Date('2024-03-15'),
        subRows: [
            {
                firstName: 'Samwell',
                lastName: 'Tarly',
                age: 28,
                status: 'published',
                progress: 90,
                date: new Date('2024-03-20'),
                subRows: [
                    {
                        firstName: 'Gilly',
                        lastName: 'Tarly',
                        age: 22,
                        status: 'deleted',
                        progress: 95,
                        date: new Date('2024-03-25')
                    }
                ]
            },
            {
                firstName: 'Ghost',
                lastName: 'Direwolf',
                age: 5,
                status: 'published',
                progress: 100,
                date: new Date('2024-03-18')
            }
        ]
    },
    {
        firstName: 'Eleven',
        lastName: 'Hopper',
        age: 15,
        status: 'published',
        progress: 100,
        date: new Date('2024-01-20')
    },
    {
        firstName: 'Thomas',
        lastName: 'Shelby',
        age: 34,
        status: 'modified',
        progress: 95,
        date: new Date('2024-02-10'),
        subRows: [
            {
                firstName: 'Arthur',
                lastName: 'Shelby',
                age: 38,
                status: 'published',
                progress: 88,
                date: new Date('2024-02-12'),
                subRows: [
                    {
                        firstName: 'John',
                        lastName: 'Shelby',
                        age: 35,
                        status: 'modified',
                        progress: 72,
                        date: new Date('2024-02-13')
                    },
                    {
                        firstName: 'Finn',
                        lastName: 'Shelby',
                        age: 17,
                        status: 'new',
                        progress: 55,
                        date: new Date('2024-02-14')
                    }
                ]
            },
            {
                firstName: 'Polly',
                lastName: 'Gray',
                age: 45,
                status: 'published',
                progress: 92,
                date: new Date('2024-02-15'),
                subRows: [
                    {
                        firstName: 'Mikey',
                        lastName: 'Gray',
                        age: 22,
                        status: 'published',
                        progress: 68,
                        date: new Date('2024-02-16')
                    }
                ]
            }
        ]
    },
    {
        firstName: 'Tony',
        lastName: 'Soprano',
        age: 47,
        status: 'modified',
        progress: 87,
        date: new Date('2024-01-10'),
        subRows: [
            {
                firstName: 'Christopher',
                lastName: 'Moltisanti',
                age: 30,
                status: 'published',
                progress: 65,
                date: new Date('2024-01-11'),
                subRows: [
                    {
                        firstName: 'Paulie',
                        lastName: 'Walnuts',
                        age: 55,
                        status: 'published',
                        progress: 78,
                        date: new Date('2024-01-12')
                    },
                    {
                        firstName: 'Silvio',
                        lastName: 'Dante',
                        age: 50,
                        status: 'unpublished',
                        progress: 82,
                        date: new Date('2024-01-13')
                    }
                ]
            },
            {
                firstName: 'Bobby',
                lastName: 'Baccalieri',
                age: 42,
                status: 'published',
                progress: 70,
                date: new Date('2024-01-14')
            }
        ]
    },
    {
        firstName: 'Rick',
        lastName: 'Grimes',
        age: 42,
        status: 'unpublished',
        progress: 70,
        date: new Date('2024-04-05')
    },
    {
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        age: 23,
        status: 'published',
        progress: 90,
        date: new Date('2024-05-15')
    },
    {
        firstName: 'Geralt',
        lastName: 'of Rivia',
        age: 100,
        status: 'published',
        progress: 88,
        date: new Date('2024-06-20')
    },
    {
        firstName: 'Michael',
        lastName: 'Scott',
        age: 46,
        status: 'published',
        progress: 15,
        date: new Date('2024-07-01')
    },
    {
        firstName: 'Tyrion',
        lastName: 'Lannister',
        age: 38,
        status: 'published',
        progress: 92,
        date: new Date('2024-08-12')
    },
    {
        firstName: 'Sherlock',
        lastName: 'Holmes',
        age: 35,
        status: 'modified',
        progress: 100,
        date: new Date('2024-09-25')
    },
    {
        firstName: 'Saul',
        lastName: 'Goodman',
        age: 48,
        status: 'published',
        progress: 80,
        date: new Date('2024-10-08')
    },
    {
        firstName: 'Arya',
        lastName: 'Stark',
        age: 18,
        status: 'published',
        progress: 95,
        date: new Date('2024-11-18')
    }
];
