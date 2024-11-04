import React from 'react';
import {StoryFn, Meta} from '@storybook/react';

// Import '~/__storybook__/storybook.scss';

import {Breadcrumb, BreadcrumbItem} from '~/components';
import type {BreadcrumbItemProps} from './BreadcrumbItem.types';

import {Love} from '~/icons';

export default {
    title: 'Components/Breadcrumb/BreadcrumbItem',
    component: BreadcrumbItem,
    decorators: [
        StoryCmp => (
            <div style={{display: 'flex', justifyContent: 'center', width: '50vw'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof BreadcrumbItem>;

const Template: StoryFn<BreadcrumbItemProps> = args => (
    <Breadcrumb>
        <BreadcrumbItem {...args}/>
        <BreadcrumbItem {...args}/>
    </Breadcrumb>
);

export const Basic = {
    render: Template,

    args: {
        label: 'beadcrumbItem'
    }
};

export const LongLabels = {
    render: Template,

    args: {
        label: 'Very long long long long long long long long long long label'
    }
};

export const WithIcons = {
    render: Template,

    args: {
        icon: <Love/>,
        label: 'beadcrumbItem'
    }
};
