import React from 'react';
import {storiesOf} from '@storybook/react';
import {PrimaryNavItem} from './index';
import {Musique} from '../../icons';
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
            <PrimaryNavItem
        icon={<Musique/>}
        label="NavItem not selected (default)"
      />

            <PrimaryNavItem isSelected icon={<Musique/>} label="NavItem Selected"/>

            <PrimaryNavItem icon={<Musique/>} label="Another NavItem"/>
        </ul>
    ));
