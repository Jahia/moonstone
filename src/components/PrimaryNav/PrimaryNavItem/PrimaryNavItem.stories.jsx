import React from 'react';
import {storiesOf} from '@storybook/react';
import {PrimaryNavItem} from './index';
import Edit from '~/tokens/icons/asset/Edit.svg';
import Person from '~/tokens/icons/asset/Person.svg';
import Power from '~/tokens/icons/asset/Power.svg';
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
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#131c21',
            width: '18.75rem',
            height: '100vh'
            }}
        >
            <PrimaryNavItem icon={<Edit size="big"/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem isSelected icon={<Edit size="big"/>} label="NavItem Selected"/>
            <PrimaryNavItem isSelected={boolean('selected')} icon={<Edit size="big"/>} label="Another NavItem"/>
            <PrimaryNavItem icon={<Person size="big"/>} label="My profile" subtitle="username as a subtitle"/>
            <PrimaryNavItem icon={<Person size="big"/>} label="My profile" subtitle="username as a subtitle" button={<Button icon={<Power/>} label="Sign Out" variant="ghost" color="reverse" onClick={() => {}}/>}/>
        </ul>
    ));
