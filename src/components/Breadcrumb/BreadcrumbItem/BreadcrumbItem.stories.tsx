import {StoryObj, Meta} from '@storybook/react-vite';

// Import '~/__storybook__/storybook.scss';

import {Breadcrumb, BreadcrumbItem} from '~/components';
import type {BreadcrumbItemProps} from './BreadcrumbItem.types';

import {Love} from '~/icons';

const meta: Meta<typeof BreadcrumbItem> = {
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
};
export default meta;

type Story = StoryObj<typeof meta>;

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
