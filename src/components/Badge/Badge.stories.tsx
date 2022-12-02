import React from 'react';
import {Story, ComponentMeta} from '@storybook/react';

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
} as ComponentMeta<typeof Badge>;

const Template: Story<BadgeProps> = args => <Badge {...args}/>;

export const Accent = Template.bind({});
Accent.args = {
    label: '3',
    color: 'accent'
};

export const Success = Template.bind({});
Success.args = {
    label: '3',
    color: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
    label: '3',
    color: 'danger'
};
