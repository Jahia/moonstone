import React from 'react';
import {Story} from '@storybook/react';
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

export const Default: Story<PillProps> = args => (
    <Pill {...args}/>
);
Default.args = {
    label: 'ListItem label'
};
