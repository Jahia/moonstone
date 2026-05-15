import {action} from 'storybook/actions';
import markdownNotes from './ResizableBox.md';
import {ResizableBox} from './index';

import preview from '~/__storybook__/preview';
import clsx from 'clsx';
import {layout} from '~/globals/css-utils.js';

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
        docs: {description: {component: markdownNotes}}
    }
});

export const Default = meta.story({
    render: args => (
        <ResizableBox
            {...args}
            enable={['right']}
            defaultSize={{width: '100%', height: 'auto'}}
        >
            <div
                className={clsx(layout.flexRow_center, layout.alignCenter, layout.flexFluid)}
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
    render: () => (
        <ResizableBox
            enable={['right']}
            minWidth={100}
            maxWidth={600}
            defaultSize={{width: '100%', height: 'auto'}}
            onResizeStart={action('onResizeStart')}
            onResizing={action('onResizing')}
            onResizeStop={action('onResizeStop')}
        >
            <div
                className={clsx(layout.flexRow_center, layout.alignCenter, layout.flexFluid)}
                style={{height: '100vh', background: 'yellow'}}
            >
                content resizable
            </div>
        </ResizableBox>
    )
});

