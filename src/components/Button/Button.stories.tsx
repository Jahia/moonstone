import React from 'react';
import {StoryObj, Meta, StoryContext} from '@storybook/react';
import '~/__storybook__/storybook.scss';

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
    return <Button isReversed={theme === 'dark'} {...args}/>;
};

export const Overview: Story  = {
    render: args => (
        <>
            <section className="storyGrid" style={{backgroundColor: 'var(--color-purple_plain20)'}}>
                <Button label="default" {...args} variant="default"/>
                <Button label="outlined" {...args} variant="outlined"/>
                <Button label="ghost" {...args} variant="ghost"/>
            </section>
            <section className="storyGrid" style={{backgroundColor: 'var(--color-gray_dark)'}}>
                <Button label="default" isReversed {...args} variant="default"/>
                <Button label="outlined" isReversed {...args} variant="outlined"/>
                <Button label="ghost" isReversed {...args} variant="ghost"/>
            </section>
        </>
    )
}

export const Default: Story = {
    args: {
        icon: <Love/>,
        label: 'Button'
    },
    render: Template
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        icon: <Love/>,
        label: 'Button'
    },
    render: Template
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        icon: <Love/>,
        label: 'Button'
    },
    render: Template
};

const IconAndLabelTemplate = (args: ButtonProps, globals: StoryContext) => {
    const theme = globals.theme;
    return (
        <section className="storyGrid">
            <Button
                label="default"
                isReversed={theme === 'dark'}
                {...args}
                variant="default"
            />
            <Button
                label="outlined"
                isReversed={theme === 'dark'}
                {...args}
                variant="outlined"
            />
            <Button
                label="ghost"
                isReversed={theme === 'dark'}
                {...args}
                variant="ghost"
            />
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

export const OnlyLabel = {
    render: (args: ButtonProps, globals: StoryContext) => {
        const theme = globals.theme;
        return (
            <section className="storyGrid">
                <Button
                    label="default"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="default"
                />
                <Button
                    label="outlined"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="outlined"
                />
                <Button
                    label="ghost"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="ghost"
                />
            </section>
        );
    },

    parameters: {
        controls: {exclude: ['variant', 'label']}
    }
};

export const OnlyIcon = {
    render: (args: ButtonProps, globals: StoryContext) => {
        const theme = globals.theme;
        return (
            <section className="storyGrid">
                <Button isReversed={theme === 'dark'} {...args} variant="default"/>
                <Button isReversed={theme === 'dark'} {...args} variant="outlined"/>
                <Button isReversed={theme === 'dark'} {...args} variant="ghost" />
            </section>
        );
    },

    args: {
        icon: <Love/>
    },

    parameters: {
        controls: {exclude: ['variant', 'label']}
    }
};

export const Disabled = {
    render: (args: ButtonProps, globals: StoryContext) => {
        const theme = globals.theme;
        return (
            <section className="storyGrid">
                <Button
                    label="default"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="default"
                />
                <Button
                    label="outlined"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="outlined"
                />
                <Button
                    label="ghost"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="ghost"
                />
            </section>
        );
    },

    args: {
        icon: <Love/>,
        isDisabled: true
    },

    parameters: {
        controls: {exclude: ['variant', 'label']}
    }
};
