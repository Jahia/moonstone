import { Loader as LoaderCmp } from './index';

export default {
    title: 'Components/Loader',
    component: LoaderCmp,
    tags: ['dark-theme'],
    parameters: {
        layout: 'centered',
    },
};

export const Loader = {
    args: {
        size: 'small',
    },
};
