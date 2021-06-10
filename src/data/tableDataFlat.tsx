import React from 'react';
import {Chip} from '~/components';
import {FileImage, Edit, Lock} from '~/icons';

export const tableDataFlat = [
    {
        name: {value: 'Demo Roles and Users', icon: <FileImage/>},
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Aug. 12, 2016',
    },
    {
        name: {value: 'Highlight Row', icon: <FileImage/>},
        status: <><Chip color="danger" icon={<Lock/>}/> <Chip color="warning" icon={<Edit/>}/></>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 6, 2016',
    },
    {
        name: {value: 'Search Results', icon: <FileImage/>},
        status: <><Chip color="danger" icon={<Lock/>}/> <Chip color="warning" icon={<Edit/>}/></>,
        type: 'Page',
        createdBy: 'system',
        lastModifiedOn: 'Feb. 29, 2016',
    },
    {
        name: {value: 'Corporate Responsibility', icon: <FileImage/>},
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016',
    },
    {
        name: {value: 'How to Use This Demo', icon: <FileImage/>},
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016',
    },
    {
        name: {value: 'Our Companies', icon: <FileImage/>},
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016',
    }
];
