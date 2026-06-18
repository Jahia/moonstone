import preview from '~/__storybook__/preview';

import {Typography} from './index';

// Import markdownNotes from './Typography.md';

const meta = preview.meta({
    title: 'Tokens/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true}
    }
});

export const Variants = meta.story({
    render: () => (
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
    )
});

export const Playground = meta.story({
    render: args => <Typography {...args}>Playground</Typography>
});
