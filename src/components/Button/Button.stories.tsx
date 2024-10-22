import React from 'react';
import {StoryObj, Meta, StoryContext} from '@storybook/react';

import {Button} from './index';
import type {ButtonProps} from './Button.types';

import {Love, OpenInNew} from '~/icons';
import markdownNotes from './Button.md';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
};
export default meta;

type Story = StoryObj<ButtonProps>;
const Template = (args: ButtonProps, globals: StoryContext) => {
    const theme = globals.theme;
    return (
        <Button {...args} isReversed={theme === 'dark'}/>
    );
};

export const Default: Story = {
    args: {variant: 'default',
        size: 'default',
        icon: <Love/>,
        label: 'Button'},
    render: Template
};

export const Ghost: Story = {
    args: {variant: 'ghost',
        size: 'default',
        icon: <Love/>,
        label: 'Button'},
    render: Template
};

export const Outlined: Story = {
    args: {variant: 'outlined',
        size: 'default',
        icon: <Love/>,
        label: 'Button'},
    render: Template
};

const IconAndLabelTemplate = (args: ButtonProps, globals: StoryContext) => {
    const theme = globals.theme;
    return (
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
    );
};

export const IconAndLabel: Story = {
    args: {
        icon: <Love/>,
        iconEnd: <OpenInNew/>
    },
    parameters: {
        controls: {exclude: ['variant', 'label']}
    },
    render: IconAndLabelTemplate
};

export const OnlyLabel = (args: ButtonProps, globals: StoryContext) => {
    const theme = globals.theme;
    return (
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
    );
};

OnlyLabel.parameters = {
    controls: {exclude: ['variant', 'label']}
};

export const OnlyIcon = (args: ButtonProps, globals: StoryContext) => {
    const theme = globals.theme;
    return (
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
    );
};

OnlyIcon.args = {
    icon: <Love/>
};
OnlyIcon.parameters = {
    controls: {exclude: ['variant', 'label']}
};

export const Disabled = (args: ButtonProps, globals: StoryContext) => {
    const theme = globals.theme;
    return (
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
    );
};

Disabled.args = {
    icon: <Love/>,
    isDisabled: true
};
Disabled.parameters = {
    controls: {exclude: ['variant', 'label']}
};
