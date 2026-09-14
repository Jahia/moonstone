import {StoryObj} from '@storybook/react-vite';

import {Paper} from './index';

export default {
    title: 'Components/Paper',
    component: Paper
};

export const Default: StoryObj<typeof Paper> = {
    render: args => <Paper {...args}>Content here</Paper>
};

export const NoPadding: StoryObj<typeof Paper> = {
    render: args => <Paper {...args}>Content here</Paper>,
    args: {hasPadding: false}
};
