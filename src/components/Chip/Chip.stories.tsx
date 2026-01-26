import preview from '../../../.storybook/preview';
import '~/__storybook__/storybook.scss';
import {Chip} from './index';
import type {ChipProps} from './Chip.types';
import {Cloud, Delete, File, Lock, NoCloud, Warning, CloudCheck, Build, Edit, Subdirectory} from '~/icons';
import markdownNotes from './Chip.md';

const meta = preview.meta({
    title: 'Components/Chip',
    component: Chip,
    tags: ['updated'],
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
});

export const Default = meta.story({
    args: {
        label: 'chip label',
        icon: <Cloud/>,
        color: 'default',
        variant: 'default'
    },
    render: (args: ChipProps) => <Chip {...args}/>
});

export const TextOnly = meta.story({
    args: {
        label: 'chip label',
        color: 'default',
        variant: 'default'
    },
    render: (args: ChipProps) => <Chip {...args}/>
});

export const IconOnly = meta.story({
    args: {
        icon: <Cloud/>,
        color: 'default',
        variant: 'default'
    },
    render: (args: ChipProps) => <Chip {...args}/>
});

export const StatusExample = meta.story({
    render: (args: ChipProps) => (
        <section className="storyColumn">
            <Chip icon={<Delete/>} label="Marked for deletion" color="danger"/>
            <Chip icon={<Warning/>} label="Warning" color="warning"/>
            <Chip icon={<Warning/>} label="Auto-publish" color="warning"/>
            <Chip icon={<Lock/>} label="Locked" color="warning"/>
            <Chip icon={<Build/>} label="Work in progress" color="warning"/>
            <Chip icon={<CloudCheck/>} label="Published" color="success"/>
            <Chip icon={<Subdirectory/>} label="3 items" color="accent"/>
            <Chip icon={<File/>} label="Modified" color="accent"/>
            <Chip icon={<Edit/>} label="Unsaved changed" color="accent"/>
            <Chip icon={<NoCloud/>} label="Never published" color="default"/>
            <Chip icon={<NoCloud/>} label="Unpublished" color="default"/>
        </section>
    )
});
