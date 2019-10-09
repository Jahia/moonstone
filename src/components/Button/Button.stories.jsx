import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './Button.md';

import {Button} from './index';

storiesOf('Button', module)
    .addParameters({
        component: Button,
        componentSubtitle: 'Button',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <Button onClick={() => {}}/>
    ));

