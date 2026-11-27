import markdownNotes from './Breadcrumb.md?raw';
import { Breadcrumb, BreadcrumbItem } from '~/components';

import type { BreadcrumbProps } from './Breadcrumb.types';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    subcomponents: { BreadcrumbItem },
    decorators: [
        StoryCmp => (
            <div style={{ display: 'flex', justifyContent: 'center', width: '50vw' }}>
                <StoryCmp/>
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: 'The current page\'s path, with a link to each ancestor.',
        layout: 'centered',
        docs: { description: { component: markdownNotes } },
    },
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
    render: Template,
};

export const States: StoryObj<BreadcrumbProps> = {
    render: args => (
        <Breadcrumb {...args}>
            <BreadcrumbItem id="hover" label="Hover"/>
            <BreadcrumbItem id="active" label="Active"/>
            <BreadcrumbItem id="focus-visible" label="Focus"/>
            <BreadcrumbItem label="Rest"/>
        </Breadcrumb>
    ),

    parameters: {
        pseudo: {
            hover: '#hover',
            active: '#active',
            focusVisible: '#focus-visible',
        },
    },
};
