import {DropdownDataGrouped} from '~/components/Dropdown/Dropdown.types';

export const dropdownDataGroupedImages: DropdownDataGrouped[] = [
    {
        groupLabel: 'Description groupe',
        options: [
            {
                label: 'option 1',
                value: 'img-group-1',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/4/260/220"/>
            },
            {
                label: 'option 2',
                value: 'img-group-2',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/7/300/260"/>
            },
            {
                label: 'option 3 with very long long label label label label label label label label',
                value: 'img-group-3',
                description: 'very long description for image 1 very long description for image 1 very long description for image 1',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/6/260/260"/>
            },
            {
                label: 'option 4 (disabled)',
                value: 'img-group-4',
                isDisabled: true,
                image: <img src="https://www.placeholderimage.eu/api/nature/id/4/240/260"/>
            }
        ]
    },
    {
        groupLabel: 'Images Group 2',
        options: [
            {
                label: 'option 5',
                description: 'This a description for image group 2',
                value: 'img-group-5',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/7/260/300"/>
            },
            {
                label: 'option 6',
                value: 'img-group-6',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/6/280/260"/>
            },
            {
                label: 'option 7',
                value: 'img-group-7',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/4/260/260"/>
            }
        ]
    },
    {
        groupLabel: 'Images Group 3',
        options: [
            {
                label: 'option 8',
                value: 'img-group-8',
                description: 'This a description for image group 3',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/7/260/260"/>
            },
            {
                label: 'option 9',
                value: 'img-group-9',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/6/260/240"/>
            },
            {
                label: 'option 10',
                value: 'img-group-10',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/4/300/260"/>
            },
            {
                label: 'option 11',
                value: 'img-group-11',
                image: <img src="https://www.placeholderimage.eu/api/nature/id/7/260/260"/>
            }
        ]
    }
];
