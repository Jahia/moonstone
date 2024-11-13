import React from 'react';
import {StoryObj, Meta} from '@storybook/react';

import {PickerSelection} from './index';
import type {PickerSelectionProps} from './PickerSelection.types';
import {PickerSelectionItem} from './PickerSelectionItem';
import {Chip} from '~/main';
import {FileImage, Lock} from '~/icons';
import markdownNotes from './PickerSelection.md';

const meta: Meta<typeof PickerSelection> = {
    title: 'Components/PickerSelection',
    component: PickerSelection,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
};
export default meta;

type Story = StoryObj<PickerSelectionProps>;
const Template = (args: PickerSelectionProps) => {
    return <PickerSelection {...args}/>;
};

export const Default: Story = {
    args: {
        children: [
            <PickerSelectionItem key="chip" image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSU3DPpncF_UoP6ru_o-b7laRl39IrRPUPXDrlxewYgKZ8ur9Sh" title="Item name" subtitle="(system name)" description="more information" chips={[<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>]}/>,
            <PickerSelectionItem key="chip2" title="Item name" subtitle="(system name)" description="more information" chips={[<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip" label="marked for deletion" icon={<Lock/>} color="danger"/>]}/>,
            <PickerSelectionItem key="chip3" isDraggable title="Item name" subtitle="(system name)" description="more information" chips={[<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>]}/>
        ]
    },
    render: Template
};
