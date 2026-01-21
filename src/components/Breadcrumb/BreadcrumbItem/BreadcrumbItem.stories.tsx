import {StoryObj, Meta} from '@storybook/react-vite';
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

type Story = StoryObj<BreadcrumbItemProps>;

const Template = (args: BreadcrumbItemProps) => (
    <Breadcrumb>
        <BreadcrumbItem {...args}/>
        <BreadcrumbItem {...args}/>
    </Breadcrumb>
);

export const Basic: Story = {
    render: Template,

    args: {
        label: 'beadcrumbItem'
    }
};

export const LongLabels: Story = {
    render: Template,

    args: {
        label: 'Very long long long long long long long long long long label'
    }
};

export const WithIcons: Story = {
    render: Template,

    args: {
        icon: <Love/>,
        label: 'breadcrumbItem'
    }
};
