import preview from '../../../.storybook/preview';
import {Breadcrumb, BreadcrumbItem} from '~/components';
import markdownNotes from './Breadcrumb.md';
import {BreadcrumbProps} from './Breadcrumb.types';

const meta = preview.meta({
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
});

export const Default = meta.story({
    render: (args: BreadcrumbProps) => (
        <Breadcrumb {...args}>
            <BreadcrumbItem label="item 01"/>
            <BreadcrumbItem label="item 02"/>
            <BreadcrumbItem label="item 03"/>
            <BreadcrumbItem label="item 04"/>
        </Breadcrumb>
    )
});
