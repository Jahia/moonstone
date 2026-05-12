import {ImgWrapper} from './index';
import icon from '~/__storybook__/assets/img-icon.webp';

import markdownNotes from './ImgWrapper.md';

export default {
    title: 'Utilities/ImgWrapper',
    component: ImgWrapper,
    parameters: {
        layout: 'centered',
        docs: {
            description: {component: markdownNotes},
            subtitle: 'Image wrapper'
        }
    }
};

export const Default = {
    args: {
        src: icon,
        alt: 'imgWrapper',
        size: 'default'
    }
};

