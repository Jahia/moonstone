import {StoryFn, Meta} from '@storybook/react';

import {Tag} from './index';

export default {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'fullscreen',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = args => (
    <Tag label="Tag" value="tag01" {...args}/>
);

export const Default = {
    render: Template
};
