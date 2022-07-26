import React from 'react';
import {Folder, Lock} from '~/icons';

export const dropdownData = [
    {
        label: 'option 1',
        value: '1'
    },
    {
        label: 'option 2',
        value: '2'
    },
    {
        label: 'option 3 with very long long label label label label label label label label',
        value: '3'
    },
    {
        label: 'option 4',
        value: '4',
        isDisabled: true
    },
    {
        label: 'option 5 with iconStart',
        value: '5',
        iconStart: <Folder/>,
    },
    {
        label: 'option 6 with iconEnd',
        value: '6',
        iconEnd: <Lock/>,
    },
    {
        label: 'option 7 with icons',
        value: '7',
        iconStart: <Folder/>,
        iconEnd: <Lock/>

    },
    {
        label: 'option 8 with custom id',
        value: '8',
        attributes: {
            id: 'custom-id'
        }
    },
    {
        label: 'option 9',
        value: '9'
    },
    {
        label: 'option 10',
        value: '10'
    },
    {
        label: 'option 11',
        value: '11'
    }
];
