import markdownNotes from './ImgWrapper.md?raw';
import { ImgWrapper } from './index';
import icon from '~/__storybook__/assets/img-icon.webp';

export default {
    title: 'Utilities/ImgWrapper',
    component: ImgWrapper,
    parameters: {
        componentSubtitle: 'An image shown at icon scale.',
        layout: 'centered',
        docs: { description: { component: markdownNotes } },
    },
};

export const Default = {
    args: {
        src: icon,
        alt: 'imgWrapper',
        size: 'default',
    },
};
