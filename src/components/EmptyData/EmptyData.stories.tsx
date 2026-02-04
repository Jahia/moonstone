
import {EmptyData} from './index';
import {Love} from '~/icons';

export default {
    title: 'Components/EmptyData',
    component: EmptyData,
    parameters: {
        layout: 'centered'
    }
};

export const Default = {
    args: {
        title: 'No data available'
    }
};

export const WithMessage = {
    args: {
        title: 'No data available',
        message: 'There is no data to display at the moment.'
    }
};

export const WithIcon = {
    args: {
        icon: <Love size="big"/>,
        title: 'No favorites found'
    }
};

export const Full = {
    args: {
        icon: <Love size="big"/>,
        title: 'No favorites found',
        message: 'You have not added any items to your favorites yet.'
    }
};
