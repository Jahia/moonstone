import React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import {Separator, Typography} from '~/components';
import {
    SeparatorSizes,
    SeparatorSpacings,
    SeparatorInvisible
} from './Separator.types';
import markdownNotes from './Separator.md';

const separatorInvisibleValue = () =>
    select('invisible', SeparatorInvisible, SeparatorInvisible.FirstChild);

export default {
    title: 'Components/Separator',
    decorators: [withKnobs],

    parameters: {
        component: Separator,
        notes: {markdown: markdownNotes}
    }
};

export const Horizontal = () => (
    <>
        <Typography variant="heading">Content before a separator</Typography>
        <Separator
            variant="horizontal"
            size={select('Size', SeparatorSizes, SeparatorSizes.FULL)}
            spacing={select('Spacing', SeparatorSpacings, SeparatorSpacings.Medium)}
        />
        <Typography variant="heading">Content after a separator</Typography>
    </>
);

export const Vertical = () => (
    <div className="flexRow alignCenter">
        <Typography variant="heading">Before</Typography>

        <Separator
            variant="vertical"
            size={select('Size', SeparatorSizes, SeparatorSizes.Full)}
            spacing={select('Spacing', SeparatorSpacings, SeparatorSpacings.Medium)}
        />
        <Typography variant="heading">After</Typography>
    </div>
);

export const Invisible = () => (
    <section className="storyColumn">
        <div className="storyItem">
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
        <div className="storyItem">
            <Typography variant="heading">Before</Typography>
            <Separator
                variant="vertical"
                size="full"
                spacing="big"
                invisible={separatorInvisibleValue()}
            />
        </div>
        <Separator variant="horizontal"/>
        <div className="storyItem">
            <Separator
                variant="vertical"
                size="full"
                spacing="big"
                invisible={separatorInvisibleValue()}
            />
            <Typography variant="heading">After</Typography>
        </div>
        <Separator variant="horizontal"/>
        <div className="storyItem">
            <Separator
                variant="vertical"
                size="full"
                spacing="big"
                invisible={separatorInvisibleValue()}
            />
        </div>
    </section>
);
