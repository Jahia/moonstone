import React from 'react';
import {Story, ComponentMeta} from '@storybook/react';

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
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args, {globals: {theme}}) => (
    <Button {...args} isReversed={theme === 'dark'}/>
);
export const Default = Template.bind({});
Default.args = {
    variant: 'default',
    size: 'default',
    icon: <Love/>,
    label: 'Button'
};

export const Ghost = Template.bind({});
Ghost.args = {
    variant: 'ghost',
    size: 'default',
    icon: <Love/>,
    label: 'Button'
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    size: 'default',
    icon: <Love/>,
    label: 'Button'
};

export const IconAndLabel: Story<ButtonProps> = (args, {globals: {theme}}) => (
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
IconAndLabel.args = {
    icon: <Love/>,
    iconEnd: <OpenInNew/>
};
IconAndLabel.parameters = {
    controls: {exclude: ['variant', 'label']}
};

export const OnlyLabel: Story<ButtonProps> = (args, {globals: {theme}}) => (
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
OnlyLabel.parameters = {
    controls: {exclude: ['variant', 'label']}
};

export const OnlyIcon: Story<ButtonProps> = (args, {globals: {theme}}) => (
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
OnlyIcon.args = {
    icon: <Love/>
};
OnlyIcon.parameters = {
    controls: {exclude: ['variant', 'label']}
};

export const Disabled: Story<ButtonProps> = (args, {globals: {theme}}) => (
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
Disabled.args = {
    icon: <Love/>,
    isDisabled: true
};
Disabled.parameters = {
    controls: {exclude: ['variant', 'label']}
};
