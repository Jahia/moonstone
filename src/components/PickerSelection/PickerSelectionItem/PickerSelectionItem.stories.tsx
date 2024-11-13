import React from 'react';
import {StoryObj, Meta} from '@storybook/react';

import {PickerSelectionItem} from './index';
import {Chip} from '~/main';
import {FileImage, Lock} from '~/icons';
import type {PickerSelectionItemProps} from './PickerSelectionItem.types';
import markdownNotes from './PickerSelectionItem.md';

const meta: Meta<typeof PickerSelectionItem> = {
    title: 'Components/PickerSelectionItem',
    component: PickerSelectionItem,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
};
export default meta;

type Story = StoryObj<PickerSelectionItemProps>;
const Template = (args: PickerSelectionItemProps) => {
    return <PickerSelectionItem {...args}/>;
};

export const Default: Story = {
    args: {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSU3DPpncF_UoP6ru_o-b7laRl39IrRPUPXDrlxewYgKZ8ur9Sh',
        title: 'Item name',
        subtitle: '(system name)',
        description: 'more information',
        chips: [<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>],
        isDraggable: false
    },
    render: Template
};
