import React from 'react';
import {StoryObj} from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {Chip} from './index';
import type {ChipProps} from './Chip.types';

import {Cloud, Delete, FileContent, Lock, NoCloud, Warning} from '~/icons';
import markdownNotes from './Chip.md';

export default {
    title: 'Components/Chip',
    component: Chip,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Default: StoryObj<ChipProps> = {
    args: {
        label: 'chip label',
        icon: <Cloud/>,
        color: 'default'
    }
};

export const TextOnly: StoryObj<ChipProps> = {
    args: {
        label: 'chip label',
        color: 'default'
    }
};

export const IconOnly: StoryObj<ChipProps> = {
    args: {
        icon: <Cloud/>,
        color: 'default'
    }
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
