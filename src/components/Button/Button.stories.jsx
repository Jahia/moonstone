import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import markdownNotes from './Button.md';
import {Button} from './index';

storiesOf('Components|Button', module)
    .addParameters({
        component: Button,
        componentSubtitle: 'Button',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Button onClick={() => {}}/>
    ));
