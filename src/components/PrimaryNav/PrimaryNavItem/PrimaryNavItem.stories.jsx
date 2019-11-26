import React from 'react';
import {storiesOf} from '@storybook/react';
import {PrimaryNavItem} from './index';
import Edit from '~/icons/asset/Edit.svg';
import Person from '~/icons/asset/Person.svg';
import Power from '~/icons/asset/Power.svg';
import markdownNotes from './PrimaryNavItem.md';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {Button} from '~/components';

storiesOf('Components|PrimaryNavItem', module)
    .addParameters({
        component: PrimaryNavItem,
        componentSubtitle: 'PrimaryNavItem',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <ul style={{
            backgroundColor: '#131c21',
            width: '18.75rem',
            height: '100vh'
            }}
        >
            <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem isSelected icon={<Edit/>} label="NavItem Selected"/>
            <PrimaryNavItem isSelected={boolean('selected')} icon={<Edit/>} label="Another NavItem"/>
            <PrimaryNavItem icon={<Person/>} label="My profile" subtitle="username as a subtitle"/>
            <PrimaryNavItem icon={<Person/>} label="My profile" subtitle="username as a subtitle" button={<Button icon={<Power size="small"/>} label="Sign Out" variant="ghost" color="reverse"/>}/>
        </ul>
    ));
