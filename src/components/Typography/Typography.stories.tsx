import { Typography } from './index';
import markdownNotes from './Typography.md?raw';

import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/Typography',
    component: Typography,
    parameters: {
        componentSubtitle: 'Any text you render.',
        layout: 'centered',
        knobs: { disable: true },
        storysource: { disable: true },
        docs: { description: { component: markdownNotes } },
    },
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

export const Links = () => (
    <section className="storyWrapper">
        <Typography component="a" href="#links">This text is a link</Typography>
    </section>
);

export const Playground: StoryObj<typeof Typography> = {
    render: args => <Typography {...args}>Playground</Typography>,
};
