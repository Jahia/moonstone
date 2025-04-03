import React from 'react';
import {Folder, File, NoCloud} from '~/icons';
import {toIconComponent} from '~/icons/utils';

export const treeDataNested = [
    {
        id: 'ROOT',
        label: 'Root',
        iconStart: toIconComponent('http://www.google.com/s2/favicons?domain=www.jahia.com'),
        isClosable: false,
        children: [
            {
                id: 'R1',
                label: '01 - praesent tristique magna sit amet purus gravida quis',
                iconStart: <Folder/>,
                iconEnd: <NoCloud/>,
                children: [
                    {
                        id: '02',
                        label: '02 - phasellus vestibulum lorem sed risus ultricies tristique nulla',
                        iconStart: <Folder/>,
                        iconEnd: <NoCloud/>,
                        children: [
                            {
                                id: '03',
                                label: '03 - elit at imperdiet dui accumsan sit amet nulla',
                                iconStart: <Folder/>,
                                iconEnd: <NoCloud/>,
                                children: [
                                    {
                                        id: '04',
                                        label: '04 - lorem ipsum',
                                        iconStart: <Folder/>,
                                        iconEnd: <NoCloud/>,
                                        children: [
                                            {
                                                id: '05',
                                                label: '05 - lectus urna duis convallis convallis',
                                                iconStart: <Folder/>,
                                                iconEnd: <NoCloud/>,
                                                children: [
                                                    {
                                                        id: '06',
                                                        label: '06 - nisi porta lorem mollis aliquam',
                                                        iconStart: <Folder/>,
                                                        iconEnd: <NoCloud/>,
                                                        children: [
                                                            {
                                                                id: '07',
                                                                label: '07 - habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat',
                                                                iconStart: <Folder/>,
                                                                iconEnd: <NoCloud/>,
                                                                children: [
                                                                    {
                                                                        id: '08',
                                                                        label: '08 - enim diam vulputate ut pharetra sit amet aliquam id diam',
                                                                        iconStart: <Folder/>,
                                                                        iconEnd: <NoCloud/>,
                                                                        children: [
                                                                            {
                                                                                id: '09',
                                                                                label: '09 - imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque',
                                                                                iconStart: <Folder/>,
                                                                                iconEnd: <NoCloud/>,
                                                                                children: [
                                                                                    {
                                                                                        id: '010',
                                                                                        label: '010 - semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh',
                                                                                        iconStart: <Folder/>,
                                                                                        iconEnd: <NoCloud/>,
                                                                                        children: [
                                                                                            {
                                                                                                id: '011',
                                                                                                label: '011 - eget aliquet nibh praesent tristique magna sit amet purus gravida',
                                                                                                iconStart: <Folder/>,
                                                                                                iconEnd: <NoCloud/>,
                                                                                                children: [
                                                                                                    {
                                                                                                        id: '012',
                                                                                                        label: '012 - eget aliquet nibh praesent tristique magna sit amet purus gravida',
                                                                                                        iconStart: <Folder/>,
                                                                                                        iconEnd: <NoCloud/>,
                                                                                                        children: [
                                                                                                            {
                                                                                                                id: '013',
                                                                                                                label: '013 - eget aliquet nibh praesent tristique magna sit amet purus gravida',
                                                                                                                iconStart: <Folder/>,
                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                children: [
                                                                                                                    {
                                                                                                                        id: '014',
                                                                                                                        label: '014 - eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor',
                                                                                                                        iconStart: <Folder/>,
                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                        children: [
                                                                                                                            {
                                                                                                                                id: '015',
                                                                                                                                label: '015 - eget aliquet nibh praesent tristique magna sit amet purus gravida',
                                                                                                                                iconStart: <Folder/>,
                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                children: [
                                                                                                                                    {
                                                                                                                                        id: '016',
                                                                                                                                        label: '016 - habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat',
                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                        children: [
                                                                                                                                            {
                                                                                                                                                id: '017',
                                                                                                                                                label: '017 - habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat',
                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                children: [
                                                                                                                                                    {
                                                                                                                                                        id: '018',
                                                                                                                                                        label: '018 - lorem ipsum ipsum ipsum',
                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                        children: [
                                                                                                                                                            {
                                                                                                                                                                id: '019',
                                                                                                                                                                label: '019 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                children: [
                                                                                                                                                                    {
                                                                                                                                                                        id: '020',
                                                                                                                                                                        label: '020 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                        children: [
                                                                                                                                                                            {
                                                                                                                                                                                id: '021',
                                                                                                                                                                                label: '021 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                children: [
                                                                                                                                                                                    {
                                                                                                                                                                                        id: '022',
                                                                                                                                                                                        label: '022 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                        children: [
                                                                                                                                                                                            {
                                                                                                                                                                                                id: '023',
                                                                                                                                                                                                label: '023 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                children: [
                                                                                                                                                                                                    {
                                                                                                                                                                                                        id: '024',
                                                                                                                                                                                                        label: '024 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                                        children: [
                                                                                                                                                                                                            {
                                                                                                                                                                                                                id: '025',
                                                                                                                                                                                                                label: '025 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                        id: '026',
                                                                                                                                                                                                                        label: '026 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                id: '027',
                                                                                                                                                                                                                                label: '027 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        id: '028',
                                                                                                                                                                                                                                        label: '028 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                id: '029',
                                                                                                                                                                                                                                                label: '029 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                        id: '030',
                                                                                                                                                                                                                                                        label: '030 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                id: '031',
                                                                                                                                                                                                                                                                label: '031 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                        id: '032',
                                                                                                                                                                                                                                                                        label: '032 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                id: '033',
                                                                                                                                                                                                                                                                                label: '033 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                        id: '034',
                                                                                                                                                                                                                                                                                        label: '034 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                id: '035',
                                                                                                                                                                                                                                                                                                label: '035 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                        id: '036',
                                                                                                                                                                                                                                                                                                        label: '036 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                id: '037',
                                                                                                                                                                                                                                                                                                                label: '037 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                        id: '038',
                                                                                                                                                                                                                                                                                                                        label: '038 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                                                                        iconStart: <Folder/>,
                                                                                                                                                                                                                                                                                                                        iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                                id: '039',
                                                                                                                                                                                                                                                                                                                                label: '039 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                                                                                iconStart: <Folder/>,
                                                                                                                                                                                                                                                                                                                                iconEnd: <NoCloud/>,
                                                                                                                                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                                        id: '040',
                                                                                                                                                                                                                                                                                                                                        label: '040 - quisque sagittis purus sit amet volutpat',
                                                                                                                                                                                                                                                                                                                                        iconStart: <File/>,
                                                                                                                                                                                                                                                                                                                                        iconEnd: <NoCloud/>
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                ]
                                                                                                                                                                                                            }
                                                                                                                                                                                                        ]
                                                                                                                                                                                                    }
                                                                                                                                                                                                ]
                                                                                                                                                                                            }
                                                                                                                                                                                        ]
                                                                                                                                                                                    }
                                                                                                                                                                                ]
                                                                                                                                                                            }
                                                                                                                                                                        ]
                                                                                                                                                                    }
                                                                                                                                                                ]
                                                                                                                                                            }
                                                                                                                                                        ]
                                                                                                                                                    }
                                                                                                                                                ]
                                                                                                                                            }
                                                                                                                                        ]
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {id: '11', label: 'label', iconStart: <File/>},
                            {id: '12', label: 'another label', iconStart: <File/>}
                        ]
                    }
                ]
            },
            {id: 'R2', label: '0-2 level2', iconStart: <File/>, iconEnd: <NoCloud/>},
            {id: 'R3', label: '0-3 level2', iconStart: <File/>, iconEnd: <NoCloud/>},
            {id: 'R4', label: '0-4 level2', iconStart: <File/>, iconEnd: <NoCloud/>}
        ]
    }
];
