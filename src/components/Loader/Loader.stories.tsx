import preview from '../../../.storybook/preview';
import {Loader as LoaderCmp} from './index';
import type {LoaderProps} from './Loader.types';

const meta = preview.meta({
    title: 'Components/Loader',
    component: LoaderCmp,
    parameters: {
        layout: 'centered'
    }
});

export const Loader = meta.story({
    args: {
        size: 'small'
    },
    render: (args: LoaderProps) => <LoaderCmp {...args}/>
});
