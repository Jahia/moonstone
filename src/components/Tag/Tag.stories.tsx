import { Tag } from './index';
import markdownNotes from './Tag.md?raw';

import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import '~/__storybook__/storybook.scss';

export default {
    title: 'Components/Tag',
    component: Tag,
    tags: ['internal', '!manifest'],
    parameters: {
        componentSubtitle: 'A removable attribute.',
        docs: { description: { component: markdownNotes } },
        layout: 'fullscreen',
        knobs: { disable: true },
        storysource: { disable: true },
        actions: { argTypesRegex: '^on.*' },
    },
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = args => (
    <Tag label="Tag" value="tag01" {...args}/>
);

export const Default = {
    render: Template,
};

export const States: StoryObj<typeof Tag> = {
    render: args => (
        <section className="storyGrid">
            <Tag {...args} label="Rest"/>
            <Tag {...args} id="hover" label="Hover"/>
            <Tag {...args} id="active" label="Active"/>
            <Tag {...args} id="focus-visible" label="Focus"/>
            <Tag {...args} isDisabled label="Disabled"/>
        </section>
    ),
    args: {
        value: 'tag01',
    },
    parameters: {
        pseudo: {
            hover: '#hover',
            active: '#active',
            focusVisible: '#focus-visible',
        },
    },
};
