import {LayoutApp} from './index';
import {
    FakePrimaryNavigation,
    FakeContent
} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutApp.md';

export default {
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
};

const Template = args => (
    <LayoutApp
    navigation={<FakePrimaryNavigation/>}
    content={<FakeContent/>}
    {...args}
  />
);

export const Default = {
    render: Template
};

export const Loading = {
    render: Template,

    args: {
        isLoading: true
    }
};
