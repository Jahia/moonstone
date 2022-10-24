import React from 'react';
import {action} from '@storybook/addon-actions';
import markdownNotes from './ResizableBox.md';

import {ResizableBox} from './index';

export default {
    title: 'Components/ResizableBox',
    component: ResizableBox,

    parameters: {
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <ResizableBox
        enable={['right']}
        minWidth="100"
        maxWidth="600"
        defaultSize={{
            width: '100%',
            height: 'auto'
        }}
    >
        <div style={{height: '400px', background: 'yellow'}}>
            content resizable
        </div>
    </ResizableBox>
);

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
        <div style={{height: '400px', background: 'yellow'}}>
            content resizable
        </div>
    </ResizableBox>
);
