import React from 'react';
// Import {withKnobs, select} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import {Separator, Typography} from '~/components';
import markdownNotes from './Separator.md';

export default {
    title: 'Components/Separator',
    component: Separator,

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Horizontal = () => (
    <>
        <Typography variant="heading">Content before a separator</Typography>
        <Separator
            variant="horizontal"
            size="full"
            spacing="medium"
        />
        <Typography variant="heading">Content after a separator</Typography>
    </>
);

export const Vertical = () => (
    <div className="flexRow alignCenter">
        <Typography variant="heading">Before</Typography>

        <Separator
            variant="vertical"
            size="full"
            spacing="medium"
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
                invisible="lastChild"
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
                invisible="lastChild"
            />
        </div>
        <Separator variant="horizontal"/>
        <div className="storyItem">
            <Separator
                variant="vertical"
                size="full"
                spacing="big"
                invisible="lastChild"
            />
            <Typography variant="heading">After</Typography>
        </div>
        <Separator variant="horizontal"/>
        <div className="storyItem">
            <Separator
                variant="vertical"
                size="full"
                spacing="big"
                invisible="lastChild"
            />
        </div>
    </section>
);
