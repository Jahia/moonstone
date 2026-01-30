import preview from '~storybook/preview';
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
    render: (args: LayoutModuleProps) => (
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
    )
});

export const Loading = Default.extend({
    args: {
        isLoading: true
    }
});
