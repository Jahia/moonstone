import preview from '~/__storybook__/preview';
import {useState} from 'react';

import {Switch} from './index';

const meta = preview.meta({
    title: 'Components/Switch',
    component: Switch,

    parameters: {
        layout: 'centered'
        // When enabled, the controlledSwitch doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
        // Actions: {argTypesRegex: '^on.*'}
    },

    args: {
        'aria-label': 'switch component'
    }
});

export const Uncontrolled = meta.story();

export const Controlled = meta.story({
    render: args => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Switch
                checked={checked}
                onChange={() => handleOnChange()}
                {...args}
            />
        );
    }
});
