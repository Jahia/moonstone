import {StoryFn, Meta} from '@storybook/react';

import {Breadcrumb, BreadcrumbItem} from '~/components';
import type {BreadcrumbProps} from './Breadcrumb.types';

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
} as Meta<typeof Breadcrumb>;

const Template: StoryFn<BreadcrumbProps> = args => (
    <Breadcrumb {...args}>
        <BreadcrumbItem label="item 01"/>
        <BreadcrumbItem label="item 02"/>
        <BreadcrumbItem label="item 03"/>
        <BreadcrumbItem label="item 04"/>
    </Breadcrumb>
);

export const Default = {
    render: Template
};
