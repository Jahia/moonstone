import React from 'react';
import {withKnobs, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import markdownNotes from './ResizableBox.md';

import {ResizableBox} from './index';

export default {
    title: 'Components/ResizableBox',
    decorators: [withKnobs],

    parameters: {
        component: ResizableBox,
        componentSubtitle: 'ResizableBox',
        notes: {markdown: markdownNotes}
    }
};

export const Default = () => (
    <ResizableBox
        enable={['right']}
        minWidth={number('Minimum width', 100)}
        maxWidth={number('Maximum width', 600)}
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

Default.story = {
    name: 'default'
};

export const Actions = () => (
    <ResizableBox
        enable={['right']}
        minWidth={number('Minimum width', 100)}
        maxWidth={number('Maximum width', 600)}
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

Actions.story = {
    name: 'actions'
};
