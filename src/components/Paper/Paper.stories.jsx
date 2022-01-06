import React from 'react';
import {Paper} from './index';

export default {
    title: 'Components/Paper',
    component: Paper,
    parameters: {
        knobs: {
            disabled: true
        }
    }
};

export const Default = args => <Paper {...args}>Content here</Paper>;

export const NoPadding = args => <Paper {...args}>Content here</Paper>;
NoPadding.args = {hasPadding: false};

