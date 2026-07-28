import preview from '~/__storybook__/preview';

import {Paper} from './index';

const meta = preview.meta({
    title: 'Components/Paper',
    component: Paper
});

export const Default = meta.story({
    render: args => <Paper {...args}>Content here</Paper>
});

export const NoPadding = meta.story({
    render: args => <Paper {...args}>Content here</Paper>,
    args: {hasPadding: false}
});
