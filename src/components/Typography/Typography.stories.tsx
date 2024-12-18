import React from 'react';
import {StoryObj} from '@storybook/react';

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
};

export const Variants = () => (
    <section className="storyWrapper">
        <div className="storyItem">
            <Typography variant="title">Title</Typography>
        </div>
        <div className="storyItem">
            <Typography variant="heading">Heading</Typography>
        </div>
        <div className="storyItem">
            <Typography variant="subheading">Subheading</Typography>
        </div>
        <div className="storyItem">
            <Typography>Body (default)</Typography>
        </div>
        <div className="storyItem">
            <Typography variant="caption">Caption</Typography>
        </div>
        <div className="storyItem">
            <Typography variant="button">Button</Typography>
        </div>
    </section>
);

export const Playground: StoryObj<typeof Typography> = {
    render: args => <Typography {...args}>Playground</Typography>
};
