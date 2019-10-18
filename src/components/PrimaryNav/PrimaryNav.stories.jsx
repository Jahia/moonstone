import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './PrimaryNav.md';

import {PrimaryNav} from './index';
import {PrimaryNavItem} from '../PrimaryNavItem';
import {Icon} from '../Icon';

storiesOf('PrimaryNav', module)
    .addParameters({
        component: PrimaryNav,
        componentSubtitle: 'PrimaryNav',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <PrimaryNav>
            <PrimaryNavItem icon={<Icon name="musique"/>}>
                NavItem not selected (default)
            </PrimaryNavItem>

            <PrimaryNavItem selected icon={<Icon name="musique"/>}>
                NavItem Selected
            </PrimaryNavItem>
        </PrimaryNav>
    ));

