import markdownNotes from './BreadcrumbItem.md?raw';
// Import '~/__storybook__/storybook.scss';
import { Breadcrumb, BreadcrumbItem } from '~/components';
import { Love } from '~/icons';
import { iconArgType } from '~/__storybook__/iconArgType';
import type { BreadcrumbItemProps } from './BreadcrumbItem.types';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
    title: 'Components/Breadcrumb/BreadcrumbItem',
    component: BreadcrumbItem,
    decorators: [
        StoryCmp => (
            <div style={{ display: 'flex', justifyContent: 'center', width: '50vw' }}>
                <StoryCmp/>
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: 'A single navigation step used inside a Breadcrumb, with an optional icon and a label.',
        docs: { description: { component: markdownNotes } },
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
    },
    argTypes: {
        icon: iconArgType,
        iconEnd: iconArgType,
    },
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
        label: 'beadcrumbItem',
    },
};

export const LongLabels = {
    render: Template,

    args: {
        label: 'Very long long long long long long long long long long label',
    },
};

export const WithIcons = {
    render: Template,

    args: {
        icon: <Love/>,
        label: 'breadcrumbItem',
    },
};
