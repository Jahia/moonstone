import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {Chip} from './index';
import {Cloud, Delete, FileContent, Lock, Love, NoCloud, Warning} from '~/icons';

export default {
    title: 'Components/Chip',
    component: Chip,
    layout: 'centered',
    parameters: {
        knobs: {disable: true}
    }
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => (
    <section className="storyColumn">
        <Chip {...args}/>
    </section>
);

export const IconAndText = Template.bind({});
IconAndText.args = {
    icon: <Love/>,
    label: 'Chip label'
};

export const TextOnly = Template.bind({});
TextOnly.args = {
    label: 'Chip label'
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    icon: <Love/>
};

export const StatusExamples: ComponentStory<typeof Chip> = () => (
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

