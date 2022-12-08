import React from 'react';
import {Story, ComponentMeta} from '@storybook/react';

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
} as ComponentMeta<typeof BreadcrumbItem>;

const Template: Story<BreadcrumbItemProps> = args => (
    <Breadcrumb>
        <BreadcrumbItem {...args}/>
        <BreadcrumbItem {...args}/>
    </Breadcrumb>
);
export const Basic = Template.bind({});
Basic.args = {
    label: 'beadcrumbItem'
};

export const LongLabels = Template.bind({});
LongLabels.args = {
    label: 'Very long long long long long long long long long long label'
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    icon: <Love/>,
    label: 'beadcrumbItem'
};
