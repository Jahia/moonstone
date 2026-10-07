import markdownNotes from './IconTextIcon.md?raw';
import { IconTextIcon } from './index';
import { iconArgType } from '~/__storybook__/iconArgType';
import { Apps, Love } from '~/icons';

export default {
    title: 'Components/IconTextIcon',
    component: IconTextIcon,
    parameters: {
        layout: 'centered',
        componentSubtitle: 'Short text framed by icons.',
        docs: { description: { component: markdownNotes } },
    },
    argTypes: {
        iconStart: iconArgType,
        iconEnd: iconArgType,
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
