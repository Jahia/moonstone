import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import markdownNotes from './ResizableBox.md';

import {ResizableBox} from './index';

const selectZones = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];

storiesOf('Components|ResizableBox', module)
    .addParameters({
        component: ResizableBox,
        componentSubtitle: 'ResizableBox',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <ResizableBox
            enable={select('Enable', selectZones, 'right')}
            minWidth={text('Minimum width', 100)}
            maxWidth={text('Maximum width', 600)}
            defaultSize={{
                width: '100%',
                height: 'auto'
            }}
        >
            <div style={{height: '400px', background: 'yellow'}}>
                content resizable
            </div>
        </ResizableBox>

    ));
