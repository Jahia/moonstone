import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './PrimaryNav.md';

import {PrimaryNav} from './index';
import {PrimaryNavItem} from '../PrimaryNavItem';
import {PrimaryNavItemsGroup} from '../PrimaryNavItemsGroup';
import {Apps} from '../../icons/asset';

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
                        <PrimaryNavItem label="NavItem not selected" icon={<Apps/>}/>
                        {/* <PrimaryNavItem isSelected label="NavItem selected" icon={<Apps/>}/> */}
                    </PrimaryNavItemsGroup>
                    <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
                        <PrimaryNavItem variant="link" label="Link"/>
                    </PrimaryNavItemsGroup>
                </>
            }
            bottom={
                <>
                    <PrimaryNavItemsGroup>
                        {/* <PrimaryNavItem label="Bottom item" icon={<Apps/>}/> */}
                    </PrimaryNavItemsGroup>
                </>
            }
        />
    ));
