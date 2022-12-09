import React from 'react';
import {Story, ComponentMeta} from '@storybook/react';

import {SecondaryNav, SecondaryNavHeader} from './index';
import type {SecondaryNavProps} from './SecondaryNav.types';

import markdownNotes from './SecondaryNav.md';
import {Love} from '~/icons';

export default {
    title: 'Components/SecondaryNav',
    component: SecondaryNav,
    decorators: [
        StoryCmp => (
            <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        notes: {markdown: markdownNotes}
    }
} as ComponentMeta<typeof SecondaryNav>;

const Template: Story<SecondaryNavProps> = args => (
    <SecondaryNav {...args}>
        My content here
    </SecondaryNav>
);

export const TextTitle = Template.bind({});
TextTitle.args = {
    header: 'Header here'
};

export const WithHeaderImage = Template.bind({});
WithHeaderImage.args = {
    header: <Love size="big"/>
};

export const WithTextInHeaderComponent = Template.bind({});
WithTextInHeaderComponent.args = {
    header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>
};

export const WithHeaderComponent = Template.bind({});
WithHeaderComponent.args = {
    header: <SecondaryNavHeader><Love size="big"/></SecondaryNavHeader>
};

