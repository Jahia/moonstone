import React from 'react';
import {StoryObj, StoryFn, Meta} from '@storybook/react';

import {Button} from './index';
import type {ButtonProps} from './Button.types';

import {Love, OpenInNew} from '~/icons';
import markdownNotes from './Button.md';

export default {
    title: 'Components/Button',
    component: Button,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args, {globals: {theme}}) => (
    <Button {...args} isReversed={theme === 'dark'}/>
);

export const Default = {
    render: Template,
    args: {
        variant: 'default',
        color: 'default',
        size: 'default',
        icon: <Love/>,
        label: 'Button'
    }
};

export const Ghost = {
    render: Template,
    args: {
        variant: 'ghost',
        color: 'default',
        size: 'default',
        icon: <Love/>,
        label: 'Button'
    }
};

export const Outlined = {
    render: Template,
    args: {
        variant: 'outlined',
        color: 'default',
        size: 'default',
        icon: <Love/>,
        label: 'Button'
    }
};

export const IconAndLabel: StoryObj<ButtonProps> = {
    render: (args, {globals: {theme}}) => (
        <section className="storyGrid">
            <div className="storyGridItem">
                <Button {...args} variant="default" label="default" isReversed={theme === 'dark'}/>
            </div>
            <div className="storyGridItem">
                <Button {...args} variant="ghost" label="ghost" isReversed={theme === 'dark'}/>
            </div>
            <div className="storyGridItem">
                <Button {...args} variant="outlined" label="outlined" isReversed={theme === 'dark'}/>
            </div>
        </section>
    ),

    args: {
        icon: <Love/>,
        iconEnd: <OpenInNew/>
    },

    parameters: {
        controls: {exclude: ['variant', 'label']}
    }
};

export const OnlyLabel: StoryObj<ButtonProps> = {
    render: (args, {globals: {theme}}) => (
        <section className="storyGrid">
            <div className="storyGridItem">
                <Button {...args} variant="default" label="default" isReversed={theme === 'dark'}/>
            </div>
            <div className="storyGridItem">
                <Button {...args} variant="ghost" label="ghost" isReversed={theme === 'dark'}/>
            </div>
            <div className="storyGridItem">
                <Button {...args} variant="outlined" label="outlined" isReversed={theme === 'dark'}/>
            </div>
        </section>
    ),

    parameters: {
        controls: {exclude: ['variant', 'label']}
    }
};

export const OnlyIcon: StoryObj<ButtonProps> = {
    render: (args, {globals: {theme}}) => (
        <section className="storyGrid">
            <div className="storyGridItem">
                <Button {...args} variant="default" isReversed={theme === 'dark'}/>
            </div>
            <div className="storyGridItem">
                <Button {...args} variant="ghost" isReversed={theme === 'dark'}/>
            </div>
            <div className="storyGridItem">
                <Button {...args} variant="outlined" isReversed={theme === 'dark'}/>
            </div>
        </section>
    ),

    args: {
        icon: <Love/>
    },

    parameters: {
        controls: {exclude: ['variant', 'label']}
    }
};

export const Disabled: StoryObj<ButtonProps> = {
    render: (args, {globals: {theme}}) => (
        <section className="storyGrid">
            <div className="storyGridItem">
                <Button {...args} variant="default" label="default" isReversed={theme === 'dark'}/>
            </div>
            <div className="storyGridItem">
                <Button {...args} variant="ghost" label="ghost" isReversed={theme === 'dark'}/>
            </div>
            <div className="storyGridItem">
                <Button {...args} variant="outlined" label="outlined" isReversed={theme === 'dark'}/>
            </div>
        </section>
    ),

    args: {
        icon: <Love/>,
        isDisabled: true
    },

    parameters: {
        controls: {exclude: ['variant', 'label']}
    }
};
