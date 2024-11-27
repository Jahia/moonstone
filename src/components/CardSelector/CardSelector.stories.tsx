import React from 'react';
import {StoryObj, Meta} from '@storybook/react';

import {CardSelector} from './index';
import {Chip} from '~/main';
import {FileImage, Lock} from '~/icons';
import type {CardSelectorProps} from './CardSelector.types';

const meta: Meta<typeof CardSelector> = {
    title: 'Components/CardSelector',
    component: CardSelector,

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'}
    }
};
export default meta;

type Story = StoryObj<CardSelectorProps>;
const Template = (args: CardSelectorProps) => {
    return <div style={{maxWidth: '100vw'}}><CardSelector {...args}/></div>;
};

export const Default: Story = {
    args: {
        displayName: 'Item name',
        systemName: 'system name',
        information: 'more information',
        isDraggable: false,
    },
    render: Template
};

export const Image: Story = {
    args: {
        ...Default.args,
        thumbnailURL: 'https://picsum.photos/100/300',
        thumbnailAlt: 'preview-img',
        thumbnailType: 'preview',
        chips: [<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>],
    },
    render: Template
};

export const Icon: Story = {
    args: {
        ...Image.args,
        thumbnailURL: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
    },
    render: Template
};

export const NoChips: Story = {
    args: {
        ...Image.args,
        chips: []
    },
    render: Template
};
