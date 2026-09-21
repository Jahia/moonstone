import markdownNotes from './EmptyCardSelector.md';
import { EmptyCardSelector } from './index';
import { iconArgType } from '~/__storybook__/iconArgType';
import { File } from '~/icons';

import type { EmptyCardSelectorProps } from './EmptyCardSelector.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof EmptyCardSelector> = {
    title: 'Components/CardSelector/EmptyCardSelector',
    component: EmptyCardSelector,
    tags: ['new'],

    parameters: {
        layout: 'padded',
        actions: { argTypesRegex: '^on.*' },
        notes: { markdown: markdownNotes },
    },
    argTypes: {
        iconStart: iconArgType,
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
