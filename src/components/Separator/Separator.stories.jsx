import React from 'react';
// Import {withKnobs, select} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import {Separator, Typography} from '~/components';
import markdownNotes from './Separator.md';

export default {
    title: 'Components/Separator',
    component: Separator,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Horizontal = args => (
    <>
        <Typography variant="heading">Content before a separator</Typography>
        <Separator {...args}/>
        <Typography variant="heading">Content after a separator</Typography>
    </>
);
Horizontal.args = {
    variant: 'horizontal',
    size: 'full',
    spacing: 'medium'
};

export const Vertical = args => (
    <div className="flexRow alignCenter">
        <Typography variant="heading">Before</Typography>

        <Separator {...args}/>
        <Typography variant="heading">After</Typography>
    </div>
);
Vertical.args = {
    variant: 'vertical',
    size: 'full',
    spacing: 'medium'
};

export const Invisible = args => (
    <section className="storyColumn">
        <div className="storyItem">
            <Typography variant="heading">Before</Typography>
            <Separator variant="vertical" {...args}/>
            <Typography variant="heading">After</Typography>
        </div>
        <div className="storyItem">
            <Typography variant="heading">Before</Typography>
            <Separator variant="vertical" {...args}/>
        </div>
        <div className="storyItem">
            <Separator variant="vertical" {...args}/>
            <Typography variant="heading">After</Typography>
        </div>
        <div className="storyItem">
            <Separator variant="vertical" {...args}/>
        </div>
    </section>
);
Invisible.args = {
    variant: 'vertical',
    size: 'full',
    spacing: 'big',
    invisible: 'lastChild'
};
