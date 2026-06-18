import preview from '~/__storybook__/preview';
import {LayoutModule} from './index';
import {
    FakeSecondaryNavigation,
    FakeContent
} from '~/__storybook__/FakeComponents';
import markdownNotes from './LayoutModule.md';
import type {LayoutModuleProps} from './LayoutModule.types';

const meta = preview.meta({
    title: 'Layouts/LayoutModule',
    component: LayoutModule,
    parameters: {
        docs: {description: {component: markdownNotes}}
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

const Template = (args: LayoutModuleProps) => (
    <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex'
    }}
    >
        <LayoutModule
      navigation={<FakeSecondaryNavigation/>}
      content={<FakeContent/>}
      {...args}
    />
    </div>
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

