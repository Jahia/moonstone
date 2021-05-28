import React from 'react';
import {Chip} from '~/components';
import {Bookmark, Build, FileContent, FolderUser, Edit, Lock, Person, Puzzle} from '~/icons';

export const tableDataNested = [
    {
        name: {value: 'Demo Roles and Users', icon: <FileContent/>},
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Aug. 12, 2016'
    },
    {
        name: {value: 'Highlight Row', icon: <FileContent/>},
        status: <><Chip color="danger" icon={<Lock/>}/> <Chip color="warning" icon={<Edit/>}/></>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 6, 2016'
    },
    {
        name: {value: 'About', icon: <FileContent/>},
        type: 'Page',
        status: <Chip icon={<Build/>}/>,
        createdBy: 'root',
        lastModifiedOn: 'Jan. 6, 2016',
        subRows: [
            {
                name: {value: 'History', icon: <FileContent/>},
                type: 'Page',
                createdBy: 'root',
                lastModifiedOn: 'Jan. 6, 2016',
                subRows: [
                    {
                        name: {value: 'banner', icon: <Puzzle/>},
                        type: 'Banner',
                        createdBy: 'root',
                        lastModifiedOn: 'Feb. 4, 2016'
                    },
                    {
                        name: {value: 'Baumquist Joins Digitall As Controller', icon: <Puzzle/>},
                        type: 'News Entry',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 21, 2016'
                    }
                ]
            },
            {
                name: {value: 'Leadership', icon: <FileContent/>},
                type: 'Page',
                createdBy: 'root',
                lastModifiedOn: 'Jan. 6, 2016',
                subRows: [
                    {
                        name: {value: 'list-of-people', icon: <FolderUser/>},
                        type: 'List of People',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 26, 2016'
                    },
                    {
                        name: {value: 'Aschel', icon: <Person/>},
                        type: 'Person portrait',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 26, 2016'
                    },
                    {
                        name: {value: 'Hedgebottom', icon: <Person/>},
                        type: 'Person portrait',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 26, 2016'
                    },
                    {
                        name: {value: 'Singh', icon: <Person/>},
                        type: 'Person portrait',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 26, 2016'
                    },
                    {
                        name: {value: 'Baumquest', icon: <Person/>},
                        type: 'Person portrait',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 26, 2016'
                    },
                    {
                        name: {value: 'banner', icon: <Bookmark/>},
                        type: 'Banner',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 26, 2016'
                    }
                ]
            }
        ]
    },
    {
        name: {value: 'Search Results', icon: <FileContent/>},
        status: <><Chip color="danger" icon={<Lock/>}/> <Chip color="warning" icon={<Edit/>}/></>,
        type: 'Page',
        createdBy: 'system',
        lastModifiedOn: 'Feb. 29, 2016'
    },
    {
        name: {value: 'Corporate Responsibility', icon: <FileContent/>},
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016'
    },
    {
        name: {value: 'How to Use This Demo', icon: <Bookmark/>},
        status: <Chip icon={<Build/>}/>,
        type: 'Highlight',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016',
        subRows: [
            {
                name: {value: 'Latest Press Releases', icon: <Puzzle/>},
                type: 'Press Release Search',
                createdBy: 'root',
                lastModifiedOn: 'Jan. 26, 2016'
            },
            {
                name: {value: 'spacer', icon: <Puzzle/>},
                type: 'Spacer',
                createdBy: 'root',
                lastModifiedOn: 'Jan. 26, 2016'
            },
            {
                name: {value: 'Global Presence', icon: <Puzzle/>},
                type: 'Headline',
                createdBy: 'root',
                lastModifiedOn: 'Jan. 26, 2016'
            }
        ]
    },
    {
        name: {value: 'highlights', icon: <FileContent/>},
        type: 'Highlight',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016'
    },
    {
        name: {value: 'Our Companies', icon: <FileContent/>},
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Highlight',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016',
        subRows: [
            {
                name: {value: 'slider', icon: <Puzzle/>},
                type: 'Slider',
                createdBy: 'root',
                lastModifiedOn: 'Jan. 26, 2016',
                subRows: [
                    {
                        name: {value: 'Events', icon: <Puzzle/>},
                        type: 'Event Tab Query',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 26, 2016',
                        subRows: [
                            {
                                name: {value: 'Image-from-the-document-manager', icon: <Puzzle/>},
                                type: 'Image (from the Document Manager)',
                                createdBy: 'root',
                                lastModifiedOn: 'Jan. 26, 2016',
                                subRows: [
                                    {
                                        name: {value: 'Area-1', icon: <Puzzle/>},
                                        type: 'Section / Container / Row / Grid',
                                        createdBy: 'root',
                                        lastModifiedOn: 'Jan. 26, 2016'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
