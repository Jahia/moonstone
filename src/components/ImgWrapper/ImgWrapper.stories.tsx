import markdownNotes from './ImgWrapper.md';
import { ImgWrapper } from './index';
import icon from '~/__storybook__/assets/img-icon.webp';

export default {
    title: 'Utilities/ImgWrapper',
    component: ImgWrapper,
    parameters: {
        componentSubtitle: 'Image wrapper',
        layout: 'centered',
        notes: { markdown: markdownNotes },
    },
};

export const Default = {
    args: {
        src: icon,
        alt: 'imgWrapper',
        size: 'default',
    },
};
