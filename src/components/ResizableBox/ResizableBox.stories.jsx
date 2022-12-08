import React from 'react';
import {action} from '@storybook/addon-actions';
import markdownNotes from './ResizableBox.md';

import {ResizableBox} from './index';

export default {
    title: 'Components/ResizableBox',
    component: ResizableBox,
    decorators: [
        storyFn => (
            <section style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '25%'}}>
                {storyFn()}
            </section>
        )
    ],

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Default = args => (
    <ResizableBox
        {...args}
        enable={['right']}
        defaultSize={{
            width: '100%',
            height: 'auto'
        }}
    >
        <div className="flexRow_center alignCenter flexFuild" style={{height: '100vh', background: 'yellow'}}>
            content resizable
        </div>
    </ResizableBox>
);
Default.args = {
    minWidth: 100,
    maxWidth: 600
};

export const Actions = () => (
    <ResizableBox
        enable={['right']}
        minWidth="100"
        maxWidth="600"
        defaultSize={{
            width: '100%',
            height: 'auto'
        }}
        onResizeStart={action('onResizeStart')}
        onResizing={action('onResizing')}
        onResizeStop={action('onResizeStop')}
    >
        <div className="flexRow_center alignCenter flexFuild" style={{height: '100vh', background: 'yellow'}}>
            content resizable
        </div>
    </ResizableBox>
);
