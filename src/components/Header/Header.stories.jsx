import React from 'react';
import {Header} from './index';
import {Button, Breadcrumb, BreadcrumbItem, Chip, Dropdown, Tab, TabItem} from '~/components';
import {ViewGrid, ViewList, ArrowLeft} from '~/icons';

const DropdownData = [
    {
        label: 'option 01',
        value: '1'
    },
    {
        label: 'option 02',
        value: '2'
    }
];

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        title: {
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        backButton: {
            table: {
                type: {
                    summary: '<Button/>'
                }
            },
            control: {disable: true}
        },
        search: {
            control: {disable: true}
        },
        mainActions: {
            control: {disable: true}
        },
        contentType: {
            table: {
                type: {
                    summary: '<Chip/>'
                }
            },
            control: {disable: true}
        },
        status: {
            table: {
                type: {
                    summary: '<Chip/>'
                }
            },
            control: {disable: true}
        },
        breadcrumb: {
            table: {
                type: {
                    summary: '<Breadcrumb/>'
                }
            },
            control: {disable: true}
        },
        toolbar: {table: {disable: true}},
        toolbarLeft: {control: {disable: true}},
        toolbarRight: {control: {disable: true}}
    }
};

const Template = args => <Header {...args}/>;
export const Full = Template.bind({});

Full.args = {
    title: 'Page Title',
    backButton: <Button variant="outlined" icon={<ArrowLeft/>} onClick={() => undefined}/>,
    search: <Button size="big" variant="ghost" label="Search" onClick={() => undefined}/>,
    mainActions: [
        <Button key="1" size="big" label="Secondary" variant="outlined" onClick={() => undefined}/>,
        <Button key="2" size="big" label="Primary" color="accent" onClick={() => undefined}/>
    ],
    status: [
        <Chip key="1" label="status A"/>,
        <Chip key="2" color="warning" label="status B"/>
    ],
    breadcrumb: [
        (
            <Breadcrumb key="1">
                <BreadcrumbItem label="item 01" onClick={() => undefined}/>
                <BreadcrumbItem label="item 02" onClick={() => undefined}/>
                <BreadcrumbItem label="item 03" onClick={() => undefined}/>
                <BreadcrumbItem label="item 04" onClick={() => undefined}/>
                <BreadcrumbItem label="item 05" onClick={() => undefined}/>
            </Breadcrumb>
        )
    ],
    contentType: <Chip label="Page"/>,
    toolbarLeft: [
        (
            <Dropdown
                key="1"
                label="Dropdown"
                value={DropdownData[0].value}
                variant="ghost"
                data={DropdownData}
            />
        ),
        (
            <Tab key="2">
                <TabItem isSelected label="Tab 1" onClick={() => undefined}/>
                <TabItem label="Tab 2" onClick={() => undefined}/>
            </Tab>
        ),
        (
            <Button key="3" variant="ghost" label="Action 01" onClick={() => undefined}/>
        ),
        (
            <Button key="4" variant="ghost" label="Action 02" onClick={() => undefined}/>
        )
    ],
    toolbarRight: [
        <Button key="1" variant="ghost" icon={<ViewGrid/>} onClick={() => undefined}/>,
        <Button key="2" variant="ghost" icon={<ViewList/>} onClick={() => undefined}/>
    ]
};

export const WithoutToolbar = Template.bind({});
WithoutToolbar.args = {
    ...Full.args,
    toolbarLeft: null,
    toolbarRight: null
};

export const WithoutInformation = Template.bind({});
WithoutInformation.args = {
    ...Full.args,
    breadcrumb: null,
    status: null,
    contentType: null
};

export const Simple = Template.bind({});
Simple.args = {
    title: 'Application title'
};
