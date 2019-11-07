import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import {PrimaryNav} from '../PrimaryNav';
import {Separator} from './index';
import markdownNotes from './Separator.md';

storiesOf('Components|Separator', module)
    .addParameters({
        component: Separator,
        componentSubtitle: 'Separator',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <PrimaryNav
                top={
                    <>
                        <Separator/>
                    </>
                }
            />
        </div>
    ));
