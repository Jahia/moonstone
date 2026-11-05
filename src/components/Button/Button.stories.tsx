import markdownNotes from './Button.md';
import { Button } from './index';
import { iconArgType } from '~/__storybook__/iconArgType';
import { Love, OpenInNew } from '~/icons';

import type { ButtonProps } from './Button.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

import '~/__storybook__/storybook.scss';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['dark-theme'],

    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
        notes: { markdown: markdownNotes },
    },
    argTypes: {
        icon: iconArgType,
        iconEnd: iconArgType,
    },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Overview: Story = {
    render: args => (
        <>
            <section className="storyGrid">
                <Button label="default" {...args} variant="default"/>
                <Button label="outlined" {...args} variant="outlined"/>
                <Button label="ghost" {...args} variant="ghost"/>
            </section>
            <section className="storyGrid" style={{ backgroundColor: 'var(--moon-color-gray_dark)' }}>
                <Button isReversed label="default" {...args} variant="default"/>
                <Button isReversed label="outlined" {...args} variant="outlined"/>
                <Button isReversed label="ghost" {...args} variant="ghost"/>
            </section>
        </>
    ),
};

export const Default: Story = {
    args: {
        icon: <Love/>,
        label: 'Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        icon: <Love/>,
        label: 'Button',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        icon: <Love/>,
        label: 'Button',
    },
};

const IconAndLabelTemplate = (args: ButtonProps) => {
    return (
        <section className="storyGrid">
            <Button
                label="default"
                {...args}
                variant="default"
            />
            <Button
                label="ghost"
                {...args}
                variant="ghost"
            />
            <Button
                label="outlined"
                {...args}
                variant="outlined"
            />
        </section>
    );
};

export const IconAndLabel: Story = {
    args: {
        icon: <Love/>,
        iconEnd: <OpenInNew/>,
    },
    parameters: {
        controls: { exclude: ['variant', 'label'] },
    },
    render: IconAndLabelTemplate,
};

export const OnlyLabel = {
    render: (args: ButtonProps) => {
        return (
            <section className="storyGrid">
                <Button
                    label="default"
                    {...args}
                    variant="default"
                />
                <Button
                    label="ghost"
                    {...args}
                    variant="ghost"
                />
                <Button
                    label="outlined"
                    {...args}
                    variant="outlined"
                />
            </section>
        );
    },

    parameters: {
        controls: { exclude: ['variant', 'label'] },
    },
};

export const OnlyIcon = {
    render: (args: ButtonProps) => {
        return (
            <section className="storyGrid">
                <Button {...args} variant="default"/>
                <Button {...args} variant="ghost"/>
                <Button {...args} variant="outlined"/>
            </section>
        );
    },

    args: {
        'icon': <Love/>,
        'aria-label': 'Button with Love icon',
    },

    parameters: {
        controls: { exclude: ['variant', 'label'] },
    },
};

export const Disabled = {
    render: (args: ButtonProps) => {
        return (
            <section className="storyGrid">
                <Button
                    label="default"
                    {...args}
                    variant="default"
                />
                <Button
                    label="ghost"
                    {...args}
                    variant="ghost"
                />
                <Button
                    label="outlined"
                    {...args}
                    variant="outlined"
                />
            </section>
        );
    },

    args: {
        icon: <Love/>,
        isDisabled: true,
    },

    parameters: {
        controls: { exclude: ['variant', 'label'] },
    },
};
