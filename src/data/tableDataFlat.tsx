import React from 'react';
import {Chip} from '~/components';
import {FileContent, Edit, Lock} from '~/icons';

export const tableDataFlat = [
    {
        name: <><FileContent/> Demo Roles and Users</>,
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Aug. 12, 2016',
    },
    {
        name: <><FileContent/> Highlighted Row</>,
        status: <><Chip color="danger" icon={<Lock/>}/> <Chip color="warning" icon={<Edit/>}/></>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 6, 2016',
    },
    {
        name: <><FileContent/> Search Results</>,
        status: <><Chip color="danger" icon={<Lock/>}/> <Chip color="warning" icon={<Edit/>}/></>,
        type: 'Page',
        createdBy: 'system',
        lastModifiedOn: 'Feb. 29, 2016',
    },
    {
        name: <><FileContent/> Corporate Responsibility</>,
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016',
    },
    {
        name: <><FileContent/> How to Use This Demo</>,
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016',
    },
    {
        name: <><FileContent/> Our Companies</>,
        status: <Chip color="warning" icon={<Edit/>}/>,
        type: 'Page',
        createdBy: 'root',
        lastModifiedOn: 'Jan. 26, 2016',
    }
];
