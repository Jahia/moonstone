import React from 'react';
import {Love, NoCloud} from '~/icons';
import '~/components/TreeView/TreeView.stories.scss';
import {toIconComponent} from '~/icons/utils';

export const treeData = [
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
                        label: 'A-1 level2 with a very very very long laaaaaaaaaaaaaaaaaaabel with many many words (with typography option)',
                        typographyOptions: {hasLineThrough: true},
                        iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com'),
                        iconEnd: <NoCloud/>,
                        children: [
                            {
                                id: 'A11',
                                label: 'A-2 level2 (with typography option)',
                                typographyOptions: {isItalic: true},
                                iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com')
                            },
                            {id: 'A12', label: 'A-3 level2', iconStart: <Love/>, className: 'colorTest'},
                            {id: 'A13', label: 'A-4 level2'}
                        ]
                    },
                    {id: 'A2', label: 'A-2 level2', iconStart: <Love/>, className: 'colorTest'},
                    {id: 'A3', label: 'A-3 level2'},
                    {
                        id: 'A4',
                        label: 'A-4 level2 (disabled)',
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
                className: 'colorTest',
                children: [
                    {id: 'B1', label: 'B-1 level2', className: 'colorTest'},
                    {id: 'B2', label: 'B-2 level2', className: 'colorTest'},
                    {id: 'B3', label: 'B-3 level2', className: 'colorTest'},
                    {
                        id: 'B4', label: 'B-4 level2', iconStart: <Love/>, children: [
                            {id: 'B11', label: 'B-1-1 level3', iconStart: <Love/>},
                            {
                                id: 'B22',
                                label: 'B-2-2 level3',
                                iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com')
                            },
                            {id: 'B33', label: 'B-3-3 level3', iconStart: <Love/>},
                            {id: 'B44', label: 'B-4-4 level3', iconStart: <Love/>}
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
