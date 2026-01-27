import preview from '~storybook/preview';
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
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const TextTitle = meta.story({
    args: {
        header: 'Header here',
        children: 'My content here'
    },
    render: (args: SecondaryNavProps) => <SecondaryNav {...args}/>
});

export const WithHeaderImage = TextTitle.extend({
    args: {
        header: <Love size="big"/>
    }
});

export const WithTextInHeaderComponent = TextTitle.extend({
    args: {
        header: <SecondaryNavHeader>Secondary Header</SecondaryNavHeader>
    }
});

export const WithHeaderComponent = TextTitle.extend({
    args: {
        header: (
            <SecondaryNavHeader>
                <Love size="big"/>
            </SecondaryNavHeader>
        )
    }
});
