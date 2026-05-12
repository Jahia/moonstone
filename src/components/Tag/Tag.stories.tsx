import {StoryObj, Meta} from '@storybook/react-vite';

import {Tag} from './index';

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'fullscreen',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};
export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: Parameters<typeof Tag>[0]) => (
    <Tag label="Tag" value="tag01" {...args}/>
);

export const Default: Story = {
    render: Template
};
