import React from 'react';
import {Story} from '@storybook/react';

import {Paper} from './index';
import type {PaperProps} from './Paper.types';

export default {
    title: 'Components/Paper',
    component: Paper
};

export const Default: Story<PaperProps> = args => <Paper {...args}>Content here</Paper>;

export const NoPadding: Story<PaperProps> = args => <Paper {...args}>Content here</Paper>;
NoPadding.args = {hasPadding: false};

