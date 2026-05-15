import preview from '~/__storybook__/preview';

import {EmptyData} from './index';
import {Love} from '~/icons';

const meta = preview.meta({
    title: 'Components/EmptyData',
    component: EmptyData,
    tags: ['beta'],
    parameters: {
        layout: 'centered'
    }
});

export const Default = meta.story({
    args: {
        title: 'No data available',
        message: 'There is no data to display at the moment.'
    }
});

export const WithMessage = meta.story({
    args: {
        title: 'No data available',
        message: 'There is no data to display at the moment.'
    }
});

export const WithIcon = meta.story({
    args: {
        icon: <Love size="big"/>,
        title: 'No favorites found',
        message: 'You have not added any items to your favorites yet.'
    }
});

export const Full = meta.story({
    args: {
        icon: <Love size="big"/>,
        title: 'No favorites found',
        message: 'You have not added any items to your favorites yet.'
    }
});
