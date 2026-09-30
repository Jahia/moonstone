import markdownNotes from './Chip.md';
import { Chip } from './index';
import { iconArgType } from '~/__storybook__/iconArgType';
import { Build, Cloud, CloudCheck, Delete, Edit, File, Lock, NoCloud, Subdirectory, Warning } from '~/icons';

import type { ChipProps } from './Chip.types';
import type { StoryObj } from '@storybook/react-vite';

import '~/__storybook__/storybook.scss';

export default {
    title: 'Components/Chip',
    component: Chip,
    tags: ['updated'],

    parameters: {
        layout: 'centered',
        notes: { markdown: markdownNotes },
    },
    argTypes: {
        icon: iconArgType,
    },
};

export const Default: StoryObj<ChipProps> = {
    args: {
        label: 'chip label',
        icon: <Cloud/>,
        color: 'default',
        variant: 'default',
    },
};

export const TextOnly: StoryObj<ChipProps> = {
    args: {
        label: 'chip label',
        color: 'default',
        variant: 'default',
    },
};

export const IconOnly: StoryObj<ChipProps> = {
    args: {
        icon: <Cloud/>,
        color: 'default',
        variant: 'default',
    },
};

export const StatusExample = () => (
    <section className="storyColumn">
        <Chip color="danger" icon={<Delete/>} label="Marked for deletion"/>
        <Chip color="warning" icon={<Warning/>} label="Warning"/>
        <Chip color="warning" icon={<Warning/>} label="Auto-publish"/>
        <Chip color="warning" icon={<Lock/>} label="Locked"/>
        <Chip color="warning" icon={<Build/>} label="Work in progress"/>
        <Chip color="success" icon={<CloudCheck/>} label="Published"/>
        <Chip color="accent" icon={<Subdirectory/>} label="3 items"/>
        <Chip color="accent" icon={<File/>} label="Modified"/>
        <Chip color="accent" icon={<Edit/>} label="Unsaved changed"/>
        <Chip color="default" icon={<NoCloud/>} label="Never published"/>
        <Chip color="default" icon={<NoCloud/>} label="Unpublished"/>
    </section>
);
