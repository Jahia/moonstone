import clsx from 'clsx';
import { action } from 'storybook/actions';

import { ResizableBox } from './index';
import markdownNotes from './ResizableBox.md';
import { layout } from '~/globals/css-utils.js';

import type { ResizableBoxProps } from './ResizableBox.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<ResizableBoxProps> = {
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
                    width: '25%',
                }}
            >
                <Story/>
            </section>
        ),
    ],
    parameters: {
        notes: { markdown: markdownNotes },
    },
};

export default meta;

/**
 * StoryObj typed with ResizableBoxProps to get strict typing on args.
 */
type Story = StoryObj<ResizableBoxProps>;

export const Default: Story = {
    render: args => (
        <ResizableBox
            {...args}
            defaultSize={{ width: '100%', height: 'auto' }}
            enable={['right']}
        >
            <div
                className={clsx(layout.flexRow_center, layout.alignCenter, layout.flexFluid)}
                style={{ height: '100vh', background: 'yellow' }}
            >
                content resizable
            </div>
        </ResizableBox>
    ),
    args: {
        minWidth: 100,
        maxWidth: 600,
    },
};

export const Actions = () => (
    <ResizableBox
        defaultSize={{ width: '100%', height: 'auto' }}
        enable={['right']}
        maxWidth={600}
        minWidth={100}
        onResizeStart={action('onResizeStart')}
        onResizeStop={action('onResizeStop')}
        onResizing={action('onResizing')}
    >
        <div
            className={clsx(layout.flexRow_center, layout.alignCenter, layout.flexFluid)}
            style={{ height: '100vh', background: 'yellow' }}
        >
            content resizable
        </div>
    </ResizableBox>
);
