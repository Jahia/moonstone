import {action} from 'storybook/actions';
import preview from '../../../.storybook/preview';
import markdownNotes from './ResizableBox.md';
import {ResizableBox} from './index';
import type {ResizableBoxProps} from './ResizableBox.types';

const meta = preview.meta({
    title: 'Components/ResizableBox',
    component: ResizableBox,
    /**
     * Decorator wraps stories with layout styling.
     * Uses Story component for compatibility with Storybook v6+ and TypeScript.
     */
    decorators: [
        Story => (
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    width: '25%'
                }}
            >
                <Story/>
            </section>
        )
    ],
    parameters: {
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Default = meta.story({
    render: (args: ResizableBoxProps) => (
        <ResizableBox
            {...args}
            enable={['right']}
            defaultSize={{width: '100%', height: 'auto'}}
        >
            <div
                className="flexRow_center alignCenter flexFuild"
                style={{height: '100vh', background: 'yellow'}}
            >
                content resizable
            </div>
        </ResizableBox>
    ),
    args: {
        minWidth: 100,
        maxWidth: 600
    }
});

export const Actions = meta.story({
    render: (args: ResizableBoxProps) => (
        <ResizableBox
            {...args}
            enable={['right']}
            minWidth={100}
            maxWidth={600}
            defaultSize={{width: '100%', height: 'auto'}}
            onResizeStart={action('onResizeStart')}
            onResizing={action('onResizing')}
            onResizeStop={action('onResizeStop')}
        >
            <div
                className="flexRow_center alignCenter flexFuild"
                style={{height: '100vh', background: 'yellow'}}
            >
                content resizable
            </div>
        </ResizableBox>
    )
});
