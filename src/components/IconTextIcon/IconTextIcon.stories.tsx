import preview from '~/__storybook__/preview';
import {IconTextIcon} from './index';
import {Apps, Love} from '~/icons';
import {iconArgType} from '~/__storybook__/iconArgType';

const meta = preview.meta({
    title: 'Components/IconTextIcon',
    component: IconTextIcon,

    parameters: {
        layout: 'centered'
    },

    argTypes: {
        iconStart: iconArgType,
        iconEnd: iconArgType
    }
});

export const Default = meta.story({
    name: 'Icon + Text + Icon',

    args: {
        iconStart: <Love/>,
        iconEnd: <Apps/>,
        children: 'This is text sandwiched by icons'
    }
});
