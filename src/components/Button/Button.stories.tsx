import preview from '~storybook/preview';
import '~/__storybook__/storybook.scss';
import {Button} from './index';
import {Love, OpenInNew} from '~/icons';
import markdownNotes from './Button.md';
import type {ButtonProps} from './Button.types';
import {StoryContext} from '@storybook/react-vite';

const meta = preview.meta({
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
});

export const Overview = meta.story({
    render: (args: ButtonProps) => (
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
});

export const Default = meta.story({
    args: {
        icon: <Love/>,
        label: 'Button'
    },
    render: (args: ButtonProps, {globals}: StoryContext) => {
        const theme = globals.theme;
        return <Button isReversed={theme === 'dark'} {...args}/>;
    }
});

export const Ghost = Default.extend({
    args: {
        variant: 'ghost'
    }
});

export const Outlined = Default.extend({
    args: {
        variant: 'outlined'
    }
});

export const IconAndLabel = meta.story({
    args: {
        icon: <Love/>,
        iconEnd: <OpenInNew/>
    },
    parameters: {
        controls: {exclude: ['variant', 'label']}
    },
    render: (args: ButtonProps, {globals}: StoryContext) => {
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
                    variant="outlined"/>
            </section>
        );
    }
});

export const OnlyLabel = meta.story({
    render: (args: ButtonProps, {globals}: StoryContext) => {
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
});

export const OnlyIcon = meta.story({
    render: (args: ButtonProps, {globals}: StoryContext) => {
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
});

export const Disabled = meta.story({
    render: (args: ButtonProps, {globals}: StoryContext) => {
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
});
