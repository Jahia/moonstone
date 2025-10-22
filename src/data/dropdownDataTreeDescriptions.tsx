import {TreeViewData} from '~/components/TreeView/TreeView.types';
import {Folder, Lock} from '~/icons';

export const dropdownDataTreeDescriptions: TreeViewData[] = [
    {
        id: 'group-images',
        label: 'Images Group',
        hasChildren: true,
        children: [
            {
                id: 'desc-1',
                label: 'label image 1',
                value: 'desc-1',
                className: 'tree-node--image',
                treeItemProps: {
                    className: 'tree-item--image'
                },
                iconStart: <img src="https://picsum.photos/id/237/200/300" alt="img1"/>
            },
            {
                id: 'desc-2',
                label: 'label image 2',
                value: 'desc-2',
                iconStart: <img src="https://picsum.photos/id/237/200/300" alt="img2"/>
            },
            {
                id: 'desc-13',
                label: 'label image',
                value: 'desc-13',
                iconStart: <img src="https://picsum.photos/id/237/200/300" alt="img3"/>
            }
        ]
    },
    {
        id: 'group-icons-start',
        label: 'Options with Icons Start',
        hasChildren: true,
        children: [
            {
                id: 'desc-3',
                label: 'option 1',
                value: 'desc-3',
                iconStart: <Folder/>
            },
            {
                id: 'desc-4',
                label: 'option 2',
                value: 'desc-4',
                iconStart: <Folder/>
            },
            {
                id: 'desc-10',
                label: 'option 1 with icon start',
                value: 'desc-10',
                iconStart: <Folder/>
            },
            {
                id: 'desc-11',
                label: 'option 2 with icon start and icon end',
                value: 'desc-11',
                iconStart: <Folder/>,
                iconEnd: <Lock/>
            }
        ]
    },
    {
        id: 'group-icons-end',
        label: 'Options with Icons End',
        hasChildren: true,
        children: [
            {
                id: 'desc-5',
                label: 'option 1 with icon end',
                value: 'desc-5',
                iconEnd: <Lock/>
            },
            {
                id: 'desc-6',
                label: 'option 2 with icon end',
                value: 'desc-6',
                iconEnd: <Lock/>
            },
            {
                id: 'desc-12',
                label: 'option 2 with icon end',
                value: 'desc-12',
                iconEnd: <Lock/>
            }
        ]
    },
    {
        id: 'group-start-end-icons',
        label: 'Options with Start & End Icons',
        hasChildren: true,
        children: [
            {
                id: 'desc-7',
                label: 'option 1 with icon end',
                value: 'desc-7',
                iconStart: <Folder/>,
                iconEnd: <Lock/>
            },
            {
                id: 'desc-8',
                label: 'option 2 with icon end',
                value: 'desc-8',
                iconStart: <Folder/>,
                iconEnd: <Lock/>
            }
        ]
    },
    {
        id: 'group-misc',
        label: 'Misc',
        hasChildren: true,
        isDisabled: true,
        children: [
            {
                id: 'desc-9',
                label: 'item with only a label',
                value: 'desc-9'
            }
        ]
    }
];
