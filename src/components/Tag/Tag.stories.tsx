import { Tag } from './index';
import markdownNotes from './Tag.md?raw';

import type { Meta, StoryFn } from '@storybook/react-vite';

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
