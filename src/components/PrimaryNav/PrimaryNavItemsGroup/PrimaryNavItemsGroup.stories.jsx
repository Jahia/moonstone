import React from 'react';
import markdownNotes from './PrimaryNavItemsGroup.md';

import {PrimaryNavItemsGroup} from './index';
import {PrimaryNavItem} from '~/components/PrimaryNav/PrimaryNavItem';
import {Edit} from '~/icons';

export default {
    title: 'Components/PrimaryNavItemsGroup',
    component: PrimaryNavItemsGroup,

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
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
);
