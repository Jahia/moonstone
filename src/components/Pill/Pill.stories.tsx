import {StoryObj} from '@storybook/react-vite';
import markdownNotes from './Pill.md';

import {Pill} from './index';
import type {PillProps} from './Pill.types';

import {Language} from '~/icons';

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
        content: 'ListItem label'
    }
};

export const IconContent: StoryObj<PillProps> = {
    args: {
        content: <Language size="small"/>
    }
};
