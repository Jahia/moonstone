import type {ChangeEvent} from 'react';
import preview from '~/__storybook__/preview';
import {useArgs} from 'storybook/preview-api';

import {Checkbox} from '~/components';

const meta = preview.meta({
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    // When enabled, the controlledCheckbox doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
    // Actions: {argTypesRegex: '^on.*'}
    }
});

export const Uncontrolled = meta.story({
    args: {
        'aria-label': 'default example checkbox'
    }
});

export const Indeterminate = meta.story({
    args: {
        indeterminate: true,
        'aria-label': 'indeterminate example checkbox'
    }
});

export const Controlled = meta.story({
    args: {
        checked: false,
        'aria-label': 'controlled checkbox'
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
            <Checkbox
                {...args}
                checked={Boolean(checked)}
                onChange={handleOnChange}
            />
        );
    }
});
