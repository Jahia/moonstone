import { Tag } from './index';
import markdownNotes from './Tag.md?raw';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        componentSubtitle: 'Represents a removable attribute, such as an applied filter or a selected option.',
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
