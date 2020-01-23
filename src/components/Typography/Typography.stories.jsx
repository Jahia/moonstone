import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@storybook/react';
import {select, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.scss';

import {Typography, TypographyVariants} from './index';
import markdownNotes from './Typography.md';

storiesOf('Components|Typography', module)
    .addParameters({
        component: Typography,
        componentSubtitle: 'Displays text',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="page">Page title</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="section">Section title</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography>Regular (default)</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant={select('Size', ['tiny', 'small', 'medium', 'large'], 'z')}>Caption</Typography>
            </div>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="strong">Strong</Typography>
            </div>
        </section>
    ))

    .add('Variants', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Typography variant={select('Variant', TypographyVariants, 'regular')}>Text</Typography>
        </section>
    ));
