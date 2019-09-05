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
                <Text label='primary' />
                <Text label='secondary' style='secondary' />
                <Text label='success' style='success' />
                <Text label='danger' style='danger' />
                <Text label='warning' style='warning' />
            </div>
        ),
        {
            notes: { markdown: doc }
        }
    )
