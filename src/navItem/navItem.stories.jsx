import React from 'react'
import { storiesOf } from '@storybook/react'
import { NavItem } from './index'

storiesOf('NavItem', module).add('all', () => (
    <ul
        style={{
            backgroundColor: '#131c21',
            width: '18.75rem',
            height: '100vh'
        }}
    >
        <NavItem icon={<i>lol</i>}>NavItem not selected (default)</NavItem>

        <NavItem selected icon={<i>lol</i>}>
            NavItem Selected
        </NavItem>

        <NavItem icon={<i>lol</i>}>Another NavItem</NavItem>
    </ul>
))
