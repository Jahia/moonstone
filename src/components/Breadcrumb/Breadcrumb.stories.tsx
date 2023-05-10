import React from 'react';
import type {ComponentStory, ComponentMeta} from '@storybook/react';

import {Breadcrumb, BreadcrumbItem} from '~/components';
// Import type {BreadcrumbProps} from './Breadcrumb.types';

import markdownNotes from './Breadcrumb.md';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    subcomponents: {BreadcrumbItem},
    decorators: [
        StoryCmp => (
            <div style={{display: 'flex', justifyContent: 'center', width: '50vw'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = args => (
    <Breadcrumb {...args}>
        <BreadcrumbItem label="item 01"/>
        <BreadcrumbItem label="item 02"/>
        <BreadcrumbItem label="item 03"/>
        <BreadcrumbItem label="item 04"/>
    </Breadcrumb>
);

export const Default = Template.bind({});
