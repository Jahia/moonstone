import React from 'react';
import {DropdownData} from '~/components/Dropdown/Dropdown.types';

export const dropdownDataImages: DropdownData[] = [
    {
        groupLabel: 'Options 1-3',
        options: [
            {
                label: 'option 1',
                value: '1',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            },
            {
                label: 'option 2',
                value: '2',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            },
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: '3',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            }
        ]
    },
    {
        groupLabel: 'Options 4-11',
        options: [
            {
                label: 'option 4',
                value: '4',
                isDisabled: true,
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            },
            {
                label: 'option 5',
                value: '5',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>,
                isDisabled: true
            },
            {
                label: 'option 6',
                value: '6',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            },
            {
                label: 'option 7',
                value: '7',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            },
            {
                label: 'option 8',
                value: '8',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            },
            {
                label: 'option 9',
                value: '9',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            },
            {
                label: 'option 10',
                value: '10',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            },
            {
                label: 'option 11',
                value: '11',
                image: <img src="https://api.lorem.space/image/drink?w=150&h=150"/>
            }
        ]
    }
];
