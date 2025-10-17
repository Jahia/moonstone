import {Folder, Lock} from '~/icons';

export const dropdownGroupedDataDescriptions = [
    {
        groupLabel: 'test for item list with image',
        options: [
            {
                label: 'label image 1',
                value: 'group01-item01',
                description: 'very long description for image 1 very long description for image 1 very long description for image 1',
                attributes: {
                    id: 'custom-id-1',
                    imageSize: 'small'
                },
                image: <img src="https://via.placeholder.com/50?text=ListItemImag"/>
            },
            {
                label: 'label image 2',
                value: 'group01-item02',
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
                value: 'group02-item01',
                iconStart: <Folder/>
            },
            {
                label: 'option 2',
                value: 'group02-item02',
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
                value: 'group03-item01',
                description: 'very long description for option 1 very long description for option 1 very long description for option 1',
                iconEnd: <Lock/>
            },
            {
                label: 'option 2 with icon end',
                value: 'group03-item02',
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
                value: 'group04-item01',
                description: 'very long description for option 1 very long description for option 1 very long description for option 1',
                iconStart: <Folder/>,
                iconEnd: <Lock/>
            },
            {
                label: 'option 2 with icon end',
                value: 'group04-item02',
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
                label: 'item with only a label',
                value: 'group05-item01'
            },
            {
                label: 'option 1 with icon start',
                value: 'group05-item02',
                iconStart: <Folder/>
            },
            {
                label: 'option 2 with icon start and icon end',
                value: 'group05-item03',
                iconStart: <Folder/>,
                iconEnd: <Lock/>
            },
            {
                label: 'option 2 with icon end',
                value: 'group05-item04',
                iconEnd: <Lock/>
            },
            {
                label: 'label image',
                value: 'group05-item05',
                attributes: {
                    id: 'custom-id-100',
                    imageSize: 'small'
                },
                image: <img src="https://via.placeholder.com/50?text=ListItemImag"/>
            }
        ]
    }
];
