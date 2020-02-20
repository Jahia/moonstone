import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@storybook/react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.scss';

import {Typography, variants, weights} from './index';
import markdownNotes from './Typography.md';

storiesOf('Components|Typography', module)
    .addParameters({
        component: Typography,
        componentSubtitle: 'Displays text',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <section className={classnames(storyStyles.storyWrapper)}>{storyFn()}</section>)
    .add('Variants', () => (
        <>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="title">Title</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="heading">Heading</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="subheading">Subheading</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography>Body (default)</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="caption">Caption</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
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
