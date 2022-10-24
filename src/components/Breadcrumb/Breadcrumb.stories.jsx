import React from 'react';
import {action} from '@storybook/addon-actions';
import '~/__storybook__/storybook.scss';
import markdownNotes from './Breadcrumb.md';

import {Breadcrumb, BreadcrumbItem} from '~/components';
import {Love} from '~/icons';

// Const numberBreadcrumbItems = () => number('Number of items', 5);
// const label = () => text('Label', 'item');

export default {
    title: 'Components/Breadcrumb',
    // Decorators: [withKnobs],
    component: Breadcrumb,

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <section className="storyWrapper">
        <Breadcrumb>
            <BreadcrumbItem label="item 01" onClick={action('onClick')}/>
            <BreadcrumbItem label="item 02" onClick={action('onClick')}/>
            <BreadcrumbItem label="item 03" onClick={action('onClick')}/>
            <BreadcrumbItem label="item 04" onClick={action('onClick')}/>
            <BreadcrumbItem label="item 05" onClick={action('onClick')}/>
        </Breadcrumb>
    </section>
);

export const LongLabels = () => (
    <section className="storyWrapper">
        <div style={{maxWidth: '100%'}}>
            <Breadcrumb>
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 01"
                    onClick={action('onClick')}
                />
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 02"
                    onClick={action('onClick')}
                />
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 03"
                    onClick={action('onClick')}
                />
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 04"
                    onClick={action('onClick')}
                />
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 05"
                    onClick={action('onClick')}
                />
            </Breadcrumb>
        </div>
    </section>
);

export const WithIcons = () => (
    <section className="storyWrapper">
        <Breadcrumb>
            <BreadcrumbItem
                icon={<Love/>}
                label="item 01"
                onClick={action('onClick')}
            />
            <BreadcrumbItem
                icon={<Love/>}
                label="item 02"
                onClick={action('onClick')}
            />
            <BreadcrumbItem
                icon={<Love/>}
                label="item 03"
                onClick={action('onClick')}
            />
            <BreadcrumbItem
                icon={<Love/>}
                label="item 04"
                onClick={action('onClick')}
            />
            <BreadcrumbItem
                icon={<Love/>}
                label="item 05"
                onClick={action('onClick')}
            />
        </Breadcrumb>
    </section>
);
