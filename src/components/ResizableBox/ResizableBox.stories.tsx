import clsx from 'clsx';
import { action } from 'storybook/actions';

import { ResizableBox } from './index';
import markdownNotes from './ResizableBox.md?raw';
import { layout } from '~/globals/css-utils.js';

import type { ResizableBoxProps } from './ResizableBox.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<ResizableBoxProps> = {
    title: 'Components/ResizableBox',
    component: ResizableBox,
    tags: ['internal', '!manifest'],
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
        componentSubtitle: 'A side panel the user widens or narrows by dragging.',
        docs: { description: { component: markdownNotes } },
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

export const States: Story = {
    render: args => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ResizableBox {...args}>
                <div style={{ height: '64px', background: 'yellow' }}>Rest</div>
            </ResizableBox>
            <ResizableBox {...args} id="hover">
                <div style={{ height: '64px', background: 'yellow' }}>Hover</div>
            </ResizableBox>
            <ResizableBox {...args} id="active">
                <div style={{ height: '64px', background: 'yellow' }}>Active</div>
            </ResizableBox>
            <ResizableBox {...args} id="focus-visible">
                <div style={{ height: '64px', background: 'yellow' }}>Focus</div>
            </ResizableBox>
        </div>
    ),

    args: {
        minWidth: 50,
        maxWidth: 600,
    },

    parameters: {
        pseudo: {
            // The handle has the hover and active styles, and its separator takes the focus
            hover: '#hover div:has(> [role="separator"])',
            active: '#active div:has(> [role="separator"])',
            focusVisible: '#focus-visible [role="separator"]',
        },
    },
};
