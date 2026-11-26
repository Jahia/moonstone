import { Loader as LoaderCmp } from './index';
import markdownNotes from './Loader.md?raw';

export default {
    title: 'Components/Loader',
    component: LoaderCmp,
    tags: ['dark-theme'],
    parameters: {
        layout: 'centered',
        componentSubtitle: 'A wait of unknown length while content loads.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Loader = {
    args: {
        size: 'small',
    },
};
