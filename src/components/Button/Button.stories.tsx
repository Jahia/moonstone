import markdownNotes from './Button.md?raw';
import { buttonColors, buttonSizes, buttonVariants } from './Button.types';
import { Button } from './index';
import { PropValues } from '~/__storybook__/PropValues';
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
        componentSubtitle: 'The control that triggers an action when clicked.',
        docs: { description: { component: markdownNotes } },
    },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
    args: {
        icon: <Love/>,
        label: 'Button',
    },
};

export const VariantsAndColors: Story = {
    args: {
        label: 'Button',
    },
    render: args => (
        <PropValues
            args={args}
            component={Button}
            prop="color"
            rowProp="variant"
            rowValues={buttonVariants}
            values={buttonColors}
        />
    ),
};

export const Reversed: Story = {
    ...VariantsAndColors,
    args: {
        label: 'Button',
        isReversed: true,
    },
};

export const Sizes: Story = {
    args: {
        label: 'Button',
    },
    render: args => <PropValues args={args} component={Button} prop="size" values={buttonSizes}/>,
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

export const OnlyLabel: Story = {
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

export const OnlyIcon: Story = {
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

export const Disabled: Story = {
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
