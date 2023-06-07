import {Checkbox} from '~/components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'}
    }
};

export const DefaultControlled = {
    args: {
        'aria-label': 'default example checkbox'
    },
    name: 'Default and uncontrolled'
};

export const Indeterminate = {
    args: {
        indeterminate: true,
        'aria-label': 'indeterminate example checkbox'
    }
};
