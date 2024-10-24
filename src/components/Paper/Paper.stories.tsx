import React from 'react';
import {StoryObj, StoryFn} from '@storybook/react';

import {Paper} from './index';
import type {PaperProps} from './Paper.types';

export default {
    title: 'Components/Paper',
    component: Paper
};

export const Default: StoryObj<PaperProps> = {
    render: args => <Paper {...args}>Content here</Paper>
};

export const NoPadding: StoryObj<PaperProps> = {
    render: args => <Paper {...args}>Content here</Paper>,
    args: {hasPadding: false}
};
