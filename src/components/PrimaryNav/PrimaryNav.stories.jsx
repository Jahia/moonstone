import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './PrimaryNav.md';

import {PrimaryNav} from './index';
import {PrimaryNavItem} from '../PrimaryNavItem';
import {Icon} from '../Icon';
import {PrimaryNavItemsGroup} from '../PrimaryNavItemsGroup';

storiesOf('PrimaryNav', module)
    .addParameters({
        component: PrimaryNav,
        componentSubtitle: 'PrimaryNav',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <PrimaryNav
            headerLogo={<img src="logo.gif"/>}
            headerCaption="development"
            top={
                <>
                    <PrimaryNavItemsGroup>
                        <PrimaryNavItem label="NavItem not selected" icon={<Icon name="musique"/>}/>
                        <PrimaryNavItem isSelected label="NavItem selected" icon={<Icon name="musique"/>}/>
                    </PrimaryNavItemsGroup>
                    <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
                        <PrimaryNavItem variant="link" label="Link"/>
                    </PrimaryNavItemsGroup>
                </>
            }
            bottom={
                <>
                    <PrimaryNavItemsGroup>
                        <PrimaryNavItem label="Bottom item" icon={<Icon name="musique"/>}/>
                    </PrimaryNavItemsGroup>
                </>
            }
        />
    ));

