import React from 'react'
import { storiesOf } from '@storybook/react'
import { Typography } from './index'

storiesOf('Typography', module).add('all', () => (
    <div>
        <Typography variant='page'>Page title</Typography>
        <Typography variant='section'>Section title</Typography>
        <Typography>Regular (default)</Typography>
        <Typography variant='caption'>Caption</Typography>
        <Typography variant='strong'>Strong</Typography>
    </div>
))
