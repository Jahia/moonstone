import React from 'react';
import '~/__storybook__/storybook.scss';

import markdownNotes from './Badge.md';
import {Badge} from './index';

export default {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

const Template = args => <Badge {...args}/>;

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
