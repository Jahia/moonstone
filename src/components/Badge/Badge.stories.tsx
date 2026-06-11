import {Meta} from '@storybook/react-vite';

import {Badge} from './index';

export default {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof Badge>;

export const Accent = {
    args: {
        label: '3',
        color: 'accent'
    }
};

export const Success = {
    args: {
        label: '3',
        color: 'success'
    }
};

export const Danger = {
    args: {
        label: '3',
        color: 'danger'
    }
};
