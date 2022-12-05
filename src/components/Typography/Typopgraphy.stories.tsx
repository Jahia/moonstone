import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import '~/__storybook__/storybook.scss';

import {Typography} from './index';

// Import {variants, weights} from './Typography.types';
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

export const dev: ComponentStory<typeof Typography> = args => (
    <Typography variant="button" component="footer" id="test" className="toto" {...args}>
        Playground
    </Typography>
);
