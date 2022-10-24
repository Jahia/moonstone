import React from 'react';
import {withKnobs, number, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import '~/__storybook__/storybook.scss';
import markdownNotes from './Breadcrumb.md';

import {Breadcrumb, BreadcrumbItem} from '~/components';
import {Love} from '~/icons';

const numberBreadcrumbItems = () => number('Number of items', 5);
const label = () => text('Label', 'item');

export default {
    title: 'Components/Breadcrumb',
    decorators: [withKnobs],

    parameters: {
        component: Breadcrumb,
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <section className="storyWrapper">
        <Breadcrumb>
            <BreadcrumbItem label={label()} onClick={action('onClick')}/>
            <BreadcrumbItem label={label()} onClick={action('onClick')}/>
            <BreadcrumbItem label={label()} onClick={action('onClick')}/>
            <BreadcrumbItem label={label()} onClick={action('onClick')}/>
            <BreadcrumbItem label={label()} onClick={action('onClick')}/>
        </Breadcrumb>
    </section>
);

export const LongLabels = () => (
    <section className="storyWrapper">
        <div style={{maxWidth: '100%'}}>
            <Breadcrumb>
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 1"
                    onClick={action('onClick')}
                />
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 2"
                    onClick={action('onClick')}
                />
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 3"
                    onClick={action('onClick')}
                />
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 4"
                    onClick={action('onClick')}
                />
                <BreadcrumbItem
                    label="Very long long long long long long long long long long label 5"
                    onClick={action('onClick')}
                />
            </Breadcrumb>
        </div>
    </section>
);

LongLabels.story = {
    name: 'Long labels'
};

export const WithIcons = () => (
    <section className="storyWrapper">
        <Breadcrumb>
            <BreadcrumbItem
                icon={<Love/>}
                label="item 1"
                onClick={action('onClick')}
            />
            <BreadcrumbItem
                icon={<Love/>}
                label="item 2"
                onClick={action('onClick')}
            />
            <BreadcrumbItem
                icon={<Love/>}
                label="item 3"
                onClick={action('onClick')}
            />
            <BreadcrumbItem
                icon={<Love/>}
                label="item 4"
                onClick={action('onClick')}
            />
            <BreadcrumbItem
                icon={<Love/>}
                label="item 5"
                onClick={action('onClick')}
            />
        </Breadcrumb>
    </section>
);

WithIcons.story = {
    name: 'With icons'
};

export const Playground = () => {
    const items = numberItems => {
        let n = 0;
        let all = [];
        while (n < numberItems()) {
            all.push(
                <BreadcrumbItem
                    icon={<Love/>}
                    label={`item ${n}`}
                    onClick={action('onClick')}
                />
            );
            n++;
        }

        return all;
    };

    return (
        <section className="storyWrapper">
            <Breadcrumb>{items(numberBreadcrumbItems)}</Breadcrumb>
        </section>
    );
};
