import React from 'react';
import clsx from 'clsx';
import {storiesOf} from '@storybook/react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.module.scss';

import {Typography} from './index';
import {variants, weights} from './Typography.types';
import markdownNotes from './Typography.md';

storiesOf('Tokens/Typography', module)
    .addParameters({
        component: Typography,
        componentSubtitle: 'Displays text',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <section className={clsx(storyStyles.storyWrapper)}>{storyFn()}</section>)
    .add('Variants', () => (
        <>
            <div className={clsx(storyStyles.storyItem)}>
                <Typography variant="title">Title</Typography>
            </div>
            <div className={clsx(storyStyles.storyItem)}>
                <Typography variant="heading">Heading</Typography>
            </div>
            <div className={clsx(storyStyles.storyItem)}>
                <Typography variant="subheading">Subheading</Typography>
            </div>
            <div className={clsx(storyStyles.storyItem)}>
                <Typography>Body (default)</Typography>
            </div>
            <div className={clsx(storyStyles.storyItem)}>
                <Typography variant="caption">Caption</Typography>
            </div>
            <div className={clsx(storyStyles.storyItem)}>
                <Typography variant="button">Button</Typography>
            </div>
        </>
    ))
    .add('Playground', () => (
        <Typography variant={select('Variant', variants, 'body')}
                    weight={select('Weight', weights, 'default')}
                    isItalic={boolean('Italic', false)}
                    isUpperCase={boolean('UpperCase', false)}
                    hasLineThrough={boolean('LineThrough', false)}
        >
            Playground
        </Typography>
    ));
