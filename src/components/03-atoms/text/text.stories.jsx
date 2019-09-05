import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Text from './Text'
import doc from './text.md'
// import {DSProvider} from '@jahia/design-system-kit';

// import {Close, Search} from '@material-ui/icons';

storiesOf('Text', module)
    .addDecorator(withKnobs)
    .add('default', () => <Text label='toto' />, { notes: { markdown: doc } })
    .add(
        'colors',
        () => (
            <div>
                <Text label='default' />
                <Text label='primary' classes='primary' />
                <Text label='secondary' classes='secondary' />
                <Text label='success' classes='success' />
                <Text label='danger' classes='danger' />
                <Text label='warning' classes='warning' />
            </div>
        ),
        {
            notes: { markdown: doc }
        }
    )
