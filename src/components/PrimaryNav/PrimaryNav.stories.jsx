import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import markdownNotes from './PrimaryNav.md';

import {PrimaryNav} from './index';
import {PrimaryNavItemsGroup, PrimaryNavItem, Button} from '~/components';
import Apps from '~/tokens/icons/asset/Apps.svg';
import Feather from '~/tokens/icons/asset/Feather.svg';
import Setting from '~/tokens/icons/asset/Setting.svg';
import Profile from '~/tokens/icons/asset/Profile.svg';
import Person from '~/tokens/icons/asset/Person.svg';
import Power from '~/tokens/icons/asset/Power.svg';

storiesOf('Components|PrimaryNav', module)
    .addParameters({
        component: PrimaryNav,
        componentSubtitle: 'PrimaryNav',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <PrimaryNav
                headerLogo={<img src="logo.gif"/>}
                headerCaption="development"
                top={
                    <>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="NavItem not selected" icon={<Feather/>}/>
                            <PrimaryNavItem isSelected label="NavItem selected" icon={<Apps/>}/>
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="Very very long long name with many characters" icon={<Feather/>}/>
                            <PrimaryNavItem icon={<Person/>} label="My profile" subtitle="username as a subtitle"/>
                            <PrimaryNavItem icon={<Person/>} label="Very very long long long long label" subtitle="username as a subtitle username as a subtitle username as a subtitle username as a subtitle" button={<Button icon={<Power size="small"/>} label="Sign Out" variant="ghost" color="reverse" onClick={() => {}}/>}/>
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
                            <PrimaryNavItem url="https://jahia.com" label="Jahia Link"/>
                        </PrimaryNavItemsGroup>
                    </>
                }
                bottom={
                    <>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="Another bottom item" icon={<Profile/>}/>
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="Bottom item" icon={<Setting/>}/>
                        </PrimaryNavItemsGroup>
                    </>
                }
            />
        </div>
    ));
