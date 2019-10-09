import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './typography.md';

import {Typography, TypographyVariants} from './typography';

storiesOf('Typography', module)
    .addParameters({
        component: Typography,
        componentSubtitle: 'Displays text',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div>
            <Typography variant="page">Page title</Typography>
            <Typography variant="section">Section title</Typography>
            <Typography>Regular (default)</Typography>
            <Typography variant={select('Size', ['tiny', 'small', 'medium', 'large'], 'z')}>Caption</Typography>
            <Typography variant="strong">Strong</Typography>
        </div>
    ))

    .add('variants', () => (
        <div>
            <Typography variant={select('Variant', TypographyVariants, 'regular')}>Text</Typography>
        </div>
    ));
