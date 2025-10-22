import {TreeViewData} from '~/components/TreeView/TreeView.types';

export const dropdownDataTreeImages: TreeViewData[] = [
    {
        id: 'group-images-options',
        label: 'Image Options',
        hasChildren: true,
        children: [
            {
                id: 'img-1',
                label: 'option 1',
                value: 'img-1',
                iconStart: <img src="https://picsum.photos/id/237/200/300" alt="img-1"/>
            },
            {
                id: 'img-2',
                label: 'option 2',
                value: 'img-2',
                iconStart: <img src="https://picsum.photos/id/237/400/300" alt="img-2"/>
            },
            {
                id: 'img-3',
                label: 'option 3 with very long long label label label label label label label label',
                value: 'img-3',
                iconStart: <img src="https://picsum.photos/id/237/200/600" alt="img-3"/>
            },
            {
                id: 'img-4',
                label: 'option 4 (disabled)',
                value: 'img-4',
                isDisabled: true,
                iconStart: <img src="https://picsum.photos/id/237/32/32" alt="img-4"/>
            },
            {
                id: 'img-5',
                label: 'option 5',
                value: 'img-5',
                iconStart: <img src="https://picsum.photos/id/237/32/32" alt="img-5"/>
            },
            {
                id: 'img-6',
                label: 'option 6',
                value: 'img-6',
                iconStart: <img src="https://picsum.photos/id/237/32/32" alt="img-6"/>
            },
            {
                id: 'img-7',
                label: 'option 7',
                value: 'img-7',
                iconStart: <img src="https://picsum.photos/id/237/32/32" alt="img-7"/>
            },
            {
                id: 'img-8',
                label: 'option 8',
                value: 'img-8',
                iconStart: <img src="https://picsum.photos/id/237/32/32" alt="img-8"/>
            },
            {
                id: 'img-9',
                label: 'option 9',
                value: 'img-9',
                iconStart: <img src="https://picsum.photos/id/237/32/32" alt="img-9"/>
            },
            {
                id: 'img-10',
                label: 'option 10',
                value: 'img-10',
                iconStart: <img src="https://picsum.photos/id/237/32/32" alt="img-10"/>
            },
            {
                id: 'img-11',
                label: 'option 11',
                value: 'img-11',
                iconStart: <img src="https://picsum.photos/id/237/32/32" alt="img-11"/>
            }
        ]
    }
];
