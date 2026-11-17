import markdownNotes from './IconTextIcon.md?raw';
import { IconTextIcon } from './index';
import { Apps, Love } from '~/icons';

export default {
    title: 'Components/IconTextIcon',
    component: IconTextIcon,
    parameters: {
        layout: 'centered',
        componentSubtitle: 'Keeps short text and its icons aligned on one line.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Default = {
    name: 'Icon + Text + Icon',

    args: {
        iconStart: <Love/>,
        iconEnd: <Apps/>,
        children: 'This is text sandwiched by icons',
    },
};
