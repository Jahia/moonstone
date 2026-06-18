import preview from '~/__storybook__/preview';

import {SecondaryNav, SecondaryNavHeader} from './index';
import type {SecondaryNavProps} from './SecondaryNav.types';

import markdownNotes from './SecondaryNav.md';
import {Love} from '~/icons';

const meta = preview.meta({
    title: 'Components/SecondaryNav',
    component: SecondaryNav,
    decorators: [
        StoryCmp => (
            <div
        style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
            >
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        docs: {description: {component: markdownNotes}}
    }
});

const Template = (args: SecondaryNavProps) => (
    <SecondaryNav {...args}>{args.children}</SecondaryNav>
);

const defaultArgs = {
    children: 'My content here'
};

export const TextTitle = meta.story({
    render: Template,

    args: {
        ...defaultArgs,
        header: 'Header here'
    }
});

export const WithHeaderImage = meta.story({
    render: Template,

    args: {
        ...defaultArgs,
        header: <Love size="big"/>
    }
});

export const WithTextInHeaderComponent = meta.story({
    render: Template,

    args: {
        ...defaultArgs,
        header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>
    }
});

export const WithHeaderComponent = meta.story({
    render: Template,

    args: {
        ...defaultArgs,
        header: (
            <SecondaryNavHeader>
                <Love size="big"/>
            </SecondaryNavHeader>
        )
    }
});

