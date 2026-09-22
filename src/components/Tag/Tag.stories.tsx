import { Tag } from './index';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
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
