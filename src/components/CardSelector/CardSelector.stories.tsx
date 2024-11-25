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
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
};
export default meta;

type Story = StoryObj<CardSelectorProps>;
const Template = (args: CardSelectorProps) => {
    return <div style={{maxWidth: '100vw'}}><CardSelector {...args}/></div>;
};

export const Default: Story = {
    args: {
        thumbnailURL: 'https://picsum.photos/300/300',
        thumbnailAlt: 'preview-img',
        displayName: 'Item name',
        systemName: 'system name',
        information: 'more information',
        chips: [<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>],
        isDraggable: false,
        isReadOnly: false,
        isDisabled: false
    },
    render: Template
};

export const Image: Story = {
    args: {
        thumbnailURL: 'https://picsum.photos/300/300',
        thumbnailAlt: 'preview-img',
        thumbnailType: 'preview',
        displayName: 'Item name',
        systemName: 'system name',
        information: 'more information',
        chips: [<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>],
        isDraggable: false,
        isReadOnly: false,
        isDisabled: false
    },
    render: Template
};

export const Icon: Story = {
    args: {
        thumbnailURL: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
        thumbnailAlt: 'icon-img',
        thumbnailType: 'icon',
        displayName: 'Item name',
        systemName: 'system name',
        information: 'more information',
        chips: [<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>],
        isDraggable: false,
        isReadOnly: false,
        isDisabled: false
    },
    render: Template
};

export const NoChips: Story = {
    args: {
        thumbnailURL: 'https://picsum.photos/300/300',
        thumbnailAlt: 'preview-img',
        displayName: 'Item name',
        systemName: 'system name',
        information: 'more information',
        isDraggable: false,
        isReadOnly: false,
        isDisabled: false
    },
    render: Template
};

export const NameOnly: Story = {
    args: {
        thumbnailURL: 'https://picsum.photos/300/300',
        thumbnailAlt: 'preview-img',
        displayName: 'Item name',
        systemName: 'system name',
        isDraggable: false,
        isReadOnly: false,
        isDisabled: false
    },
    render: Template
};
