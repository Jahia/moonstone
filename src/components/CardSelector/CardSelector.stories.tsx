import React from 'react';
import {StoryObj, Meta} from '@storybook/react';

import {CardSelector} from './index';
import {Chip} from '~/main';
import {FileImage, Lock} from '~/icons';
import type {CardSelectorProps} from './CardSelector.types';
import markdownNotes from './CardSelector.md';

const meta: Meta<typeof CardSelector> = {
    title: 'Components/CardSelector',
    component: CardSelector,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
};
export default meta;

type Story = StoryObj<CardSelectorProps>;
const Template = (args: CardSelectorProps) => {
    return <CardSelector {...args}/>;
};

export const Default: Story = {
    args: {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSU3DPpncF_UoP6ru_o-b7laRl39IrRPUPXDrlxewYgKZ8ur9Sh',
        displayName: 'Item name',
        systemName: 'system name',
        information: 'more information',
        chips: [<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>],
        isDraggable: false,
        isDisabled: false
    },
    render: Template
};
