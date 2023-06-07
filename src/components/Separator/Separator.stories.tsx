import React from 'react';
import {StoryObj} from '@storybook/react';
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

export const Horizontal: StoryObj<SeparatorProps> = {
    render: args => (
        <>
            <Typography variant="heading">Content before a separator</Typography>
            <Separator {...args}/>
            <Typography variant="heading">Content after a separator</Typography>
        </>
    ),

    args: {
        variant: 'horizontal',
        size: 'full',
        spacing: 'medium'
    }
};

export const Vertical: StoryObj<SeparatorProps> = {
    render: args => (
        <div className="flexRow alignCenter">
            <Typography variant="heading">Before</Typography>

            <Separator {...args}/>
            <Typography variant="heading">After</Typography>
        </div>
    ),

    args: {
        variant: 'vertical',
        size: 'full',
        spacing: 'medium'
    }
};

export const Invisible: StoryObj<SeparatorProps> = {
    render: args => (
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
    ),

    args: {
        variant: 'vertical',
        size: 'full',
        spacing: 'big',
        invisible: 'lastChild'
    }
};
