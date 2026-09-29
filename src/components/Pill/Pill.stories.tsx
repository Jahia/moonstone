import { Pill } from './index';
import markdownNotes from './Pill.md';
import { Language } from '~/icons';

import type { PillProps } from './Pill.types';
import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/Pill',
    component: Pill,
    tags: ['dark-theme'],

    parameters: {
        layout: 'centered',
        notes: { markdown: markdownNotes },
    },
};

export const Default: StoryObj<PillProps> = {
    args: {
        children: 'ListItem label',
    },
};

export const IconContent: StoryObj<PillProps> = {
    args: {
        children: <Language size="small"/>,
    },
};
