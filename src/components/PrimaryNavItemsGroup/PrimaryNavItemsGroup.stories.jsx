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
        <PrimaryNavItemsGroup>
            <PrimaryNavItem icon={<Icon name="musique"/>}>
                NavItem not selected (default)
            </PrimaryNavItem>
            <PrimaryNavItem icon={<Icon name="musique"/>}>
                NavItem not selected (default)
            </PrimaryNavItem>
        </PrimaryNavItemsGroup>
    ));

