import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import '~/__storybook__/storybook.scss';

import {Typography} from './index';

// Import markdownNotes from './Typography.md';

export default {
    title: 'Tokens/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true}
    }
} as ComponentMeta<typeof Typography>;

export const Basic: ComponentStory<typeof Typography> = args => (
    <Typography {...args}>
        Playground
    </Typography>
);

