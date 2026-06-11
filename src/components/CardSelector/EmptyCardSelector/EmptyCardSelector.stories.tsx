import {StoryObj, Meta} from '@storybook/react-vite';

import {EmptyCardSelector} from './index';
import type {EmptyCardSelectorProps} from './EmptyCardSelector.types';
import {File} from '~/icons';

const meta: Meta<typeof EmptyCardSelector> = {
    title: 'Components/CardSelector/EmptyCardSelector',
    component: EmptyCardSelector,
    tags: ['new'],

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'}
    }
};
export default meta;

type Story = StoryObj<typeof EmptyCardSelector>;
const Template = (args: EmptyCardSelectorProps) => {
    return <div><EmptyCardSelector {...args}/></div>;
};

export const Default: Story = {
    args: {
        label: 'No item selected',
        isReadOnly: false,
        isDisabled: false
    },
    render: Template
};

export const Icon: Story = {
    args: {
        ...Default.args,
        iconStart: <File/>
    },
    render: Template
};
