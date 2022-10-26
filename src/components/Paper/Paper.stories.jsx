import React from 'react';
import {Paper} from './index';

export default {
    title: 'Components/Paper',
    component: Paper
};

export const Default = args => <Paper {...args}>Content here</Paper>;

export const NoPadding = args => <Paper {...args}>Content here</Paper>;
NoPadding.args = {hasPadding: false};

