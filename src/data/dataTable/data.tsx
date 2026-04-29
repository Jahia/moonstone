import type {DataUser, DataUserFlat} from './columnsUser';

export const tableStructured: DataUser[] = [
    {
        id: '1',
        firstName: 'Walter Hartwell White the Great Heisenberg',
        lastName: 'White-McFarlane-Johnson-Williams',
        age: 52,
        status: 'published',
        progress: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
        date: new Date('2024-01-15'),
        subRows: [
            {
                id: '2',
                firstName: 'Jesse Bruce Pinkman the Blue Sky Master',
                lastName: 'Pinkman-Rodriguez-Hernandez',
                age: 27,
                status: 'modified',
                progress: 75,
                date: new Date('2024-06-10'),
                subRows: [
                    {
                        id: '3',
                        firstName: 'Badger',
                        lastName: 'Unknown',
                        age: 35,
                        status: 'published',
                        progress: 60,
                        date: new Date('2024-07-01')
                    },
                    {
                        id: '4',
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
                id: '5',
                firstName: 'Skyler',
                lastName: 'White White White White White White White White White White White White White',
                age: 40,
                status: 'published',
                progress: 85,
                date: new Date('2024-05-20')
            }
        ]
    },
    {
        id: '6',
        firstName: 'Jon Aegon Targaryen Snow the King in the North',
        lastName: 'Snow-Stark-Targaryen',
        age: 24,
        status: 'published',
        progress: 85,
        date: new Date('2024-03-15'),
        subRows: [
            {
                id: '7',
                firstName: 'Samwell',
                lastName: 'Tarly',
                age: 28,
                status: 'published',
                progress: 90,
                date: new Date('2024-03-20'),
                subRows: [
                    {
                        id: '8',
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
                id: '9',
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
        id: '10',
        firstName: 'Eleven',
        lastName: 'Hopper',
        age: 15,
        status: 'published',
        progress: 100,
        date: new Date('2024-01-20')
    },
    {
        id: '11',
        firstName: 'Thomas',
        lastName: 'Shelby',
        age: 34,
        status: 'modified',
        progress: 95,
        date: new Date('2024-02-10'),
        subRows: [
            {
                id: '12',
                firstName: 'Arthur',
                lastName: 'Shelby',
                age: 38,
                status: 'published',
                progress: 88,
                date: new Date('2024-02-12'),
                subRows: [
                    {
                        id: '13',
                        firstName: 'John',
                        lastName: 'Shelby',
                        age: 35,
                        status: 'modified',
                        progress: 72,
                        date: new Date('2024-02-13')
                    },
                    {
                        id: '14',
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
                id: '15',
                firstName: 'Polly',
                lastName: 'Gray',
                age: 45,
                status: 'published',
                progress: 92,
                date: new Date('2024-02-15'),
                subRows: [
                    {
                        id: '16',
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
        id: '17',
        firstName: 'Tony',
        lastName: 'Soprano',
        age: 47,
        status: 'modified',
        progress: 87,
        date: new Date('2024-01-10'),
        subRows: [
            {
                id: '18',
                firstName: 'Christopher',
                lastName: 'Moltisanti',
                age: 30,
                status: 'published',
                progress: 65,
                date: new Date('2024-01-11'),
                subRows: [
                    {
                        id: '19',
                        firstName: 'Paulie',
                        lastName: 'Walnuts',
                        age: 55,
                        status: 'published',
                        progress: 78,
                        date: new Date('2024-01-12')
                    },
                    {
                        id: '20',
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
                id: '21',
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
        id: '22',
        firstName: 'Rick',
        lastName: 'Grimes',
        age: 42,
        status: 'unpublished',
        progress: 70,
        date: new Date('2024-04-05')
    },
    {
        id: '23',
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        age: 23,
        status: 'published',
        progress: 90,
        date: new Date('2024-05-15')
    },
    {
        id: '24',
        firstName: 'Geralt',
        lastName: 'of Rivia',
        age: 100,
        status: 'published',
        progress: 88,
        date: new Date('2024-06-20')
    },
    {
        id: '25',
        firstName: 'Michael',
        lastName: 'Scott',
        age: 46,
        status: 'published',
        progress: 15,
        date: new Date('2024-07-01')
    },
    {
        id: '26',
        firstName: 'Tyrion',
        lastName: 'Lannister',
        age: 38,
        status: 'published',
        progress: 92,
        date: new Date('2024-08-12')
    },
    {
        id: '27',
        firstName: 'Sherlock',
        lastName: 'Holmes',
        age: 35,
        status: 'modified',
        progress: 100,
        date: new Date('2024-09-25')
    },
    {
        id: '28',
        firstName: 'Saul',
        lastName: 'Goodman',
        age: 48,
        status: 'published',
        progress: 80,
        date: new Date('2024-10-08')
    },
    {
        id: '29',
        firstName: 'Arya',
        lastName: 'Stark',
        age: 18,
        status: 'published',
        progress: 95,
        date: new Date('2024-11-18')
    }
];

export const tableFlat: DataUserFlat[] = [
    {
        id: '1',
        firstName: 'Walter Hartwell White the Great Heisenberg',
        lastName: 'White-McFarlane-Johnson-Williams',
        age: 52,
        status: 'published',
        progress: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
        date: new Date('2024-01-15')
    },
    {
        id: '2',
        firstName: 'Jesse Bruce Pinkman the Blue Sky Master',
        lastName: 'Pinkman-Rodriguez-Hernandez',
        age: 27,
        status: 'modified',
        progress: 75,
        date: new Date('2024-06-10')
    },
    {
        id: '3',
        firstName: 'Badger',
        lastName: 'Unknown',
        age: 35,
        status: 'published',
        progress: 60,
        date: new Date('2024-07-01')
    },
    {
        id: '4',
        firstName: 'Skinny',
        lastName: 'Pete',
        age: 32,
        status: 'unpublished',
        progress: 45,
        date: new Date('2024-07-15')
    },
    {
        id: '5',
        firstName: 'Skyler',
        lastName: 'White White White White White White White White White White White White White',
        age: 40,
        status: 'published',
        progress: 85,
        date: new Date('2024-05-20')
    },
    {
        id: '6',
        firstName: 'Jon Aegon Targaryen Snow the King in the North',
        lastName: 'Snow-Stark-Targaryen',
        age: 24,
        status: 'published',
        progress: 85,
        date: new Date('2024-03-15')
    },
    {
        id: '7',
        firstName: 'Samwell',
        lastName: 'Tarly',
        age: 28,
        status: 'published',
        progress: 90,
        date: new Date('2024-03-20')
    },
    {
        id: '8',
        firstName: 'Gilly',
        lastName: 'Tarly',
        age: 22,
        status: 'deleted',
        progress: 95,
        date: new Date('2024-03-25')
    },
    {
        id: '9',
        firstName: 'Ghost',
        lastName: 'Direwolf',
        age: 5,
        status: 'published',
        progress: 100,
        date: new Date('2024-03-18')
    },
    {
        id: '10',
        firstName: 'Eleven',
        lastName: 'Hopper',
        age: 15,
        status: 'published',
        progress: 100,
        date: new Date('2024-01-20')
    },
    {
        id: '11',
        firstName: 'Thomas',
        lastName: 'Shelby',
        age: 34,
        status: 'modified',
        progress: 95,
        date: new Date('2024-02-10')
    },
    {
        id: '12',
        firstName: 'Arthur',
        lastName: 'Shelby',
        age: 38,
        status: 'published',
        progress: 88,
        date: new Date('2024-02-12')
    },
    {
        id: '13',
        firstName: 'John',
        lastName: 'Shelby',
        age: 35,
        status: 'modified',
        progress: 72,
        date: new Date('2024-02-13')
    },
    {
        id: '14',
        firstName: 'Finn',
        lastName: 'Shelby',
        age: 17,
        status: 'new',
        progress: 55,
        date: new Date('2024-02-14')
    },
    {
        id: '15',
        firstName: 'Polly',
        lastName: 'Gray',
        age: 45,
        status: 'published',
        progress: 92,
        date: new Date('2024-02-15')
    },
    {
        id: '16',
        firstName: 'Mikey',
        lastName: 'Gray',
        age: 22,
        status: 'published',
        progress: 68,
        date: new Date('2024-02-16')
    },
    {
        id: '17',
        firstName: 'Tony',
        lastName: 'Soprano',
        age: 47,
        status: 'modified',
        progress: 87,
        date: new Date('2024-01-10')
    },
    {
        id: '18',
        firstName: 'Christopher',
        lastName: 'Moltisanti',
        age: 30,
        status: 'published',
        progress: 65,
        date: new Date('2024-01-11')
    },
    {
        id: '19',
        firstName: 'Paulie',
        lastName: 'Walnuts',
        age: 55,
        status: 'published',
        progress: 78,
        date: new Date('2024-01-12')
    },
    {
        id: '20',
        firstName: 'Silvio',
        lastName: 'Dante',
        age: 50,
        status: 'unpublished',
        progress: 82,
        date: new Date('2024-01-13')
    },
    {
        id: '21',
        firstName: 'Bobby',
        lastName: 'Baccalieri',
        age: 42,
        status: 'published',
        progress: 70,
        date: new Date('2024-01-14')
    },
    {
        id: '22',
        firstName: 'Rick',
        lastName: 'Grimes',
        age: 42,
        status: 'unpublished',
        progress: 70,
        date: new Date('2024-04-05')
    },
    {
        id: '23',
        firstName: 'Daenerys',
        lastName: 'Targaryen',
        age: 23,
        status: 'published',
        progress: 90,
        date: new Date('2024-05-15')
    },
    {
        id: '24',
        firstName: 'Geralt',
        lastName: 'of Rivia',
        age: 100,
        status: 'published',
        progress: 88,
        date: new Date('2024-06-20')
    },
    {
        id: '25',
        firstName: 'Michael',
        lastName: 'Scott',
        age: 46,
        status: 'published',
        progress: 15,
        date: new Date('2024-07-01')
    },
    {
        id: '26',
        firstName: 'Tyrion',
        lastName: 'Lannister',
        age: 38,
        status: 'published',
        progress: 92,
        date: new Date('2024-08-12')
    },
    {
        id: '27',
        firstName: 'Sherlock',
        lastName: 'Holmes',
        age: 35,
        status: 'modified',
        progress: 100,
        date: new Date('2024-09-25')
    },
    {
        id: '28',
        firstName: 'Saul',
        lastName: 'Goodman',
        age: 48,
        status: 'published',
        progress: 80,
        date: new Date('2024-10-08')
    },
    {
        id: '29',
        firstName: 'Arya',
        lastName: 'Stark',
        age: 18,
        status: 'published',
        progress: 95,
        date: new Date('2024-11-18')
    }
];
