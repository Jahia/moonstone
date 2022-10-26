import React from 'react';
import {action} from '@storybook/addon-actions';
import '~/__storybook__/storybook.scss';
import markdownNotes from './Breadcrumb.md';

import {Breadcrumb, BreadcrumbItem} from '~/components';
import {Love} from '~/icons';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <Breadcrumb>
        <BreadcrumbItem label="item 01" onClick={action('onClick')}/>
        <BreadcrumbItem label="item 02" onClick={action('onClick')}/>
        <BreadcrumbItem label="item 03" onClick={action('onClick')}/>
        <BreadcrumbItem label="item 04" onClick={action('onClick')}/>
        <BreadcrumbItem label="item 05" onClick={action('onClick')}/>
    </Breadcrumb>
);

export const LongLabels = () => (
    <section style={{maxWidth: '70vw'}}>
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
