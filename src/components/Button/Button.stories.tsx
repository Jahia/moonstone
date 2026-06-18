import preview from '~/__storybook__/preview';
import '~/__storybook__/storybook.scss';

import {Button} from './index';

import {Love, OpenInNew} from '~/icons';
import markdownNotes from './Button.md';

const meta = preview.meta({
    title: 'Components/Button',
    component: Button,

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {description: {component: markdownNotes}}
    }
});

const Template = (args: Parameters<typeof Button>[0], {globals}: {globals: {theme?: string}}) => {
    return <Button isReversed={globals.theme === 'dark'} {...args}/>;
};

export const Overview = meta.story({
    render: args => (
        <>
            <section className="storyGrid">
                <Button label="default" {...args} variant="default"/>
                <Button label="outlined" {...args} variant="outlined"/>
                <Button label="ghost" {...args} variant="ghost"/>
            </section>
            <section className="storyGrid" style={{backgroundColor: 'var(--moon-color-gray_dark)'}}>
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
    render: Template
});

export const Ghost = meta.story({
    args: {
        variant: 'ghost',
        icon: <Love/>,
        label: 'Button'
    },
    render: Template
});

export const Outlined = meta.story({
    args: {
        variant: 'outlined',
        icon: <Love/>,
        label: 'Button'
    },
    render: Template
});

const IconAndLabelTemplate = (args: Parameters<typeof Button>[0], {globals}: {globals: {theme?: string}}) => {
    return (
        <section className="storyGrid">
            <Button
                label="default"
                isReversed={globals.theme === 'dark'}
                {...args}
                variant="default"
            />
            <Button
                label="ghost"
                isReversed={globals.theme === 'dark'}
                {...args}
                variant="ghost"
            />
            <Button
                label="outlined"
                isReversed={globals.theme === 'dark'}
                {...args}
                variant="outlined"
            />
        </section>
    );
};

export const IconAndLabel = meta.story({
    args: {
        icon: <Love/>,
        iconEnd: <OpenInNew/>
    },
    parameters: {
        controls: {exclude: ['variant', 'label']}
    },
    render: IconAndLabelTemplate
});

export const OnlyLabel = meta.story({
    render: (args, {globals}) => {
        return (
            <section className="storyGrid">
                <Button
                    label="default"
                    isReversed={globals.theme === 'dark'}
                    {...args}
                    variant="default"
                />
                <Button
                    label="ghost"
                    isReversed={globals.theme === 'dark'}
                    {...args}
                    variant="ghost"
                />
                <Button
                    label="outlined"
                    isReversed={globals.theme === 'dark'}
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
    render: (args, {globals}) => {
        return (
            <section className="storyGrid">
                <Button {...args} isReversed={globals.theme === 'dark'} variant="default"/>
                <Button {...args} isReversed={globals.theme === 'dark'} variant="ghost"/>
                <Button {...args} isReversed={globals.theme === 'dark'} variant="outlined"/>
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
    render: (args, {globals}) => {
        return (
            <section className="storyGrid">
                <Button
                    label="default"
                    isReversed={globals.theme === 'dark'}
                    {...args}
                    variant="default"
                />
                <Button
                    label="ghost"
                    isReversed={globals.theme === 'dark'}
                    {...args}
                    variant="ghost"
                />
                <Button
                    label="outlined"
                    isReversed={globals.theme === 'dark'}
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

