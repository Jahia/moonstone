import React from 'react';
import {Story} from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {Separator} from './index';
import {SeparatorProps} from './Separator.types';

import {Typography} from '~/components';
import markdownNotes from './Separator.md';

export default {
    title: 'Components/Separator',
    component: Separator,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
};

export const Horizontal: Story<SeparatorProps> = args => (
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

export const Vertical: Story<SeparatorProps> = args => (
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

export const Invisible: Story<SeparatorProps> = args => (
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
