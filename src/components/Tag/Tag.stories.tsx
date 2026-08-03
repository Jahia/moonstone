import preview from '~/__storybook__/preview';
import {StoryFn} from '@storybook/react-vite';

import {Tag} from './index';

const meta = preview.meta({
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'fullscreen',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
});

const Template: StoryFn<typeof Tag> = args => (
    <Tag label="Tag" value="tag01" {...args}/>
);

export const Default = meta.story({
    render: Template
});
