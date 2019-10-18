import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './PrimaryNavItemsGroup.md';

import {PrimaryNavItemsGroup} from './index';
import {PrimaryNavItem} from '../PrimaryNavItem';
import {Icon} from '../Icon';

storiesOf('PrimaryNavItemsGroup', module)
    .addParameters({
        component: PrimaryNavItemsGroup,
        componentSubtitle: 'PrimaryNavItemsGroup',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <ul
            style={{
                backgroundColor: '#131c21',
                width: '18.75rem',
                height: '100vh'
            }}
        >
            <PrimaryNavItemsGroup>
                <PrimaryNavItem icon={<Icon name="musique"/>} label="NavItem not selected (default)"/>
                <PrimaryNavItem icon={<Icon name="musique"/>} label="NavItem not selected (default)"/>
            </PrimaryNavItemsGroup>
        </ul>
    ));

