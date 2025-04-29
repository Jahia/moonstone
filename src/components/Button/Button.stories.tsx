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

export const Overview: Story = {
    render: args => (
        <>
            <section className="storyGrid">
                <Button label="default" {...args} variant="default"/>
                <Button label="outlined" {...args} variant="outlined"/>
                <Button label="ghost" {...args} variant="ghost"/>
            </section>
            <section className="storyGrid" style={{backgroundColor: 'var(--color-gray_dark)'}}>
                <Button isReversed label="default" {...args} variant="default"/>
                <Button isReversed label="outlined" {...args} variant="outlined"/>
                <Button isReversed label="ghost" {...args} variant="ghost"/>
            </section>
        </>
    )
};

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
                label="ghost"
                isReversed={theme === 'dark'}
                {...args}
                variant="ghost"
            />
            <Button
                label="outlined"
                isReversed={theme === 'dark'}
                {...args}
                variant="outlined"
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
                    label="ghost"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="ghost"
                />
                <Button
                    label="outlined"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="outlined"
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
                <Button {...args} isReversed={theme === 'dark'} variant="default"/>
                <Button {...args} isReversed={theme === 'dark'} variant="ghost"/>
                <Button {...args} isReversed={theme === 'dark'} variant="outlined"/>
            </section>
        );
    },

    args: {
        icon: <Love/>,
        'aria-label': 'Button with Love icon'
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
                    label="ghost"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="ghost"
                />
                <Button
                    label="outlined"
                    isReversed={theme === 'dark'}
                    {...args}
                    variant="outlined"
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
