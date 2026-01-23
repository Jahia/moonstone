import preview from '../../../.storybook/preview';
import {LayoutApp} from './index';
import type {LayoutAppProps} from './LayoutApp.types';
import {
    FakePrimaryNavigation,
    FakeContent
} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutApp.md';

const meta = preview.meta({
    title: 'Layouts/LayoutApp',
    component: LayoutApp,
    parameters: {
        subtitle: 'How to use our root application layout',
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        navigation: {
            control: false
        },
        content: {
            control: false
        }
    }
});

export const Default = meta.story({
    args: {},
    render: (args: LayoutAppProps) => (
        <LayoutApp
            navigation={<FakePrimaryNavigation/>}
            content={<FakeContent/>}
            {...args}
        />
    )
});

export const Loading = meta.story({
    args: {
        isLoading: true
    },
    render: (args: LayoutAppProps) => (
        <LayoutApp
            navigation={<FakePrimaryNavigation/>}
            content={<FakeContent/>}
            {...args}
        />
    )
});
