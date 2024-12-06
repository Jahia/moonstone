import React from 'react';
import {StoryObj, Meta} from '@storybook/react';

import {CardSelector} from './index';
import {Button, Chip} from '~/main';
import {Close, FileImage, Lock} from '~/icons';
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

type Story = StoryObj<typeof CardSelector>;
const Template = (args: CardSelectorProps) => {
    return <div style={{maxWidth: '100vw'}}><CardSelector {...args}/></div>;
};

export const Default: Story = {
    args: {
        id: 'cardSelector',
        displayName: 'Item name',
        systemName: 'system name'
    },
    render: Template
};

export const Image: Story = {
    args: {
        ...Default.args,
        thumbnailURL: 'https://picsum.photos/100/300',
        thumbnailAlt: 'preview-img',
        thumbnailType: 'preview',
        information: 'more information',
        chips: [<Chip key="chip" label="image" icon={<FileImage/>} color="accent"/>, <Chip key="chip2" label="marked for deletion" icon={<Lock/>} color="danger"/>]
    },
    render: Template
};

export const Icon: Story = {
    args: {
        ...Image.args,
        thumbnailURL: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
        thumbnailType: 'icon'
    },
    render: Template
};

export const Actions: Story = {
    args: {
        ...Image.args,
        cardAction: <Button key="btn" variant="ghost" icon={<Close/>}/>
    },
    render: Template
};

export const NoChips: Story = {
    args: {
        ...Image.args,
        chips: null
    },
    render: Template
};

export const Error: Story = {
    args: {
        hasError: true,
        errorMessage: 'Broken reference'
    },
    render: Template
};
