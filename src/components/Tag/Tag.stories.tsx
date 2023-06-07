import {StoryObj, Meta} from '@storybook/react';

import {Tag} from './index';

export default {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof Tag>;

export const Default: StoryObj<typeof Tag> = {
    args: {
        label: 'Tag',
        value: 'tag01'
    }
};
