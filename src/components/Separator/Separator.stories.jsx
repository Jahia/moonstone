import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {optionsFromArray} from '~/__storybook__/utils';
import classnames from 'classnames';
import storyStyles from '~/__storybook__/storybook.scss';

import {Separator, SeparatorSizes, SeparatorSpacings, SeparatorInvisible, Typography} from '~/components';
import markdownNotes from './Separator.md';

const separatorInvisibleValue = () => select('invisible', optionsFromArray(SeparatorInvisible), 'first-child');

storiesOf('Components|Separator', module)
    .addParameters({
        component: Separator,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Horizontal', () => (
        <>
            <Typography variant="heading">Content before a separator</Typography>
            <Separator
                variant="horizontal"
                size={select('Size', optionsFromArray(SeparatorSizes), 'full')}
                spacing={select('Spacing', optionsFromArray(SeparatorSpacings), 'medium')}
            />
            <Typography variant="heading">Content after a separator</Typography>
        </>
    ))
    .add('Vertical', () => (
        <div className="flexRow alignCenter">
            <Typography variant="heading">Before</Typography>

            <Separator
                variant="vertical"
                size={select('Size', optionsFromArray(SeparatorSizes), 'full')}
                spacing={select('Spacing', optionsFromArray(SeparatorSpacings), 'medium')}
            />
            <Typography variant="heading">After</Typography>
        </div>
    ))
    .add('Hide', () => (
        <section className={classnames(storyStyles.storyColumn)}>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="heading">Before</Typography>
                <Separator
                    variant="vertical"
                    size="full"
                    spacing="big"
                    invisible={separatorInvisibleValue()}
                />
                <Typography variant="heading">After</Typography>
            </div>
            <Separator variant="horizontal"/>
            <div className={classnames(storyStyles.storyItem)}>
                <Typography variant="heading">Before</Typography>
                <Separator
                    variant="vertical"
                    size="full"
                    spacing="big"
                    invisible={separatorInvisibleValue()}
                />
            </div>
            <Separator variant="horizontal"/>
            <div className={classnames(storyStyles.storyItem)}>
                <Separator
                    variant="vertical"
                    size="full"
                    spacing="big"
                    invisible={separatorInvisibleValue()}
                />
                <Typography variant="heading">After</Typography>
            </div>
            <Separator variant="horizontal"/>
            <div className={classnames(storyStyles.storyItem)}>
                <Separator
                    variant="vertical"
                    size="full"
                    spacing="big"
                    invisible={separatorInvisibleValue()}
                />
            </div>
        </section>
    ));
