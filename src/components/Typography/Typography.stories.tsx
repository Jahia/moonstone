import preview from '~storybook/preview';
import {Typography} from './index';
import type {TypographyProps} from './Typography.types';

const meta = preview.meta({
    title: 'Tokens/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Variants = meta.story({
    render: (args: TypographyProps<'div'>) => (
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
    render: (args: TypographyProps<'div'>) => <Typography {...args}>Playground</Typography>
});
