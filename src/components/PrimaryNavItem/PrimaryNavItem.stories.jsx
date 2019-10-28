import React from 'react';
import {storiesOf} from '@storybook/react';
import {PrimaryNavItem} from './index';
import {Edit} from '~/icons';
import markdownNotes from './PrimaryNavItem.md';

storiesOf('Components|PrimaryNavItem', module)
    .addParameters({
        component: PrimaryNavItem,
        componentSubtitle: 'PrimaryNavItem',
        notes: {markdown: markdownNotes}
    })
    .add('Default', () => (
        <ul style={{
            backgroundColor: '#131c21',
            width: '18.75rem',
            height: '100vh'
            }}
        >
            <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem isSelected icon={<Edit/>} label="NavItem Selected"/>
            <PrimaryNavItem icon={<Edit/>} label="Another NavItem"/>
        </ul>
    ));
