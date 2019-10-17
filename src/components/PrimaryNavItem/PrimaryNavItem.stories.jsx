import React from 'react';
import {storiesOf} from '@storybook/react';
import {PrimaryNavItem} from './index';
import {Icon} from '../Icon';
import markdownNotes from './PrimaryNavItem.md';

storiesOf('PrimaryNavItem', module)
    .addParameters({
        component: PrimaryNavItem,
        componentSubtitle: 'PrimaryNavItem',
        notes: {markdown: markdownNotes}
    })
    .add('all', () => (
        <ul
        style={{
            backgroundColor: '#131c21',
            width: '18.75rem',
            height: '100vh'
        }}
        >
            <PrimaryNavItem icon={<Icon name="musique"/>} label="NavItem not selected (default)"/>

            <PrimaryNavItem selected icon={<Icon name="musique"/>} label="NavItem Selected"/>

            <PrimaryNavItem icon={<Icon name="drink"/>} label="Another NavItem"/>
        </ul>
    ));
