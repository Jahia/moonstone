import preview from '~/__storybook__/preview';
import markdownNotes from './Pill.md';

import {Pill} from './index';

const meta = preview.meta({
    title: 'Components/Pill',
    component: Pill,

    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
});

export const Default = meta.story({
    args: {
        label: 'ListItem label'
    }
});
