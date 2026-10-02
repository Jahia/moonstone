import { Loader as LoaderCmp } from './index';
import markdownNotes from './Loader.md?raw';

export default {
    title: 'Components/Loader',
    component: LoaderCmp,
    tags: ['dark-theme'],
    parameters: {
        layout: 'centered',
        componentSubtitle: 'Shows an animated spinner while content is loading.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Loader = {
    args: {
        size: 'small',
    },
};
