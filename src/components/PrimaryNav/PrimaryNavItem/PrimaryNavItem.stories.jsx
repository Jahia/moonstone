import React from 'react';
import {storiesOf} from '@storybook/react';
import {PrimaryNavItem} from './index';
import Edit from '~/tokens/icons/asset/Edit.svg';
import Person from '~/tokens/icons/asset/Person.svg';
import Power from '~/tokens/icons/asset/Power.svg';
import markdownNotes from './PrimaryNavItem.md';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {Badge, Button} from '~/components';

storiesOf('Components|PrimaryNavItem', module)
    .addParameters({
        component: PrimaryNavItem,
        componentSubtitle: 'PrimaryNavItem',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <ul style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#131c21',
            width: '18.75rem',
            height: '100vh'
            }}
        >
            <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem isSelected icon={<Edit/>} label="NavItem Selected"/>
            <PrimaryNavItem isSelected={boolean('selected')} icon={<Edit/>} label="Another NavItem" badge={<Badge label="9"/>}/>
            <PrimaryNavItem icon={<Person/>} label="My profile" subtitle="username as a subtitle"/>
            <PrimaryNavItem icon={<Person/>} label="My profile" subtitle="username as a subtitle" button={<Button isReversed icon={<Power/>} label="Sign Out" variant="ghost" onClick={() => {}}/>}/>
        </ul>
    ));
