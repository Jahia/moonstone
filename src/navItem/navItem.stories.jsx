import React from 'react'
import { storiesOf } from '@storybook/react'
import { NavItem } from './index'
import { Icon } from '../icons'

storiesOf('NavItem', module).add('all', () => (
    <ul
        style={{
            backgroundColor: '#131c21',
            width: '18.75rem',
            height: '100vh'
        }}
    >
        <NavItem icon={<Icon name='musique' />}>
            NavItem not selected (default)
        </NavItem>

        <NavItem selected icon={<Icon name='musique' />}>
            NavItem Selected
        </NavItem>

        <NavItem icon={<Icon name='drink' />}>Another NavItem</NavItem>
    </ul>
))
