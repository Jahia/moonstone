import type {ChangeEvent} from 'react';
import preview from '~/__storybook__/preview';
import {useArgs} from 'storybook/preview-api';

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
    args: {
        checked: false
    },
    render(args) {
        const [{checked}, updateArgs] = useArgs();

        const handleOnChange = (
            event: ChangeEvent<HTMLInputElement>,
            value: string,
            nextChecked: boolean
        ) => {
            args.onChange?.(event, value, nextChecked);
            updateArgs({checked: nextChecked});
        };

        return (
            <Switch
                {...args}
                checked={Boolean(checked)}
                onChange={handleOnChange}
            />
        );
    }
});
