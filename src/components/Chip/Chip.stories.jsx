import React from 'react';

import markdownNotes from './Chip.md';
import {Chip} from './index';
import {
    Cloud,
    Delete,
    FileContent,
    Lock,
    NoCloud,
    Warning
} from '~/icons';
import '~/__storybook__/storybook.scss';

export default {
    title: 'Components/Chip',
    component: Chip,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};
export const Default = args => (
    <Chip {...args}/>
);
Default.args = {
    label: 'chip label',
    icon: <Cloud/>,
    color: 'default'
};

export const TextOnly = args => (
    <Chip {...args}/>
);
TextOnly.args = {
    label: 'chip label',
    color: 'default'
};

export const IconOnly = args => (
    <Chip {...args}/>
);
IconOnly.args = {
    icon: <Cloud/>,
    color: 'default'
};

export const StatusExample = () => (
    <section className="storyColumn">
        <Chip icon={<FileContent/>} label="New" color="success"/>
        <Chip icon={<FileContent/>} label="Modified" color="default"/>
        <Chip icon={<Delete/>} label="Marked for deletion" color="danger"/>
        <Chip icon={<FileContent/>} label="Work in progress" color="default"/>
        <Chip icon={<Lock/>} label="Locked" color="warning"/>
        <Chip icon={<Cloud/>} label="Live" color="accent"/>
        <Chip icon={<NoCloud/>} label="Not published" color="warning"/>
        <Chip icon={<Warning/>} label="Warning" color="warning"/>
    </section>
);

