import React from 'react';
import {Folder, Lock} from '~/icons';

export const dropdownDataDescriptions = [
    {
        groupLabel: 'test for item list with image',
        options: [
            {
                label: 'label image 1',
                value: 'image-1',
                description: 'very long description for image 1 very long description for image 1 very long description for image 1',
                attributes: {
                    id: 'custom-id-1',
                    imageSize: 'small'
                },
                image: <img src="https://via.placeholder.com/50?text=ListItemImag"/>
            },
            {
                label: 'label image 2',
                value: 'image-2',
                description: 'description for image 2',
                attributes: {
                    id: 'custom-id',
                    imageSize: 'small'
                },
                image: <img src="https://via.placeholder.com/50?text=ListItemImag"/>
            }
        ]
    },
    {
        groupLabel: 'test for item list with icon start',
        options: [
            {
                label: 'option 1',
                description: 'very long description for option 1 very long description for option 1 very long description for option 1',
                value: '1',
                iconStart: <Folder/>
            },
            {
                label: 'option 2',
                value: '2',
                description: 'description for option 2',
                iconStart: <Folder/>
            }
        ]
    },
    {
        groupLabel: 'test for item list with icon end',
        options: [
            {
                label: 'option 1 with icon end',
                value: '1',
                description: 'very long description for option 1 very long description for option 1 very long description for option 1',
                iconEnd: <Lock/>
            },
            {
                label: 'option 2 with icon end',
                value: '2',
                description: 'description for option 2',
                iconEnd: <Lock/>
            }
        ]
    },
    {
        groupLabel: 'test for item list with icon start and icon end',
        options: [
            {
                label: 'option 1 with icon end',
                value: '1',
                description: 'very long description for option 1 very long description for option 1 very long description for option 1',
                iconStart: <Folder/>,
                iconEnd: <Lock/>
            },
            {
                label: 'option 2 with icon end',
                value: '2',
                description: 'description for option 2',
                iconStart: <Folder/>,
                iconEnd: <Lock/>
            }
        ]
    },
    {
        groupLabel: 'test for item list sans description',
        options: [
            {
                label: 'option 1 with icon end',
                value: '100',
                iconStart: <Folder/>
            },
            {
                label: 'option 2 with icon end',
                value: '200',
                iconStart: <Folder/>,
                iconEnd: <Lock/>
            },
            {
                label: 'option 2 with icon end',
                value: '300',
                iconEnd: <Lock/>
            },
            {
                label: 'label image',
                value: '400',
                attributes: {
                    id: 'custom-id-100',
                    imageSize: 'small'
                },
                image: <img src="https://via.placeholder.com/50?text=ListItemImag"/>
            }
        ]
    }
];
