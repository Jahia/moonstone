import preview from '../../../../.storybook/preview';
import {Breadcrumb, BreadcrumbItem} from '~/components';
import {Love} from '~/icons';
import type {BreadcrumbItemProps} from './BreadcrumbItem.types';

const meta = preview.meta({
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
});

export const Basic = meta.story({
    args: {
        label: 'beadcrumbItem'
    },
    render: (args: BreadcrumbItemProps) => (
        <Breadcrumb>
            <BreadcrumbItem {...args}/>
            <BreadcrumbItem {...args}/>
        </Breadcrumb>
    )
});

export const LongLabels = Basic.extend({
    args: {
        label: 'Very long long long long long long long long long long label'
    }
});

export const WithIcons = Basic.extend({
    args: {
        icon: <Love/>,
        label: 'breadcrumbItem'
    }
});
