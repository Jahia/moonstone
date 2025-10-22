import {Folder, Lock} from '~/icons';

export const dropdownDataDescriptions = [
    {
        label: 'label image 1',
        value: 'desc-1',
        description: 'very long description for image 1 very long description for image 1 very long description for image 1',
        attributes: {
            id: 'custom-id-1',
            imageSize: 'small'
        },
        image: <img src="https://picsum.photos/id/237/200/300"/>
    },
    {
        label: 'label image 2 (Disabled)',
        value: 'desc-2',
        description: 'description for image 2',
        attributes: {
            id: 'custom-id',
            imageSize: 'small'
        },
        image: <img src="https://picsum.photos/id/237/200/300"/>,
        isDisabled: true
    },
    {
        label: 'option 1',
        description: 'very long description for option 1 very long description for option 1 very long description for option 1',
        value: 'desc-3',
        iconStart: <Folder/>
    },
    {
        label: 'option 2',
        value: 'desc-4',
        description: 'description for option 2',
        iconStart: <Folder/>
    },
    {
        label: 'option 1 with icon end',
        value: 'desc-5',
        description: 'very long description for option 1 very long description for option 1 very long description for option 1',
        iconEnd: <Lock/>
    },
    {
        label: 'option 2 with icon end',
        value: 'desc-6',
        description: 'description for option 2',
        iconEnd: <Lock/>
    },
    {
        label: 'option 1 with icon end',
        value: 'desc-7',
        description: 'very long description for option 1 very long description for option 1 very long description for option 1',
        iconStart: <Folder/>,
        iconEnd: <Lock/>
    },
    {
        label: 'option 2 with icon end',
        value: 'desc-8',
        description: 'description for option 2',
        iconStart: <Folder/>,
        iconEnd: <Lock/>
    },
    {
        label: 'item with only a label',
        value: 'desc-9'
    },
    {
        label: 'option 1 with icon start',
        value: 'desc-10',
        iconStart: <Folder/>
    },
    {
        label: 'option 2 with icon start and icon end',
        value: 'desc-11',
        iconStart: <Folder/>,
        iconEnd: <Lock/>
    },
    {
        label: 'option 2 with icon end',
        value: 'desc-12',
        iconEnd: <Lock/>
    },
    {
        label: 'label image',
        value: 'desc-13',
        attributes: {
            id: 'custom-id-100',
            imageSize: 'small'
        },
        image: <img src="https://picsum.photos/id/237/200/300"/>
    }
];
