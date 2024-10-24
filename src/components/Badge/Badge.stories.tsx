import React from 'react';
import {StoryFn, Meta} from '@storybook/react';

import {Badge} from './index';
import type {BadgeProps} from './Badge.types';

import markdownNotes from './Badge.md';

export default {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
} as Meta<typeof Badge>;

export const Accent = {
    args: {
        label: '3',
        color: 'accent'
    }
};

export const Success = {
    args: {
        label: '3',
        color: 'success'
    }
};

export const Danger = {
    args: {
        label: '3',
        color: 'danger'
    }
};
