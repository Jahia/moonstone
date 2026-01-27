import preview from '~storybook/preview';
import {IconTextIcon} from './index';
import {Apps, Love} from '~/icons';

const meta = preview.meta({
    title: 'Components/IconTextIcon',
    component: IconTextIcon,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        children: {table: {disable: true}}
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
