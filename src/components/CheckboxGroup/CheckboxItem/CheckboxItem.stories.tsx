import type {ChangeEvent} from 'react';
import preview from '~/__storybook__/preview';
import {useArgs} from 'storybook/preview-api';

import {CheckboxItem} from './CheckboxItem';

const meta = preview.meta({
    title: 'Components/CheckboxGroup/CheckboxItem',
    component: CheckboxItem,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true}
    },
    argTypes: {
        // When enabled, the controlledCheckbox doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
        // OnChange: {action: 'onChange'},
        onClick: {action: 'onClick'},
        onBlur: {action: 'onBlur'},
        onFocus: {action: 'onFocus'}
    }
});

export const Uncontrolled = meta.story({
    render: args => <CheckboxItem {...args}/>,
    args: {
        id: 'uncontrolled-checkbox-item',
        label: 'Uncontrolled CheckboxItem'
    }
});

export const Controlled = meta.story({
    args: {
        checked: false,
        id: 'controlled-checkbox-item',
        label: 'Controlled CheckboxItem'
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
            <CheckboxItem
                {...args}
                checked={Boolean(checked)}
                onChange={handleOnChange}
            />
        );
    }
});

export const Playground = meta.story({
    render: args => <CheckboxItem {...args}/>,
    args: {
        id: 'playground-item',
        label: 'Play with me',
        description: 'Use the storybook controls to update this element',
        value: 'playground-value'
    }
});
