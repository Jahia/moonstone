import React from 'react';
import {StoryObj, StoryFn} from '@storybook/react';
import markdownNotes from './Pill.md';

import {Pill} from './index';
import type {PillProps} from './Pill.types';

export default {
    title: 'Components/Pill',
    component: Pill,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Default: StoryObj<PillProps> = {
    args: {
        label: 'ListItem label'
    }
};
