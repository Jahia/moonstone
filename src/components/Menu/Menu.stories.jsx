import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
// Import {action} from '@storybook/addon-actions';
import markdownNotes from './Menu.md';

import {Menu} from './index';

storiesOf('Components|Menu', module)
    .addParameters({
        component: Menu,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <Menu isDisplay={boolean('display', true)}>
                Content here
            </Menu>
        </div>
    ));
