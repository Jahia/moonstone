import {useArgs} from 'storybook/preview-api';
import preview from '../../../../.storybook/preview';
import {CheckboxItem} from './CheckboxItem';
import {CheckboxItemProps} from './CheckboxItem.types';

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
    args: {
        id: 'uncontrolled-item',
        label: 'Uncontrolled CheckboxItem'
    }
});

export const Controlled = meta.story({
    render: (args: CheckboxItemProps) => {
        const [{checked}, updateArgs] = useArgs();

        const handleOnChange = () => {
            updateArgs({isChecked: !checked});
        };

        return (
            <CheckboxItem
                checked={checked}
                onChange={() => handleOnChange()}
                {...args}
            />
        );
    },
    args: {
        id: 'controlled-item',
        label: 'Controlled CheckboxItem'
    }
});

export const Playground = meta.story({
    args: {
        id: 'playground-item',
        label: 'Play with me',
        description: 'Use the storybook controls to update this element',
        value: 'playground-value'
    }
});
