import preview from '~/__storybook__/preview';
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
        docs: {
            description: {component: markdownNotes},
            subtitle: 'How to use our root application layout'
        }
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

const Template = (args: LayoutAppProps) => (
    <LayoutApp
    navigation={<FakePrimaryNavigation/>}
    content={<FakeContent/>}
    {...args}
  />
);
export const Default = meta.story({
    render: Template
});

export const Loading = meta.story({
    render: Template,
    args: {
        isLoading: true
    }
});

