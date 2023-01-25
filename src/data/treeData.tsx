import React from 'react';

import type {TreeViewData} from '~/components/TreeView/TreeView.types';

import {Love, NoCloud} from '~/icons';
import myStyles from '~/components/TreeView/TreeView.stories.module.scss';
import {toIconComponent} from '~/icons/utils';

export const treeData: TreeViewData[] = [
    {
        id: 'ROOT',
        label: 'Root',
        iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com'),
        isClosable: false,
        children: [
            {
                id: 'A',
                label: 'A level 1',
                iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com'),
                iconEnd: <NoCloud/>,
                children: [
                    {
                        id: 'A1',
                        label: 'A-1 level2 with a very very very long laaaaaaaaaaaaaaaaaaabel with many many words',
                        typographyOptions: {hasLineThrough: true},
                        iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com'),
                        iconEnd: <NoCloud/>,
                        children: [
                            {
                                id: 'A11',
                                label: 'A-2 level2',
                                typographyOptions: {isItalic: true},
                                iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com')
                            },
                            {id: 'A12', label: 'A-3 level2', iconStart: <Love/>, className: myStyles.colorTest},
                            {id: 'A13', label: 'A-4 level2'}
                        ]
                    },
                    {id: 'A2', label: 'A-2 level2', iconStart: <Love/>, className: myStyles.colorTest},
                    {id: 'A3', label: 'A-3 level2'},
                    {
                        id: 'A4',
                        label: 'A-4 level2',
                        isDisabled: true,
                        children: [
                            {
                                id: 'A41',
                                label: 'A-4 level1'
                            }
                        ]
                    }
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
                                iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com')
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
                iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com'),
                children: []
            }
        ]
    }
];
