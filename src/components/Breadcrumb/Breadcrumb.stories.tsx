import markdownNotes from './Breadcrumb.md?raw';
import { Breadcrumb, BreadcrumbItem } from '~/components';

import type { BreadcrumbProps } from './Breadcrumb.types';
import type { Meta, StoryFn } from '@storybook/react-vite';

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
        componentSubtitle: 'Shows the current page\'s position in a multi-level hierarchy and lets the user navigate to an ancestor level.',
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
