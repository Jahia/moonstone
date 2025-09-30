import {action} from 'storybook/actions';
import markdownNotes from './ResizableBox.md';
import {ResizableBox} from './index';

import type {Meta, StoryObj} from '@storybook/react';
import type {ResizableBoxProps} from './ResizableBox.types';

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
          width: '25%'
        }}
            >
                <Story/>
            </section>
        )
    ],
    parameters: {
        notes: {markdown: markdownNotes}
    }
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
};

export const Actions = () => (
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
      className="flexRow_center alignCenter flexFuild"
      style={{height: '100vh', background: 'yellow'}}
        >
            content resizable
        </div>
    </ResizableBox>
);
