import preview from '../../../.storybook/preview';
import {ImgWrapper} from './index';
import markdownNotes from './ImgWrapper.md';

const meta = preview.meta({
    title: 'Utilities/ImgWrapper',
    component: ImgWrapper,
    parameters: {
        componentSubtitle: 'Image wrapper',
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
});

export const Default = meta.story({
    args: {
        src: 'https://www.jahia.com/modules/jahiacom-templates/images/favicon/favicon.ico',
        alt: 'imgWrapper',
        size: 'default'
    }
});
