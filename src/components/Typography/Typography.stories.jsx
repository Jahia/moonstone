import React from 'react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import {Typography} from './index';
import {variants, weights} from './Typography.types';
import markdownNotes from './Typography.md';

export default {
    title: 'Tokens/Typography',

    decorators: [
        withKnobs,
        storyFn => <section className="storyWrapper">{storyFn()}</section>
    ],

    parameters: {
        component: Typography,
        componentSubtitle: 'Displays text',
        notes: {markdown: markdownNotes}
    }
};

export const Variants = () => (
    <>
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
    </>
);

export const Playground = () => (
    <Typography
        variant={select('Variant', variants, 'body')}
        weight={select('Weight', weights, 'default')}
        isItalic={boolean('Italic', false)}
        isUpperCase={boolean('UpperCase', false)}
        hasLineThrough={boolean('LineThrough', false)}
    >
        Playground
    </Typography>
);
