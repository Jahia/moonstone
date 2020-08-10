import React from 'react';
import {Love, NoCloud} from '~/icons';
import myStyles from '~/components/TreeView/TreeView.stories.module.scss';
import {toIconComponent} from '~/icons/utils';

export const treeData = [
    {
        id: 'ROOT',
        label: 'Root',
        iconStart: toIconComponent('https://image.flaticon.com/icons/svg/1973/1973617.svg'),
        isClosable: false,
        children: [
            {
                id: 'A',
                label: 'A level 1',
                iconStart: toIconComponent('https://image.flaticon.com/icons/svg/1973/1973617.svg'),
                iconEnd: <NoCloud/>,
                children: [
                    {
                        id: 'A1',
                        label: 'A-1 level2 with a very very very long laaaaaaaaaaaaaaaaaaabel with many many words',
                        typographyOptions: {hasLineThrough: true},
                        iconStart: toIconComponent('https://image.flaticon.com/icons/svg/1973/1973617.svg'),
                        iconEnd: <NoCloud/>,
                        children: [
                            {
                                id: 'A11',
                                label: 'A-2 level2',
                                typographyOptions: {isItalic: true},
                                iconStart: toIconComponent('https://image.flaticon.com/icons/svg/1973/1973617.svg')
                            },
                            {id: 'A12', label: 'A-3 level2', iconStart: <Love/>, className: myStyles.colorTest},
                            {id: 'A13', label: 'A-4 level2'}
                        ]
                    },
                    {id: 'A2', label: 'A-2 level2', iconStart: <Love/>, className: myStyles.colorTest},
                    {id: 'A3', label: 'A-3 level2'},
                    {id: 'A4', label: 'A-4 level2'}
                ]
            },
            {
                id: 'B',
                label: 'B level1',
                iconStart: <Love/>,
                className: myStyles.colorTest,
                children: [
                    {id: 'B1', label: 'B-1 level2', className: myStyles.colorTest},
                    {id: 'B2', label: 'B-2 level2', className: myStyles.colorTest},
                    {id: 'B3', label: 'B-3 level2', className: myStyles.colorTest},
                    {
                        id: 'B4', label: 'B-4 level2', iconStart: <Love/>, className: myStyles.colorTest, children: [
                            {id: 'B11', label: 'B-1-1 level3', iconStart: <Love/>, className: myStyles.colorTest},
                            {
                                id: 'B22',
                                label: 'B-2-2 level3',
                                iconStart: toIconComponent('https://image.flaticon.com/icons/svg/1973/1973617.svg')
                            },
                            {id: 'B33', label: 'B-3-3 level3', iconStart: <Love/>, className: myStyles.colorTest},
                            {id: 'B44', label: 'B-4-4 level3', iconStart: <Love/>, className: myStyles.colorTest}
                        ]
                    }
                ]
            },
            {
                id: 'C',
                label: 'C level1',
                iconStart: toIconComponent('https://image.flaticon.com/icons/svg/1973/1973617.svg'),
                children: []
            }
        ]
    }
];
