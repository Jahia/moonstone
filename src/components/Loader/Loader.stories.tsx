import preview from '~/__storybook__/preview';

import {Loader as LoaderCmp} from './index';

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
    }
});
