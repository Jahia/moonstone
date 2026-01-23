import preview from '../../../.storybook/preview';
import markdownNotes from './Pill.md';
import { Pill } from './index';
import type { PillProps } from './Pill.types';

const meta = preview.meta({
    title: 'Components/Pill',
    component: Pill,
    parameters: {
        layout: 'centered',
        notes: { markdown: markdownNotes }
    }
});

export const Default = meta.story({
    args: {
        label: 'Pill label'
    }
});
