import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './PrimaryNavItemsGroup.md';

import {PrimaryNavItemsGroup} from './index';
import {PrimaryNavItem} from '~/components/PrimaryNav/PrimaryNavItem';
import Edit from '~/tokens/icons/asset/Edit.svg';

storiesOf('Components|PrimaryNavItemsGroup', module)
    .addParameters({
        component: PrimaryNavItemsGroup,
        componentSubtitle: 'PrimaryNavItemsGroup',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <div
            style={{
                backgroundColor: '#131c21',
                width: '18.75rem',
                height: '100vh'
            }}
        >
            <PrimaryNavItemsGroup>
                <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
                <PrimaryNavItem icon={<Edit/>} label="NavItem"/>
            </PrimaryNavItemsGroup>
        </div>
    ));
