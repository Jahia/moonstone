// The data to populate the table in Storybook

import {UserDataRowProps} from '../types/UserDataRow.types';

export const TableData: UserDataRowProps[] = [
    {
        firstName: 'Yacine',
        lastName: 'Bouklif',
        age: 26,
        status: 'Accept',
        progress: 80,
        date: new Date()
    },
    {
        firstName: 'Yacinator',
        lastName: 'Bouklifator',
        age: 36,
        status: 'Accept',
        progress: 90,
        date: new Date('2024-03-15')
    },
    {
        firstName: 'YacineYacine',
        lastName: 'BouklifBouklif',
        age: 46,
        status: 'Accept',
        progress: 100,
        date: new Date(2024, 2, 15)
    }
];
