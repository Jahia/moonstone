import markdownNotes from './EmptyCardSelector.md?raw';
import { EmptyCardSelector } from './index';
import { File } from '~/icons';

import type { EmptyCardSelectorProps } from './EmptyCardSelector.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof EmptyCardSelector> = {
    title: 'Components/EmptyCardSelector',
    component: EmptyCardSelector,
    tags: ['new'],

    parameters: {
        componentSubtitle: 'An empty picker field, before the user selects an item.',
        docs: { description: { component: markdownNotes } },
        layout: 'padded',
        actions: { argTypesRegex: '^on.*' },
    },
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
        isDisabled: false,
    },
    render: Template,
};

export const Icon: Story = {
    args: {
        ...Default.args,
        iconStart: <File/>,
    },
    render: Template,
};

export const States: Story = {
    render: args => (
        <div style={{ display: 'grid', gap: '8px', padding: '8px' }}>
            <EmptyCardSelector {...args} label="Rest"/>
            <EmptyCardSelector {...args} id="hover" label="Hover"/>
            <EmptyCardSelector {...args} id="focus-visible" label="Focus"/>
            <EmptyCardSelector {...args} isDisabled label="Disabled"/>
        </div>
    ),

    parameters: {
        pseudo: {
            hover: '#hover',
            focusVisible: '#focus-visible',
        },
    },
};
