import React from 'react';
import classnames from 'classnames/bind';
import {storiesOf} from '@storybook/react';
import {select, withKnobs} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import storyStyles from '~/styles/storybook/styles.scss';

import {Typography, TypographyVariants} from './index';
import markdownNotes from './Typography.md';

storiesOf('Tokens|Typography', module)
    .addParameters({
        component: Typography,
        componentSubtitle: 'Displays text',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('Default', () => (
        <>
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
        </>
    ))

    .add('Variants', () => (
        <Typography variant={select('Variant', TypographyVariants, 'regular')}>Text</Typography>
    ));
