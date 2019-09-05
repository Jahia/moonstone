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
    .add(
        'sizing',
        () => (
            <div>
                <Text label='mds-font-giga' classes='mds-font-giga' />
                <Text label='mds-font-mega' classes='mds-font-mega' />
                <Text label='mds-font-alpha' classes='mds-font-alpha' />
                <Text label='mds-font-beta' classes='mds-font-beta' />
                <Text label='mds-font-gamma' classes='mds-font-gamma' />
                <Text label='mds-font-delta' classes='mds-font-delta' />
                <Text label='mds-font-epsilon' classes='mds-font-epsilon' />
                <Text label='mds-font-zeta' classes='mds-font-zeta' />
                <Text label='mds-font-iota' classes='mds-font-iota' />
                <Text label='mds-font-omega' classes='mds-font-omega' />
                <Text label='mds-font-caption' classes='mds-font-caption' />
                <Text label='mds-font-legal' classes='mds-font-legal' />
                <Text label='mds-font-p' classes='mds-font-p' />
            </div>
        ),
        {
            notes: { markdown: doc }
        }
    )
    .add(
        'transform',
        () => (
            <div>
                <Text label='capitalize' classes='capitalize' />
                <Text label='uppercase' classes='uppercase' />
                <Text label='lowercase' classes='lowercase' />
            </div>
        ),
        {
            notes: { markdown: doc }
        }
    )
    .add(
        'wraping',
        () => (
            <div>
                <Text label='text-wrap' classes='text-wrap' />
                <Text label='text-nowrap' classes='text-nowrap' />
                <Text label='text-break' classes='text-break' />
                <Text label='text-truncate' classes='text-truncate' />
            </div>
        ),
        {
            notes: { markdown: doc }
        }
    )
    .add(
        'align',
        () => (
            <div>
                <Text label='text-left' classes='text-left' />
                <Text label='text-right' classes='text-right' />
                <Text label='text-center' classes='text-center' />
                <Text label='text-justify' classes='text-justify' />
            </div>
        ),
        {
            notes: { markdown: doc }
        }
    )
