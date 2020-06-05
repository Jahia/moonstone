import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import classnames from 'clsx';
import storyStyles from '~/__storybook__/storybook.scss';
import markdownNotes from './Breadcrumb.md';

import {Breadcrumb, BreadcrumbItem} from '~/components';
import {Love} from '~/icons';

const numberItems = () => number('Number of items', 5);
const label = () => text('Label', 'item');

storiesOf('Components|Breadcrumb', module)
    .addParameters({
        component: Breadcrumb,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Breadcrumb>
                <BreadcrumbItem label={label()} onClick={action('onClick')}/>
                <BreadcrumbItem label={label()} onClick={action('onClick')}/>
                <BreadcrumbItem label={label()} onClick={action('onClick')}/>
                <BreadcrumbItem label={label()} onClick={action('onClick')}/>
                <BreadcrumbItem label={label()} onClick={action('onClick')}/>
            </Breadcrumb>
        </section>
    ))
    .add('Long labels', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <div style={{maxWidth: '100%'}}>
                <Breadcrumb>
                    <BreadcrumbItem label="Very long long long long long long long long long long label 1" onClick={action('onClick')}/>
                    <BreadcrumbItem label="Very long long long long long long long long long long label 2" onClick={action('onClick')}/>
                    <BreadcrumbItem label="Very long long long long long long long long long long label 3" onClick={action('onClick')}/>
                    <BreadcrumbItem label="Very long long long long long long long long long long label 4" onClick={action('onClick')}/>
                    <BreadcrumbItem label="Very long long long long long long long long long long label 5" onClick={action('onClick')}/>
                </Breadcrumb>
            </div>
        </section>
    ))
    .add('With icons', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <Breadcrumb>
                <BreadcrumbItem icon={<Love/>} label="item 1" onClick={action('onClick')}/>
                <BreadcrumbItem icon={<Love/>} label="item 2" onClick={action('onClick')}/>
                <BreadcrumbItem icon={<Love/>} label="item 3" onClick={action('onClick')}/>
                <BreadcrumbItem icon={<Love/>} label="item 4" onClick={action('onClick')}/>
                <BreadcrumbItem icon={<Love/>} label="item 5" onClick={action('onClick')}/>
            </Breadcrumb>
        </section>
    ))
    .add('Playground', () => {
        const items = numberItems => {
            let n = 0;
            let all = [];
            while (n < numberItems()) {
                all.push(
                    <BreadcrumbItem icon={<Love/>} label={`item ${n}`} onClick={action('onClick')}/>
                );
                n++;
            }

            return all;
        };

        return (
            <section className={classnames(storyStyles.storyWrapper)}>
                <Breadcrumb>
                    {items(numberItems)}
                </Breadcrumb>
            </section>
        );
    });

