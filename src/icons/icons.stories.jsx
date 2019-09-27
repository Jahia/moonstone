import React from 'react'
import { Icon } from './icons'
import { storiesOf } from '@storybook/react'
import './icons.scss'

storiesOf('Icons', module).add('default', () => (
    <div style={{ display: 'flex' }}>
        <div style={{ margin: '0 auto' }}>
            <Icon name='musique' />
            <Icon name='karaoke' className='svg-icon_big' />
            <Icon name='drink' />
        </div>
    </div>
))
